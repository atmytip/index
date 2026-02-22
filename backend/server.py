from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
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

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'jitendra3588@gmail.com')

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
    phone: str = Field(..., min_length=5, max_length=20)
    employees: str = Field(..., description="Employee count range")
    date: str = Field(..., description="Selected demo date in ISO format")
    message: str = Field(default="", max_length=1000)


class DemoBooking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: str
    phone: str
    employees: str
    date: str
    message: str
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


async def send_demo_booking_email(booking: DemoBooking):
    """Send email notification for new demo booking"""
    try:
        # Parse the date for display
        booking_date = datetime.fromisoformat(booking.date.replace('Z', '+00:00'))
        formatted_date = booking_date.strftime("%A, %B %d, %Y")
        
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #F97316, #EA580C); padding: 20px; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0;">New Demo Booking Request</h1>
            </div>
            <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px;">
                <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Name:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{booking.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Email:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{booking.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Company:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{booking.company}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Phone:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{booking.phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Employees:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{booking.employees}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Preferred Date:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{formatted_date}</td>
                    </tr>
                </table>
                
                <h3 style="color: #1e293b; margin-top: 20px;">Message:</h3>
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <p style="color: #475569; margin: 0; white-space: pre-wrap;">{booking.message}</p>
                </div>
                
                <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
                    This email was sent from the atmytip demo booking form.
                </p>
            </div>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Demo Booking: {booking.name} from {booking.company}",
            "html": html_content
        }
        
        # Run sync SDK in thread to keep FastAPI non-blocking
        email_response = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Demo booking email sent successfully: {email_response}")
        return email_response
        
    except Exception as e:
        logger.error(f"Failed to send demo booking email: {str(e)}")
        # Don't raise - we still want to save the booking even if email fails
        return None


# Routes
@api_router.get("/")
async def root():
    return {"message": "atmytip ERP API is running"}


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "atmytip-marketing"}


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
    
    # Send email notification (non-blocking)
    await send_demo_booking_email(booking_obj)
    
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
