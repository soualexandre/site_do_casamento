import React from 'react';

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className="w-full bg-stone-200 rounded-full h-4 mb-4 overflow-hidden">
    <div
      className="bg-gradient-to-r from-emerald-400 to-green-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-sm"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);