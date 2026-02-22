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
import { CheckCircle2, Calendar as CalendarIcon, Clock, Users, Shield, Sparkles, ArrowRight } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const MASCOT_CTA = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/kvjj5r6z_Mascot_6.png";
const MASCOT_WHY_BOOK = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/fy06h7y9_Mascot_9.png";

const benefits = [
  { icon: Clock, text: "Personalised demo", color: "from-blue-500 to-cyan-500" },
  { icon: Users, text: "See features relevant to your business", color: "from-violet-500 to-purple-500" },
  { icon: Shield, text: "No commitment required", color: "from-emerald-500 to-teal-500" },
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
        className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <CheckCircle2 className="w-10 h-10 text-white" />
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
      className="py-20 md:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Mascot above title */}
          <div className="flex justify-center -mb-4">
            <img
              src={MASCOT_CTA}
              alt="atmytyp Mascot"
              data-testid="demo-header-mascot"
              className="w-44 md:w-56 h-auto drop-shadow-lg"
            />
          </div>
          <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-5 py-2 text-sm font-semibold mb-4 shadow-lg shadow-orange-500/30">
            Get Started Today
          </span>
          <h2
            data-testid="demo-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Book Your Free Demo
          </h2>
          <p className="text-lg text-slate-600">
            See how atmytyp can transform your business operations in just one call.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left - Why Book (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Why Book a Demo?</h3>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className={`w-11 h-11 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-200 font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Mascot */}
                <div className="flex justify-center mt-8">
                  <img
                    src={MASCOT_WHY_BOOK}
                    alt="atmytyp Mascot"
                    data-testid="demo-mascot"
                    className="w-40 h-auto drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form (3 columns) */}
          <div className="lg:col-span-3 flex">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 relative overflow-hidden w-full">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full" />
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-semibold text-sm">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      data-testid="demo-input-name"
                      className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-semibold text-sm">
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
                      className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-slate-700 font-semibold text-sm">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Inc."
                      data-testid="demo-input-company"
                      className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-semibold text-sm">
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
                      className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>

                {/* Employee Count */}
                <div>
                  <Label className="text-slate-700 font-semibold text-sm">
                    Number of Employees *
                  </Label>
                  <Select
                    value={formData.employees}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger
                      data-testid="demo-select-employees"
                      className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500"
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
                  <Label className="text-slate-700 font-semibold text-sm flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-orange-500" />
                    Select Demo Date *
                  </Label>
                  <div className="mt-3 flex justify-center">
                    <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-200">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={disabledDays}
                        data-testid="demo-calendar"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  {date && (
                    <p className="text-center text-sm text-orange-600 font-semibold mt-3 bg-orange-50 py-2 px-4 rounded-full inline-flex mx-auto w-full justify-center">
                      Selected: {date.toLocaleDateString("en-IN", { weekday: "long", month: "short", day: "numeric" })}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-semibold text-sm">
                    Anything specific you'd like to see? (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business needs..."
                    data-testid="demo-input-message"
                    className="mt-2 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500 min-h-[100px] transition-all"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="demo-submit-btn"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 rounded-full py-7 font-bold text-lg transition-all duration-300 group"
                >
                  {isSubmitting ? "Booking..." : "Book My Free Demo"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-xs text-slate-500">
                  By booking, you agree to our Privacy Policy. We'll never spam you.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
