import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Button } from '../components/Button';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/constants';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Contact Coach <span className="text-gradient-brand">Shanmuk</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Have questions about workout plans, diet customization, or 1-on-1 personal coaching? Reach out today for immediate guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Info Cards & WhatsApp */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick WhatsApp Action Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/80 to-dark-900 border border-emerald-500/30 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Prefer Faster Communication?</h3>
                <p className="text-xs text-emerald-400 font-semibold">Direct WhatsApp Chat Available</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Get direct responses to your queries on WhatsApp without waiting for email replies.
            </p>

            <Button
              href={getWhatsAppUrl("Hi Shanmuk, I would like to inquire about customized workout and diet plans.")}
              external
              variant="whatsapp"
              fullWidth
              size="md"
              icon={MessageSquare}
            >
              Open WhatsApp Chat Now
            </Button>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl glass-card border border-gray-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Email Address</div>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-gray-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Phone / WhatsApp</div>
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                  +{SITE_CONFIG.whatsappNumber}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-gray-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Location</div>
                <div className="text-sm font-semibold text-white">{SITE_CONFIG.location}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-gray-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Response Hours</div>
                <div className="text-sm font-semibold text-white">Mon – Sat: 6:00 AM – 9:00 PM IST</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: React Hook Form + Zod Validated Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
