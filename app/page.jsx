'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Google from "./components/Google";
import Facabook from "./components/Facebook";
import Seo from "./components/Seo";
import Pemesanan from "./components/Pemesanan";
import Contact from "./components/Contact";

export default function Home() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenu(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const hideMenu = () => setIsMobileMenu(false);

  return (
    <div className="text-gray-800">
      <header className="sticky top-0 flex justify-between items-center bg-white shadow-md py-4 px-6">
        <div className="flex items-center h-[40px]">
          <span className="font-bold font-sans tracking-wide">PartnerIklan.com</span>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`${isMobileMenu ? 'block' : 'hidden'} fixed top-0 left-0 p-8 w-full h-full bg-white z-10`}>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Menu</p>
            <button onClick={hideMenu} className="p-2 bg-gray-500 text-white rounded">X</button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li><Link href="#">Homepage</Link></li>
              <li><Link href="#">News</Link></li>
              <li>
                <button className="flex justify-between items-center w-full text-left" onClick={toggleDropdown}>
                  Produk
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2 bg-gray-100 rounded-md">
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Google Adwords</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Facebook Ads</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">SEO</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Training</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li><Link href="#">Pemesanan</Link></li>
              <li><Link href="#">Kontak</Link></li>
            </ul>
          </nav>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <ul className="flex flex-row gap-6">
            <li><Link href="#" className="hover:text-blue-500">Homepage</Link></li>
            <li><Link href="#" className="hover:text-blue-500">News</Link></li>
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-500">
                Produk
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow mt-2 w-44">
                  <ul className="py-1">
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Google Adwords</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Facebook Ads</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">SEO</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Training</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link href="#" className="hover:text-blue-500">Pemesanan</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Kontak</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Service />
        <Google />
        <Facabook />
        <Seo />
        <Pemesanan />
        <Contact />
      </main>
      <footer className="w-full bg-gray-900 text-white py-8 ">
        <div className="flex flex-col items-center">
          <p className="mb-2">© 2024 Perusahaan Anda. Semua hak dilindungi.</p>
          <Link href="#" className="text-gray-300 hover:underline">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="text-gray-300 hover:underline">
            Syarat dan Ketentuan
          </Link>
        </div>
      </footer>
    </div>
  );
}
