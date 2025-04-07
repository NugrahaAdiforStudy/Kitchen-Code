'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-sky-500">
          <Image
            src={`/img/Logo.png`} 
            width={100}
            height={30}
            alt="Logo"
            className="object-cover"
          />
        </Link>

        {/* Menu */}
        <div className="space-x-4">
          <Link href="#home" className="text-gray-700 hover:text-orange-400 transition">Home</Link>
          <Link href="#tujuan" className="text-gray-700 hover:text-orange-400 transition">Tujuan</Link>
          <Link href="#manfaat" className="text-gray-700 hover:text-orange-400 transition">Manfaat</Link>
          <Link href="#materi" className="text-gray-700 hover:text-orange-400 transition">Mulai Belajar</Link>
          <Link href="#contact" className="text-gray-700 hover:text-orange-400 transition">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}

