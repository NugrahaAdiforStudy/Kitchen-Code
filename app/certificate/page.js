"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function CertificatePage() {
  const [name, setName] = useState("");
  const certificateRef = useRef(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(certificateRef.current);
    const link = document.createElement("a");
    link.download = "sertifikat.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🎓 Sertifikat Kelulusan</h1>
      <input
        type="text"
        placeholder="Masukkan Nama Anda"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 p-2 border border-orange-400 border-2 rounded w-72"
      />

      <div
        ref={certificateRef}
        className="relative w-full max-w-[1280px] aspect-[16/10] bg-white"
        style={{
          backgroundImage: "url(/img/template-sertifikat.png)",
          backgroundSize: "cover",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="absolute top-[420px] w-full text-center">
          <h2 className="text-[48px] font-bold text-black">{name}</h2>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download Sertifikat
      </button>
    </div>
  );
}
