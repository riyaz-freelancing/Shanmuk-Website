import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12 bg-slate-50 text-slate-900">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Contact Coach <span className="text-gradient-brand">Shanmuk</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Have questions about workout plans, diet customization, or 1-on-1 personal coaching? Reach out today for immediate guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Info Cards & WhatsApp */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick WhatsApp Action Box */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Prefer Faster Communication?</h3>
                <p className="text-xs text-emerald-400 font-extrabold">Direct WhatsApp Chat Available</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Get direct responses to your queries on WhatsApp without waiting for email replies.
            </p>

            <a
              href={getWhatsAppUrl("Hi Shanmuk, I would like to inquire about customized workout and diet plans.")}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Open WhatsApp Chat Now</span>
            </a>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-slate-500">Email Address</div>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm sm:text-base font-black text-slate-900 hover:text-emerald-600 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-slate-500">Phone / WhatsApp</div>
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="text-sm sm:text-base font-black text-slate-900 hover:text-emerald-600 transition-colors">
                  +{SITE_CONFIG.whatsappNumber}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-slate-500">Location</div>
                <div className="text-sm sm:text-base font-black text-slate-900">{SITE_CONFIG.location}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-slate-500">Response Hours</div>
                <div className="text-sm sm:text-base font-black text-slate-900">Mon – Sat: 6:00 AM – 9:00 PM IST</div>
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
