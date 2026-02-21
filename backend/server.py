from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class DemoBookingCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: str = Field(..., min_length=2, max_length=100)
    phone: Optional[str] = None
    employees: str = Field(..., description="Employee count range")
    date: str = Field(..., description="Selected demo date in ISO format")
    message: Optional[str] = None


class DemoBooking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: str
    phone: Optional[str] = None
    employees: str
    date: str
    message: Optional[str] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = None
    message: str = Field(..., min_length=10, max_length=1000)


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Routes
@api_router.get("/")
async def root():
    return {"message": "atmytyp ERP API is running"}


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "atmytyp-marketing"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/demo-booking", response_model=DemoBooking)
async def create_demo_booking(input: DemoBookingCreate):
    """Submit a demo booking request"""
    booking_dict = input.model_dump()
    booking_obj = DemoBooking(**booking_dict)
    
    doc = booking_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.demo_bookings.insert_one(doc)
    logger.info(f"Demo booking created for {input.email}")
    
    return booking_obj


@api_router.get("/demo-bookings", response_model=List[DemoBooking])
async def get_demo_bookings():
    """Get all demo bookings (admin endpoint)"""
    bookings = await db.demo_bookings.find({}, {"_id": 0}).to_list(1000)
    
    for booking in bookings:
        if isinstance(booking.get('created_at'), str):
            booking['created_at'] = datetime.fromisoformat(booking['created_at'])
    
    return bookings


@api_router.post("/contact", response_model=Contact)
async def create_contact(input: ContactCreate):
    """Submit a contact form"""
    contact_dict = input.model_dump()
    contact_obj = Contact(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contacts.insert_one(doc)
    logger.info(f"Contact form submitted by {input.email}")
    
    return contact_obj


@api_router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    """Get all contact submissions (admin endpoint)"""
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    
    for contact in contacts:
        if isinstance(contact.get('created_at'), str):
            contact['created_at'] = datetime.fromisoformat(contact['created_at'])
    
    return contacts


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
