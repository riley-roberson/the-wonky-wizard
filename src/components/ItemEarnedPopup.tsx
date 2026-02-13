"use client";

import { useState, useEffect } from "react";
import { Item, Skill } from "@/lib/types";

interface ItemEarnedPopupProps {
  item?: Item;
  skill?: Skill;
}

export default function ItemEarnedPopup({ item, skill }: ItemEarnedPopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (item || skill) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [item, skill]);

  if (!visible || (!item && !skill)) return null;

  const earned = item || skill;
  const isItem = !!item;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="animate-pop-in mx-4 max-w-md rounded-3xl bg-gray-800 p-8 text-center shadow-2xl border border-amber-500/30">
        <div className="mb-2 text-5xl animate-sparkle">{earned!.emoji}</div>
        <h3 className="mb-1 text-2xl font-bold text-amber-400">
          {isItem ? "New Item Found!" : "New Skill Learned!"}
        </h3>
        <p className="mb-2 text-xl font-bold text-gray-100">{earned!.name}</p>
        <p className="text-base text-gray-400">{earned!.description}</p>
        <button
          onClick={() => setVisible(false)}
          className="mt-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-2 text-lg font-bold text-white shadow-md transition hover:shadow-lg"
        >
          Awesome!
        </button>
      </div>
    </div>
  );
}
