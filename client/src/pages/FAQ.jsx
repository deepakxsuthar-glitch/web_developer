import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How long does it take to complete a website?',
      a: 'For the Basic Portfolio Website (₹5,000), typical delivery is 3 to 5 business days once content and goals are provided. For the Business Website (₹9,000), delivery is usually 7 to 10 business days.',
    },
    {
      q: 'What is included in the ₹5,000 Basic Portfolio Website?',
      a: 'The Basic Portfolio includes 1 to 2 pages, responsive layout across mobile and desktop, working contact form, clean scroll animations, speed optimization, and basic SEO meta tag configuration.',
    },
    {
      q: 'What is included in the ₹9,000 Business Website?',
      a: 'The Business Website is a complete multi-page site (>2 pages), custom business branding with logo placement, powerful conversion landing page, interactive mouse effects, contact form with instant dual email notifications, Google Maps embed, WhatsApp chat button, and 30 days of post-launch maintenance.',
    },
    {
      q: 'Do I need to buy domain and hosting separately?',
      a: 'I can deploy your website for free on high-performance platforms like Vercel or Render. If you want a custom domain (e.g., yourcompany.com), I will guide you through purchasing it (typically ₹700–₹1,000/yr) and connect it for free.',
    },
    {
      q: 'How does payment work?',
      a: 'Usually 50% upfront to initiate wireframing and design development, and the remaining 50% upon final client approval before going live on your domain. We accept UPI, Bank Transfer, and Google Pay.',
    },
    {
      q: 'Will my website look good on smartphones?',
      a: 'Yes, 100%! All websites are built with a "mobile-first" mindset. More than 70% of website visitors use smartphones, so touch responsiveness and quick mobile load times are our top priorities.',
    },
    {
      q: 'Can you help update my website later?',
      a: 'Yes, every package includes post-launch support (7 days for Basic, 30 days for Business). For long-term continuous updates or additions, I offer very affordable monthly or per-update retainer rates.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <section className="text-center mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
          Got Questions?
        </span>
        <h1 className="light-bg-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Everything you need to know about working with Deepak on your next web development project.
        </p>
      </section>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/70 border border-slate-800/80 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-semibold text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct WhatsApp Prompt */}
      <div className="mt-14 p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Have a specific question not listed here?</h3>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Send me a quick text on WhatsApp or email me. I’m always happy to discuss your unique project scope and ideas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919256729688"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full font-semibold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2 transition-all"
          >
            <span>Send Email Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
