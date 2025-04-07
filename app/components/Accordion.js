"use client";

import { useState, useEffect } from "react";

const CenteredIframe = ({ src, height = "h-[600px]" }) => (
  <div className="flex justify-center w-full my-7">
    <div className={`w-full max-w-4xl ${height}`}>
      <iframe
        src={src}
        allowFullScreen
        className="w-full h-full rounded-md border"
      />
    </div>
  </div>
);

const data = [
  {
    title: "Pre-Test",
    content: (
      <div>
        <p>Link ke Google Form atau quiz pre-test</p>
        <button
          onClick={() =>
            window.open("https://forms.gle/Xpkb33w9SA2oDhkK9", "_blank")
          }
          className="w-[170px] text-center text-xs px-3 py-2 rounded-md transition bg-orange-200 hover:bg-orange-400 mt-6"
        >
          Kerjakan Pada Link Berikut!
        </button>
      </div>
    ),
  },
  {
    title: "Review Konsep Dasar Pemrograman",
    content: (
      <div className="flex flex-col items-center w-full gap-1">
        <p className="mt-3">
          Penjelasan tentang Konsep Dasar Pemrograman untuk Memulai lebih jauh
        </p>
        <div className="w-full max-w-4xl aspect-video">
          <CenteredIframe src="https://docs.google.com/presentation/d/e/2PACX-1vR4Uqy62PQyfP0yMndKwDi414EnItLQ-lwogwGQMxwFOAQAbqfdTLtXcA1lwucX4Q/embed?start=false&loop=false" />
        </div>
      </div>
    ),
  },
  {
    title: "Konsep Dasar Percabangan",
    content: (
      <div className="flex flex-col items-center w-full gap-1">
        <p className="mt-3">
          Penjelasan tentang if, else, dan percabangan bersarang...
        </p>
        <div className="w-full max-w-4xl aspect-video">
          <CenteredIframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBRFmqHvyuxNBjzjjO21uTL8TFJjMe6CU82Ov2B0N7hExhkgW5GUEi59iDkVJe4w/embed?start=false&loop=false&delayms=3000" />
        </div>
      </div>
    ),
  },
  {
    title: "Game Level 1 | Kitchen Code",
    content: (
      <div className="aspect-video w-full">
        <CenteredIframe src="https://play.unity.com/en/games/c371e6b4-0822-49e1-902b-f6ac6a85fb1a/kitchen-code-level-1"></CenteredIframe>
      </div>
    ),
  },
  {
    title: "Notasi Pseudocode pada Percabangan",
    content: (
      <div className="flex flex-col items-center w-full gap-1">
        <p className="mt-3">
          Penggunaan Notasi Pseudocode dalam Percabangan yang perlu diperhatikan
        </p>
        <div className="w-full max-w-4xl aspect-video">
          <CenteredIframe src="https://docs.google.com/presentation/d/e/2PACX-1vRy3VGDq8oht1_9wlz3_a-KYUpFvEgK2fn1guxpmTUsdjz9qRWf5iTikbiujwiZVg/embed?start=false&loop=false&delayms=3000" />
        </div>
      </div>
    ),
  },
  {
    title: "Game Level 2 | Kitchen Code",
    content: (
      <div className="aspect-video w-full">
        <CenteredIframe src="https://play.unity.com/en/games/7b14e4eb-9b63-4fd7-ac6b-b3829bb96a0b/kitchen-code-serious-game"></CenteredIframe>
      </div>
    ),
  },
  {
    title: "Post-Test",
    content: (
      <div>
        <p>Link ke Google Form atau quiz post-test</p>
        <button
          onClick={() =>
            window.open("https://forms.gle/rwLUbDmaMTQC42BN9", "_blank")
          }
          className="w-[170px] text-center text-xs px-3 py-2 rounded-md transition bg-orange-200 hover:bg-orange-400 mt-6"
        >
          Kerjakan Pada Link Berikut!
        </button>
      </div>
    ),
  },
  {
    title: "Sertifikat",
    content: (
      <p>
        Instruksi untuk unduh sertifikat setelah menyelesaikan semua materi.
      </p>
    ),
  },
];

export default function AccordionValidasi() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("accordion-progress"));
    if (stored && stored.length === data.length) {
      setProgress(stored);
    } else {
      setProgress(data.map((_, i) => i === 0));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("accordion-progress", JSON.stringify(progress));
  }, [progress]);

  const toggleAccordion = (index) => {
    if (progress[index]) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const markAsDone = (index) => {
    setProgress((prev) => {
      const updated = [...prev];
      if (index + 1 < updated.length) updated[index + 1] = true;
      return updated;
    });
  };

  const completedCount = progress.filter((x) => x).length;
  const percentage = Math.floor((completedCount / data.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium text-gray-700">
            Progress: {percentage}%
          </div>
          <button
            onClick={() => {
              const reset = data.map((_, i) => i === 0);
              setProgress(reset);
              setActiveIndex(null);
              localStorage.setItem("accordion-progress", JSON.stringify(reset));
            }}
            className="text-red-500 hover:underline text-sm"
          >
            Reset Progress
          </button>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full">
          <div
            className="h-3 bg-sky-400 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            disabled={!progress[index]}
            className={`w-full text-left px-4 py-2 rounded-md transition 
              ${
                progress[index]
                  ? "bg-sky-300 hover:bg-sky-600"
                  : "bg-gray-200 cursor-not-allowed"
              }
            `}
          >
            <div className="flex justify-between items-center">
              <span>{item.title}</span>
              {progress[index] ? (
                <span className="text-green-600 font-semibold">🔓</span>
              ) : (
                <span className="text-gray-500">🔒</span>
              )}
            </div>
          </button>

          {activeIndex === index && (
            <div className="relative p-4 border border-sky-300 rounded-b-md bg-white">
              {/* Tombol di pojok kanan atas */}
              {!progress[index + 1] && index + 1 < data.length && (
                <div className="flex justify-end mt-4">
                  <button
                    className="text-xs px-2 py-1  border border-gray-800 text-grey rounded hover:bg-green-600"
                    onClick={() => markAsDone(index)}
                  >
                    Tandai Selesai
                  </button>
                </div>
              )}

              <div>{item.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
