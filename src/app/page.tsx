'use client';

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'framer-motion';

// Komponen untuk animasi fade-in saat scroll (sama dengan AboutPage)
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {
    // Menambahkan efek parallax pada scroll (sama dengan AboutPage)
    const handleScroll = () => {
      const elements = document.querySelectorAll<HTMLElement>('.parallax');
      elements.forEach((element) => {
        const speedAttr = element.getAttribute('data-speed');
        const speed = speedAttr ? parseFloat(speedAttr) : 0;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Head>
        <title>ASTRAWORK - Solusi Tepat, Layanan Bersahabat</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Diperbarui dengan desain seperti AboutPage */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2F1340] to-[#501C6B] parallax"
          data-speed="0.2"
        ></div>
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center parallax"
          style={{ backgroundImage: "url('/pattern.svg')" }}
          data-speed="0.4"
        ></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">ASTRAWORK</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Solusi Tepat, Layanan Bersahabat
          </p>
          <a
            href="https://wa.me/62895322276944"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Kami
          </a>
          <div className="animate-bounce mt-12">
            <svg
              className="w-8 h-8 mx-auto text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section - Diperbarui dengan card seperti AboutPage */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F76F1F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F1340] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Layanan Kami</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index}>
                <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 text-center h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2F1340]">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - Diperbarui dengan desain seperti AboutPage */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Mengapa Memilih Kami?</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <FadeInSection key={index}>
                <div className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2F1340]">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Diperbarui dengan desain seperti AboutPage */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-100 transform -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F1340] mb-6">Siap Mengembangkan Proyek Anda?</h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Konsultasikan kebutuhan digital dan konstruksi Anda dengan tim profesional kami
              </p>
              <a
                href="/Layanan"
                className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Lihat Layanan
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Data untuk services (tetap sama)
const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Website",
    description: "Desain dan pengembangan website profesional untuk bisnis Anda"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Aplikasi",
    description: "Aplikasi mobile untuk meningkatkan produktivitas"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Sistem Bisnis",
    description: "Sistem terintegrasi untuk mengoptimalkan operasi bisnis"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-8 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Desain Arsitektur & Sipil",
    description: "Desain arsitektur dan perencanaan pembangunan yang inovatif"
  },
];

// Data untuk advantages (tetap sama)
const advantages = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Profesional",
    description: "Tim ahli yang berpengalaman dan berdedikasi tinggi dalam setiap proyek"
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Efisien",
    description: "Solusi tepat waktu dengan hasil maksimal dan biaya yang kompetitif"
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Fleksibel",
    description: "Pendekatan yang disesuaikan dengan kebutuhan dan anggaran klien"
  },
];

export default HomePage;