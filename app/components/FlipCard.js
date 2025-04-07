'use client';
import { useState } from 'react';

export default function FlipCard({ frontText, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective w-full h-[300px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 card-inner ${
            flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-sky-100 rounded-xl shadow flex flex-col justify-center items-center p-6">
          <div className="text-4xl mb-2">📘</div>
          <p className="text-center text-base font-medium">{frontText}</p>
          <button
            onClick={() => setFlipped(true)}
            className="mt-4 px-4 py-2 text-sm bg-orange-500 text-white rounded shadow hover:bg-orange-600"
          >
            Baca Selengkapnya
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow flex flex-col justify-center items-center p-6 border">
          <p className="text-center text-base font-medium">{backText}</p>
          <button
            onClick={() => setFlipped(false)}
            className="mt-4 px-4 py-2 text-sm bg-gray-300 text-black rounded shadow hover:bg-gray-400"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
