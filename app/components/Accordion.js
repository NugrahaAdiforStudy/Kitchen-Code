"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";




const CenteredIframe = ({ src, height = "h-[400px]" }) => (
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



export default function AccordionValidasi() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [progress, setProgress] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const router = useRouter();

  const data = [
    {
      title: "Pre-Test",
      content: (
        <div>
          <p className="mt-3">
            Sebelum memulai pembelajaran, penting untuk mengetahui sejauh mana
            pemahaman awal kamu tentang konsep dasar algoritma dan pemrograman.
            Melalui pre-test ini, kamu akan diajak menjawab beberapa pertanyaan
            sederhana yang akan membantu mengukur kesiapanmu. Jangan khawatir!
            Pre-test ini bukan untuk menilai, melainkan untuk membantu kamu
            mengenali topik mana yang perlu dipelajari lebih dalam.
          </p>
          <button
            onClick={() =>
              window.open("https://forms.gle/Xpkb33w9SA2oDhkK9", "_blank")
            }
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
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
            Sebagai langkah awal, mari kita pelajari kembali konsep dasar dalam
            dunia pemrograman. Konsep ini akan menjadi fondasi penting sebelum
            kamu memahami algoritma dan logika percabangan. Materi ini mencakup
            pengenalan terhadap program, instruksi, serta cara komputer membaca
            dan mengeksekusi perintah yang kita berikan.
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
            Dalam pemrograman, sering kali kita menghadapi situasi di mana
            program harus mengambil keputusan berdasarkan kondisi tertentu. Di
            sinilah konsep percabangan (conditional) digunakan. Materi ini akan
            membahas struktur dasar seperti if, else, dan else if, termasuk
            penerapannya dalam membuat alur logika program yang dinamis.
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
        <div className="flex flex-col items-center w-full gap-1">
          <p className="mt-3">
            Saatnya belajar sambil bermain! Di Level 1 ini, kamu akan
            diperkenalkan pada mekanisme dasar permainan Kitchen Code. Melalui
            aktivitas memasak virtual, kamu akan berlatih menyusun instruksi
            sederhana untuk menyelesaikan suatu tugas secara berurutan. Ini
            adalah cara yang seru untuk memahami bagaimana algoritma bekerja
            dalam situasi nyata.
          </p>
          <div className="aspect-video w-full">
            <CenteredIframe src="https://play.unity.com/en/games/c371e6b4-0822-49e1-902b-f6ac6a85fb1a/kitchen-code-level-1"></CenteredIframe>
          </div>
        </div>
      ),
    },
    {
      title: "Notasi Pseudocode pada Percabangan",
      content: (
        <div className="flex flex-col items-center w-full gap-1">
          <p className="mt-3">
            Sebelum menulis kode dalam bahasa pemrograman tertentu, penting
            untuk bisa menyusun logika program dalam bentuk yang mudah dipahami
            — inilah fungsi pseudocode. Pada bagian ini, kamu akan belajar
            bagaimana menuliskan pseudocode untuk logika percabangan. Ini akan
            membantu kamu berpikir logis dan sistematis dalam menyelesaikan
            masalah.
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
        <div className="flex flex-col items-center w-full gap-1">
          <p className="mt-3">
            Di Level 2 ini, tantangan akan sedikit meningkat. Kamu akan mulai
            menerapkan logika percabangan (if-else) dalam permainan. Tujuan
            utamanya adalah agar kamu terbiasa mengenali kondisi dan menentukan
            aksi yang tepat dalam game. Seiring berjalannya permainan, kamu akan
            semakin paham bagaimana logika percabangan digunakan dalam dunia
            nyata.
          </p>

          <div className="aspect-video w-full">
            <CenteredIframe src="https://play.unity.com/en/games/7b14e4eb-9b63-4fd7-ac6b-b3829bb96a0b/kitchen-code-serious-game"></CenteredIframe>
          </div>
        </div>
      ),
    },
    {
      title: "Formulir Refleksi Aktivitas",
      content: (
        <div>
          <p className="mt-3">
            Setelah menyelesaikan dua level permainan, penting untuk mengambil
            waktu sejenak untuk merefleksikan apa yang sudah kamu pelajari.
            Formulir ini dirancang untuk membantumu mengevaluasi proses belajar,
            memahami pengalaman bermain, dan mengungkapkan pendapat atau
            kesulitan yang kamu hadapi. Jangan ragu untuk jujur, karena tidak
            ada jawaban yang salah
          </p>
          <button
            onClick={() =>
              window.open("https://forms.gle/Bv1RevZ2cznPxqJt9", "_blank")
            }
            className="w-[170px] text-center text-xs px-3 py-2 rounded-md transition bg-orange-200 hover:bg-orange-400 mt-6"
          >
            Kerjakan Pada Link Berikut!
          </button>
        </div>
      ),
    },
    {
      title: "Post-Test",
      content: (
        <div>
          <p className="mt-3">
            Post-test ini bertujuan untuk mengetahui peningkatan pemahamanmu
            setelah mengikuti semua materi dan aktivitas dalam Kitchen Code.
            Soal-soalnya dirancang untuk mencerminkan apa yang sudah kamu
            pelajari, sehingga kamu bisa menilai seberapa jauh kamu telah
            berkembang dalam memahami algoritma dan percabangan.
          </p>
          <button
            onClick={() =>
              window.open("https://forms.gle/rwLUbDmaMTQC42BN9", "_blank")
            }
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Kerjakan Pada Link Berikut!
          </button>
        </div>
      ),
    },
    {
      title: "Sertifikat",
      content: (
        <div>
          <p className="mt-3">
            Sebagai bentuk apresiasi atas kerja keras dan keterlibatanmu selama
            mengikuti pembelajaran ini, kamu berhak mendapatkan sertifikat
            penyelesaian. Klik tombol di bawah untuk mengakses halaman
            sertifikat. Masukkan namamu, dan dapatkan sertifikat digital yang
            bisa kamu simpan atau bagikan!
          </p>
          <button
            onClick={() => router.push("/certificate")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Dapatkan Sertifikat
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("accordion-progress"));
    if (stored && stored.length === data.length) {
      setProgress(stored);
      setHasStarted(stored.some((val) => val === true)); // Set hasStarted if at least one item is unlocked
    } else {
      const initialProgress = data.map(() => false); // Semua terkunci
      setProgress(initialProgress);
      setHasStarted(false);
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
      if (index + 1 < updated.length) {
        updated[index + 1] = true;
      }
      return updated;
    });
  };

  const completedCount = progress.filter((x) => x).length;
  const percentage = Math.floor((completedCount / data.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {!hasStarted && (
        <div className="mb-4 text-center flex flex-col items-center gap-3">
          <div className="mb-4 flex items-center justify-center gap-4">
            {/* Maskot */}
            <img
              src="/img/maskot.png"
              alt="Maskot"
              className="w-32 h-auto animate-bounce"
            />

            {/* Balon chat di sebelah kanan */}
            <div className="relative bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-md text-sm text-gray-700 max-w-xs">
              Halo! Aku Ducky 🐤 Siap menemani kamu belajar hari ini. Yuk mulai!
              {/* Ekor balon */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-3 h-3 bg-white border-l border-t border-gray-300 rotate-45"></div>
            </div>
          </div>

          <button
            onClick={() => {
              const startedProgress = data.map((_, i) => i === 0);
              setProgress(startedProgress);
              setHasStarted(true);
              localStorage.setItem(
                "accordion-progress",
                JSON.stringify(startedProgress)
              );
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 shadow-md"
          >
            Mulai Modul
          </button>
        </div>
      )}

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium text-gray-700">
            Progress: {percentage}%
          </div>
          <button
            onClick={() => {
              const reset = data.map(() => false);
              setProgress(reset);
              setActiveIndex(null);
              setHasStarted(false);
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
