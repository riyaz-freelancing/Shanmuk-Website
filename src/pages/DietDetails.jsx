import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flame, Utensils, ShieldCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { DIET_PLANS, DIET_DISCLAIMER } from '../data/diets';
import { Button } from '../components/Button';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const DietDetails = () => {
  const { id } = useParams();
  const diet = DIET_PLANS.find((d) => d.id === id) || DIET_PLANS[0];

  if (!diet) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Diet Plan Not Found</h2>
        <Link to="/diet">
          <Button variant="primary">Back to Diet Plans</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-10 bg-slate-50 text-slate-900">
      
      {/* Back Link */}
      <Link
        to="/diet"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Diet Plans
      </Link>

      {/* Plan Header Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                {diet.category} Plan
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-current" /> {diet.calories}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {diet.title}
            </h1>
            <p className="text-slate-700 text-sm font-semibold max-w-2xl leading-relaxed">
              {diet.summary}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppUrl(`Hi Shanmuk, I want to get customized meal adjustments for the ${diet.title} plan.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm shadow-md"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Customize Meal Plan</span>
            </a>
          </div>
        </div>

        {/* Macro Distribution Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">Total Protein</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700">{diet.protein}</div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">Carbohydrates</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-700">{diet.carbs}</div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">Healthy Fats</div>
            <div className="text-xl sm:text-2xl font-black text-amber-700">{diet.fats}</div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">Meals / Day</div>
            <div className="text-xl sm:text-2xl font-black text-purple-700">{diet.mealsPerDay} Meals</div>
          </div>
        </div>
      </div>

      {/* Daily Meal Schedule Breakdown */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <Utensils className="w-6 h-6 text-emerald-600" />
          Daily Meal Timeline & Preparation
        </h2>

        <div className="space-y-4">
          {diet.meals.map((meal, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center border border-emerald-300">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">{meal.title}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-600 flex items-center gap-1 font-bold">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" /> {meal.time}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-emerald-800 font-black border border-slate-300">
                    {meal.macros}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium pt-1">
                {meal.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REQUIRED DISCLAIMER BOX */}
      <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3 shadow-sm">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-amber-900 font-extrabold">Important Nutritional Disclaimer:</strong>
          <p className="leading-relaxed font-semibold">
            {DIET_DISCLAIMER}
          </p>
        </div>
      </div>

    </div>
  );
};
