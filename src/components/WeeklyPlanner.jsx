import React from 'react';
import { Calendar, Dumbbell, Flame, Heart, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export const WeeklyPlanner = () => {
  const schedule = [
    { day: "Monday", split: "Chest + Triceps", type: "Hypertrophy", intensity: "High", focus: "Bench Press, Incline Press & Dips", icon: Dumbbell },
    { day: "Tuesday", split: "Back + Biceps", type: "Hypertrophy", intensity: "High", focus: "Deadlifts, Pull-ups & Barbell Rows", icon: Dumbbell },
    { day: "Wednesday", split: "Active Rest / Cardio", type: "Recovery", intensity: "Low", focus: "30-min Steady State Walk & Mobility", icon: Heart },
    { day: "Thursday", split: "Shoulders + Abs", type: "Strength", intensity: "Moderate", focus: "Overhead Press, Lateral Raises & Core", icon: Dumbbell },
    { day: "Friday", split: "Legs + Calves", type: "Hypertrophy", intensity: "Very High", focus: "Squats, Romanian Deadlifts & Lunges", icon: Flame },
    { day: "Saturday", split: "Full Body / Cardio", type: "Conditioning", intensity: "High", focus: "Circuit Training, HIIT & Core", icon: Flame },
    { day: "Sunday", split: "Full Rest & Recovery", type: "Rest", intensity: "Zero", focus: "Sleep 8+ hrs, Sauna / Foam Rolling", icon: RefreshCcw },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600" />
            Optimal Weekly Training Schedule
          </h3>
          <p className="text-xs text-slate-600 font-semibold mt-1">
            Designed for 48-hour recovery windows between muscle groups to maximize strength and muscle growth.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-extrabold border border-emerald-300 whitespace-nowrap">
          7-Day Blueprint
        </span>
      </div>

      {/* Desktop / Tablet View Grid */}
      <div className="hidden md:grid md:grid-cols-7 gap-3">
        {schedule.map((item, idx) => {
          const isRest = item.type === "Rest" || item.type === "Recovery";
          return (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-4 rounded-2xl border flex flex-col justify-between h-56 text-center transition-all ${
                isRest
                  ? 'bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-white border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <span className={`text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full inline-block mb-2 ${
                  isRest ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  {item.day.slice(0, 3)}
                </span>
                
                <h4 className="text-sm font-extrabold text-slate-900 mb-2 leading-snug">
                  {item.split}
                </h4>

                <p className="text-[11px] text-slate-600 font-semibold leading-tight">
                  {item.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600 font-bold">
                <span>{item.type}</span>
                <span className={`font-black ${isRest ? 'text-slate-500' : 'text-emerald-700'}`}>
                  {item.intensity}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Card Stack */}
      <div className="md:hidden space-y-3">
        {schedule.map((item) => {
          const Icon = item.icon;
          const isRest = item.type === "Rest" || item.type === "Recovery";
          return (
            <div
              key={item.day}
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                isRest
                  ? 'bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isRest ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-900">{item.day}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isRest ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="text-sm font-extrabold text-emerald-700">{item.split}</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">{item.focus}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
