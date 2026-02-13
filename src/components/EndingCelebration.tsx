"use client";

import { useEffect, useState } from "react";
import { Item, Skill } from "@/lib/types";

interface EndingCelebrationProps {
  characterName: string;
  items: Item[];
  skills: Skill[];
  onPlayAgain: () => void;
}

const confettiColors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-pink-400",
  "bg-purple-400",
  "bg-orange-400",
];

export default function EndingCelebration({
  characterName,
  items,
  skills,
  onPlayAgain,
}: EndingCelebrationProps) {
  const [confetti, setConfetti] = useState<
    { id: number; left: number; color: string; delay: number }[]
  >([]);

  useEffect(() => {
    const pieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      delay: Math.random() * 2,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`confetti-piece ${piece.color} rounded-sm`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}

      <div className="mx-auto max-w-2xl py-12 text-center">
        <div className="mb-4 text-6xl animate-sparkle">🎉</div>
        <h1 className="mb-4 text-5xl font-bold text-amber-600">The End!</h1>
        <p className="mb-8 text-2xl text-gray-700">
          What an amazing adventure, {characterName}!
        </p>

        {(items.length > 0 || skills.length > 0) && (
          <div className="mb-8 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-amber-700">
              Your Adventure Collection
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl bg-white px-4 py-2 shadow-sm"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="ml-2 font-medium">{item.name}</span>
                </div>
              ))}
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-xl bg-white px-4 py-2 shadow-sm"
                >
                  <span className="text-2xl">{skill.emoji}</span>
                  <span className="ml-2 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8 rounded-2xl bg-indigo-50 p-6">
          <p className="text-2xl text-indigo-800">
            Great adventure! Time for sleep, little hero. 🌙
          </p>
          <p className="mt-2 text-lg text-indigo-600">Sweet dreams!</p>
        </div>

        <button
          onClick={onPlayAgain}
          className="rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Play Again as a Different Character!
        </button>
      </div>
    </div>
  );
}
