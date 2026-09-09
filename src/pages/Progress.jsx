import React from 'react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TrendingUp, Flame, Trophy, Award, Calendar, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { ProgressCard } from '../components/ProgressCard';
import { WeeklyPlanner } from '../components/WeeklyPlanner';

export const Progress = () => {
  // Recharts Mock Datasets
  const weightData = [
    { week: 'W1', weight: 85.5, target: 75.0 },
    { week: 'W2', weight: 84.8, target: 75.0 },
    { week: 'W3', weight: 84.0, target: 75.0 },
    { week: 'W4', weight: 83.2, target: 75.0 },
    { week: 'W5', weight: 82.5, target: 75.0 },
    { week: 'W6', weight: 81.7, target: 75.0 },
    { week: 'W7', weight: 80.9, target: 75.0 },
    { week: 'W8', weight: 80.1, target: 75.0 },
    { week: 'W9', weight: 79.4, target: 75.0 },
    { week: 'W10', weight: 78.6, target: 75.0 },
    { week: 'W11', weight: 77.8, target: 75.0 },
    { week: 'W12', weight: 77.0, target: 75.0 },
  ];

  const activityData = [
    { day: 'Mon', workouts: 1, calories: 520 },
    { day: 'Tue', workouts: 1, calories: 580 },
    { day: 'Wed', workouts: 0, calories: 220 },
    { day: 'Thu', workouts: 1, calories: 490 },
    { day: 'Fri', workouts: 1, calories: 640 },
    { day: 'Sat', workouts: 1, calories: 610 },
    { day: 'Sun', workouts: 0, calories: 180 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Analytics & Metrics
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Fitness <span className="text-gradient-brand">Progress Dashboard</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Monitor your body weight evolution, weekly training consistency, calorie burn rate, and habit streak progression.
        </p>
      </div>

      {/* Progress Cards Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgressCard
          icon={TrendingUp}
          title="Current Weight"
          value="77.0"
          unit="kg"
          change="-8.5 kg"
          trend="down"
          description="Starting weight was 85.5 kg"
          accentColor="emerald"
        />

        <ProgressCard
          icon={Trophy}
          title="Target Goal Weight"
          value="75.0"
          unit="kg"
          change="82% Complete"
          trend="up"
          description="2.0 kg remaining to reach target"
          accentColor="cyan"
        />

        <ProgressCard
          icon={Zap}
          title="Active Workout Streak"
          value="18"
          unit="Days"
          change="Personal Best!"
          trend="up"
          description="Consistent training adherence"
          accentColor="amber"
        />

        <ProgressCard
          icon={Flame}
          title="Weekly Avg Calories"
          value="2,450"
          unit="kcal"
          change="Optimal Deficit"
          trend="up"
          description="Daily burn target hit consistently"
          accentColor="purple"
        />
      </div>

      {/* RECHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Weight Loss Progress Line Chart */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-gray-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Body Weight Progress (12 Weeks)
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Actual body weight trajectory vs target goal threshold.
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              -8.5 kg Total Drop
            </span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="week" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis domain={[72, 88]} stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Line type="monotone" dataKey="weight" name="Current Weight (kg)" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 7 }} />
                <Line type="monotone" dataKey="target" name="Target Weight (kg)" stroke="#06b6d4" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Activity Bar Chart */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-card border border-gray-800 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-cyan-400" />
              Weekly Caloric Expenditure
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Active workout calories burned per session day.
            </p>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                />
                <Bar dataKey="calories" name="Calories Burned (kcal)" fill="#06b6d4" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* WEEKLY PLANNER COMPONENT */}
      <section className="pt-4">
        <WeeklyPlanner />
      </section>

    </div>
  );
};
