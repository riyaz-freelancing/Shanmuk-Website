import React from 'react';
import { Calendar, Dumbbell, Flame, Heart, RefreshCcw, ShieldCheck } from 'lucide-react';
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-dark-800/80 border border-gray-800">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            Optimal Weekly Training Schedule
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Designed for 48-hour recovery windows between muscle groups to maximize strength and muscle growth.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30 whitespace-nowrap">
          7-Day Blueprint
        </span>
      </div>

      {/* Desktop / Tablet View Grid */}
      <div className="hidden md:grid md:grid-cols-7 gap-3">
        {schedule.map((item, idx) => {
          const Icon = item.icon;
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
                  ? 'bg-dark-900/60 border-gray-800/60 text-gray-400'
                  : 'bg-dark-800/90 border-gray-800 hover:border-emerald-500/50 hover:bg-dark-700/80'
              }`}
            >
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full inline-block mb-2 ${
                  isRest ? 'bg-gray-800 text-gray-400' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {item.day.slice(0, 3)}
                </span>
                
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {item.split}
                </h4>

                <p className="text-[11px] text-gray-400 leading-tight">
                  {item.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-gray-400">
                <span>{item.type}</span>
                <span className={`font-semibold ${isRest ? 'text-gray-500' : 'text-emerald-400'}`}>
                  {item.intensity}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Card Stack */}
      <div className="md:hidden space-y-3">
        {schedule.map((item, idx) => {
          const Icon = item.icon;
          const isRest = item.type === "Rest" || item.type === "Recovery";
          return (
            <div
              key={item.day}
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                isRest
                  ? 'bg-dark-900/60 border-gray-800/60 text-gray-400'
                  : 'bg-dark-800/90 border-gray-800 hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isRest ? 'bg-gray-800 text-gray-400' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-white">{item.day}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isRest ? 'bg-gray-800 text-gray-400' : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-emerald-400">{item.split}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.focus}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
