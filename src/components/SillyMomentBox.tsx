"use client";

interface SillyMomentBoxProps {
  text: string;
}

export default function SillyMomentBox({ text }: SillyMomentBoxProps) {
  return (
    <div className="my-6 rounded-2xl border-4 border-dashed border-yellow-400 bg-yellow-50 p-5">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-2xl animate-wiggle">😂</span>
        <span className="text-lg font-bold text-yellow-700">Silly Moment!</span>
        <span className="text-2xl animate-wiggle" style={{ animationDelay: "0.2s" }}>🤪</span>
      </div>
      <p className="text-lg leading-relaxed text-yellow-900">{text}</p>
    </div>
  );
}
