import React from 'react';
import { Clock, Lightbulb, CheckCircle2 } from 'lucide-react';

export const ExerciseCard = ({ exercise, index = 0 }) => {
  return (
    <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      
      {/* Exercise Title & Number */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-extrabold text-sm shrink-0">
            {index + 1}
          </span>
          <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
            {exercise.name}
          </h4>
        </div>
        <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-300 shrink-0">
          {exercise.equipment}
        </span>
      </div>

      {/* Sets, Reps, Rest Metrics Bar */}
      <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Sets</div>
          <div className="text-base font-black text-slate-900">{exercise.sets}</div>
        </div>
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Reps</div>
          <div className="text-base font-black text-emerald-700">{exercise.reps}</div>
        </div>
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Rest</div>
          <div className="text-base font-black text-cyan-700 flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {exercise.rest}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-xs text-slate-800 font-medium leading-relaxed flex items-start gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <span>{exercise.instructions}</span>
      </div>

      {/* Trainer Tip Box */}
      {exercise.trainerTip && (
        <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 fill-emerald-100" />
          <div>
            <strong className="text-emerald-800 font-bold">Trainer Shanmuk's Tip: </strong>
            {exercise.trainerTip}
          </div>
        </div>
      )}
    </div>
  );
};
