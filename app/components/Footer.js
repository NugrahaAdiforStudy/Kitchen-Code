'use client';

import { FaFacebookF, FaPinterestP, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className=" text-gray-800 pt-12 pb-6 w-full">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="text-orange-400">KITCHEN</span>
            <span className="text-blue-500">CODE&lt;/&gt;</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            KitchenCode adalah media <br></br> pembelajaran interaktif <br></br>
            berbasis serious game.
          </p>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="text-md font-semibold mb-3">GET HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/6282130696308"
                className="hover:text-blue-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-md font-semibold mb-3">Credits</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.codemonkey.com/"
                className="hover:text-blue-500"
              >
                CodeMonkey
              </a>
            </li>
            <li>
              <a href="https://unity.com/" className="hover:text-blue-500">
                Unity Package
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Music
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-md font-semibold mb-3">CONTACT US</h3>
          <p className="text-sm">Address: Bandung</p>
          <p className="text-sm">Tel: +62 821-3069-6308</p>
          <p className="text-sm mb-4">Mail: nugrahaadinugi08@gmail.com</p>
          <div className="flex space-x-3 text-xl text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} KitchenCode Course | Powered by
        Nugraha Adiputra
      </div>
    </footer>
  );
}
