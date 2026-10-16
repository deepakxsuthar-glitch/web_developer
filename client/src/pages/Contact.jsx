import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { usePackage } from '../context/PackageContext';

const Contact = () => {
  const { selectedPackage, setSelectedPackage } = usePackage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedPackage: selectedPackage || 'Business Website (₹9,000)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const packageOptions = [
    'Basic Portfolio Website (₹5,000)',
    'Business Website (₹9,000)',
    'Custom Quote / Other',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setSuccessMessage(
        'Thank you! Your message has been sent successfully. Check your email inbox for an automated confirmation. Deepak will reply within 24 hours.'
      );

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        selectedPackage: 'Business Website (₹9,000)',
        message: '',
      });
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
          Get In Touch
        </span>
        <h1 className="light-bg-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Let’s Build Something Amazing
        </h1>
        <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Ready to kick off your project? Fill out the form below or message me directly on WhatsApp for an instant response.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Col: Contact Info & Map placeholder */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick info cards */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
            
            <a
              href="mailto:rjdeepu00@gmail.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-slate-400">Email Deepak</p>
                <p className="text-sm font-semibold text-white truncate">rjdeepu00@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919256729688"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Call / WhatsApp (Fastest Response)</p>
                <p className="text-sm font-semibold text-white">+91 9256729688</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm font-semibold text-white">Rajasthan, India (Worldwide Remote)</p>
              </div>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden relative">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Service Area & Google Maps</span>
            </h4>
            
            <div className="relative h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center text-center p-4">
              {/* Map background grid graphic */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 space-y-1">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-white">Deepak Web Development Studio</p>
                <p className="text-[11px] text-slate-400">Serving clients across India, UAE, UK, US, & Worldwide</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3 text-xs text-slate-400">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Response time: Usually within 1–2 hours during 9:00 AM – 9:00 PM IST</span>
          </div>
        </div>

        {/* Right Col: The Contact Form */}
        <div className="lg:col-span-7">
          <div className="contact-form p-8 sm:p-10 rounded-3xl glass-panel shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Send a Project Inquiry</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill in the details below. Both Deepak and you will receive instant email notifications.
              </p>
            </div>

            {/* Success Alert */}
            {successMessage && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Error Alert */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-input text-sm"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-input text-sm"
                  />
                </div>
              </div>

              {/* Package Dropdown */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                  Select Desired Package *
                </label>
                <select
                  name="selectedPackage"
                  value={formData.selectedPackage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-input text-sm cursor-pointer"
                >
                  {packageOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#171717] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                  Tell Me About Your Project *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your business or website idea, any deadline requirements, or specific features you need..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-input text-sm resize-y"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-sm text-white btn-magenta-gradient shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Deepak</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-500">
                🔒 Your privacy is 100% protected. Zero spam. Directly received by Deepak at rjdeepu00@gmail.com.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
