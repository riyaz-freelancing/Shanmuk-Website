import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { getWhatsAppUrl } from '../config/constants';

// Zod Schema Validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  goal: z.string().min(1, 'Please select your primary fitness goal'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      goal: 'Weight Loss',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simulate asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      reset();
    } catch (err) {
      setErrorMessage('Failed to send message. Please try again or chat via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-gray-800 shadow-2xl relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {isSuccess ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-white">Message Sent Successfully!</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Thank you for reaching out! Coach Shanmuk will review your goals and get back to you within 24 hours.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => setIsSuccess(false)}
              variant="secondary"
              size="md"
            >
              Send Another Message
            </Button>
            
            <Button
              href={getWhatsAppUrl("Hi Shanmuk, I just submitted the contact form on your website!")}
              external
              variant="whatsapp"
              size="md"
              icon={MessageSquare}
            >
              Instant WhatsApp Connect
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
            <span>Send Coach Shanmuk a Message</span>
          </h3>
          <p className="text-xs text-gray-400 mb-6">
            Fill out the form below to receive customized guidance, plan recommendations, or coaching inquiries.
          </p>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Grid Layout for Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Full Name <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...register('name')}
                className={`w-full px-4 py-3 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                  errors.name ? 'border-red-500/80 bg-red-500/5' : 'border-gray-700/80 hover:border-gray-600'
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-[11px] mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Email Address <span className="text-emerald-400">*</span>
              </label>
              <input
                type="email"
                placeholder="rahul@example.com"
                {...register('email')}
                className={`w-full px-4 py-3 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                  errors.email ? 'border-red-500/80 bg-red-500/5' : 'border-gray-700/80 hover:border-gray-600'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-[11px] mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Phone / WhatsApp Number <span className="text-emerald-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...register('phone')}
                className={`w-full px-4 py-3 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                  errors.phone ? 'border-red-500/80 bg-red-500/5' : 'border-gray-700/80 hover:border-gray-600'
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-[11px] mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Primary Fitness Goal */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Primary Fitness Goal <span className="text-emerald-400">*</span>
              </label>
              <select
                {...register('goal')}
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gray-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 hover:border-gray-600 transition-all"
              >
                <option value="Weight Loss">Weight Loss & Fat Burn</option>
                <option value="Muscle Gain">Hypertrophy & Muscle Gain</option>
                <option value="Fat Loss">Body Recomposition</option>
                <option value="Strength">Powerlifting & Pure Strength</option>
                <option value="Bodybuilding">Physique Bodybuilding</option>
                <option value="General Fitness">General Health & Longevity</option>
              </select>
            </div>

          </div>

          {/* Message textarea */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Your Message or Questions <span className="text-emerald-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell Coach Shanmuk about your current fitness level, challenges, or personal goals..."
              {...register('message')}
              className={`w-full px-4 py-3 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                errors.message ? 'border-red-500/80 bg-red-500/5' : 'border-gray-700/80 hover:border-gray-600'
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-[11px] mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Action & WhatsApp option */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              fullWidth
              variant="primary"
              size="lg"
              icon={isSubmitting ? Loader2 : Send}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </Button>
          </div>

        </form>
      )}

    </div>
  );
};
