'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2F1340] py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/AstraWork_transparan_nobuffer 2.png"
            alt="Astrawork Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-white font-bold text-xl">ASTRAWORK</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-[#F76F1F] transition-colors duration-300">
            Beranda
          </Link>
          <Link href="/Layanan" className="text-white hover:text-[#F76F1F] transition-colors duration-300">
            Layanan
          </Link>
          <Link
            href="/TentangKami"
            className="text-white hover:text-[#F76F1F] transition-colors duration-300"
          >
            Tentang Kami
          </Link>
          <Link href="/Kontak" className="text-white hover:text-[#F76F1F] transition-colors duration-300">
            Kontak
          </Link>
          <Link href="/FAQ" className="text-white hover:text-[#F76F1F] transition-colors duration-300">
            FAQ
          </Link>
        </div>

        {/* Tombol CTA */}
        <Link
          href="/Kontak"
          className="bg-[#F76F1F] hover:bg-[#E65A0F] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
