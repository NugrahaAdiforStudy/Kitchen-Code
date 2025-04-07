'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = () => (
    <>
      <Link
        href="/#home"
        className="block py-2 hover:text-orange-400 transition"
      >
        Home
      </Link>
      <Link
        href="/#tujuan"
        className="block py-2 hover:text-orange-400 transition"
      >
        Tujuan
      </Link>
      <Link
        href="/#manfaat"
        className="block py-2 hover:text-orange-400 transition"
      >
        Manfaat
      </Link>
      <Link
        href="/#materi"
        className="block py-2 hover:text-orange-400 transition"
      >
        Mulai Belajar
      </Link>
      <Link
        href="/#contact"
        className="block py-2 hover:text-orange-400 transition"
      >
        Kontak
      </Link>
    </>
  );

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

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-sky-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sky-700 font-medium">
          {menuItems()}
        </div>
      </div>

      {/* Mobile Menu (dipisah dari flex utama) */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 space-y-2 text-sky-700 font-medium">
          {menuItems()}
        </div>
      )}
    </nav>
  );
}

