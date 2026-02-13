"use client";

import { Choice } from "@/lib/types";

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  disabled?: boolean;
  onClick: () => void;
}

const colors = [
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
];

export default function ChoiceButton({ choice, index, disabled, onClick }: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group w-full rounded-2xl bg-gradient-to-r ${colors[index]} p-1 text-left shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100`}
    >
      <div className="rounded-[0.9rem] bg-gray-900/90 px-5 py-4">
        <p className="text-xl font-bold text-gray-100">{choice.text}</p>
        <p className="mt-1 text-base text-gray-400 italic">{choice.preview}</p>
        {choice.requiresItem && (
          <span className="mt-2 inline-block rounded-full bg-amber-900/50 px-3 py-1 text-sm text-amber-300">
            Requires: {choice.requiresItem}
          </span>
        )}
        {choice.requiresSkill && (
          <span className="mt-2 inline-block rounded-full bg-blue-900/50 px-3 py-1 text-sm text-blue-300">
            Requires: {choice.requiresSkill}
          </span>
        )}
      </div>
    </button>
  );
}
