import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Calendar as CalendarIcon, Clock, Users, Shield } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const MASCOT_CTA = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/kvjj5r6z_Mascot_6.png";

const benefits = [
  { icon: Clock, text: "30-minute personalized demo" },
  { icon: Users, text: "See features relevant to your business" },
  { icon: Shield, text: "No commitment required" },
];

const employeeRanges = [
  "1-10",
  "11-25",
  "26-50",
  "51-100",
  "100+",
];

export default function DemoBookingSection() {
  const [date, setDate] = useState(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, employees: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date) {
      toast.error("Please select a date for your demo");
      return;
    }

    if (!formData.name || !formData.email || !formData.company || !formData.employees) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        date: date.toISOString(),
      };

      await axios.post(`${API}/demo-booking`, payload);
      
      setIsSuccess(true);
      toast.success("Demo booked successfully! We'll be in touch soon.");
    } catch (error) {
      console.error("Demo booking error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setDate(undefined);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      employees: "",
      message: "",
    });
  };

  // Disable past dates and weekends
  const disabledDays = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = date.getDay();
    return date < today || day === 0 || day === 6;
  };

  if (isSuccess) {
    return (
      <section
        id="demo"
        data-testid="demo-success-section"
        className="py-20 md:py-32 bg-gradient-to-b from-white to-orange-50"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Demo Booked Successfully!
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Thank you, {formData.name}! We've received your demo request for{" "}
              <strong>{date?.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</strong>.
              Our team will reach out to {formData.email} within 24 hours.
            </p>
            <Button
              onClick={resetForm}
              data-testid="book-another-demo-btn"
              variant="outline"
              className="rounded-full px-8 py-4"
            >
              Book Another Demo
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="demo"
      data-testid="demo-booking-section"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Get Started
          </span>
          <h2
            data-testid="demo-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Book Your Free Demo
          </h2>
          <p className="text-lg text-slate-600">
            See how atmytyp can transform your business operations. Our team will
            show you exactly how it works for your industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Why Book */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why Book a Demo?
            </h3>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Mascot */}
            <div className="flex justify-center">
              <img
                src={MASCOT_CTA}
                alt="atmytyp Mascot"
                data-testid="demo-mascot"
                className="w-48 h-auto drop-shadow-lg float-element"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    data-testid="demo-input-name"
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Work Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    data-testid="demo-input-email"
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-slate-700 font-medium">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Inc."
                    data-testid="demo-input-company"
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    data-testid="demo-input-phone"
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Employee Count */}
              <div>
                <Label className="text-slate-700 font-medium">
                  Number of Employees *
                </Label>
                <Select
                  value={formData.employees}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger
                    data-testid="demo-select-employees"
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                  >
                    <SelectValue placeholder="Select employee count" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range} employees
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Calendar */}
              <div>
                <Label className="text-slate-700 font-medium flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  Select Demo Date *
                </Label>
                <div className="mt-2 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={disabledDays}
                    data-testid="demo-calendar"
                    className="rounded-xl border border-slate-200"
                  />
                </div>
                {date && (
                  <p className="text-center text-sm text-orange-600 font-medium mt-2">
                    Selected: {date.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-slate-700 font-medium">
                  Anything specific you'd like to see? (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business needs..."
                  data-testid="demo-input-message"
                  className="mt-1.5 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 min-h-[100px]"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                data-testid="demo-submit-btn"
                className="w-full bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25 rounded-full py-6 font-bold text-lg transition-all duration-300"
              >
                {isSubmitting ? "Booking..." : "Book My Free Demo"}
              </Button>

              <p className="text-center text-xs text-slate-500">
                By booking, you agree to our Privacy Policy. We'll never spam you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
