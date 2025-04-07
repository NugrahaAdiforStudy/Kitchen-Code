"use client";

import HeroCarousel from "./components/Carousel";
import Accordion from "./components/Accordion";
import FlipCard from "./components/FlipCard";
import Footer from "./components/Footer";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const tujuan = [
    "Memahami Konsep Algoritma Pemrograman",
    "Memahami Konsep Notasi Pemrograman (Pseudocode)",
    "Memahami Struktur Kondisional (If-Else)",
  ];

  const manfaat = [
    "Belajar lebih interaktif dan menyenangkan",
    "Meningkatkan retensi dan pemahaman materi",
    "Mendorong kemampuan problem-solving",
    "Cocok untuk berbagai kalangan",
  ];

  const tujuanCard = [
    {
      title: "Memahami Konsep Algoritma Pemrograman",
      detail:
        "Peserta didik dapat memahami konsep algoritma sebagai serangkaian langkah logis untuk menyelesaikan suatu permasalahan dalam pemrograman.",
    },
    {
      title: "Memahami Konsep Notasi Pemrograman (Pseudocode)",
      detail:
        "Peserta didik dapat memahami cara merepresentasikan algoritma dalam bentuk pseudocode yang mudah dibaca dan dipahami sebelum diterapkan ke dalam bahasa pemrograman.",
    },
    {
      title: "Memahami Struktur Kondisional (If-Else)",
      detail:
        "Peserta didik dapat memahami dan menjelaskan penggunaan struktur kondisional if-else untuk pengambilan keputusan berdasarkan kondisi tertentu dalam alur program.",
    },
  ];
  

  return (
    <main className="bg-gradient-kitchen text-gray-800 font-poppins">
      <section className="container mx-auto py-12 " id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Carousel atau Card */}
          <div>
            <HeroCarousel />
          </div>

          {/* Penjelasan Singkat */}
          <div className="space-y-6 px-9">
            <h2 className="text-3xl font-bold text-white text-center">
              <Typewriter
                words={[
                  "Apa itu KitchenCode?",
                  "Media Pembelajaran Berbasis Serious Game",
                  "Belajar algoritma jadi seru!",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-white text-md">
              KitchenCode adalah media pembelajaran interaktif berbasis serious
              game yang dirancang untuk membantu siswa memahami konsep algoritma
              percabangan dan pseudocode melalui simulasi memasak yang seru.
            </p>
            <p className="text-white">
              Dengan pendekatan berbasis permainan, siswa dapat belajar logika
              pemrograman dasar khususnya percabangan dengan cara yang
              menyenangkan dan mudah dipahami.
            </p>
          </div>
        </div>
      </section>

      {/* Tujuan Pembelajaran */}
      <section className="py-12 bg-white" id="tujuan">
        <div className="container mx-auto max-w-5xl px-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Tujuan <span className="text-orange-500">Pembelajaran</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tujuanCard.map((item, idx) => (
              <FlipCard
                key={idx}
                frontText={item.title}
                backText={item.detail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Manfaat Serious Game */}
      <section className="py-12" id="manfaat">
        <div className="container mx-auto max-w-5xl px-1 py-auto">
          <h2 className="text-2xl font-lg text-center mb-6 text-white">
            <span className="font-bold">Manfaat</span> Serious Game
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {manfaat.map((item, idx) => (
              <div
                key={idx}
                className="border border-sky-600 text-sky-700 px-5 py-2 rounded-full text-sm bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion LMS */}
      <section className="py-12 bg-white" id="materi">
        <div className="container mx-auto max-w-5xl px-4">
          <Accordion />
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className=" bg-gray-100">
        <Footer />
      </section>
    </main>
  );
}
