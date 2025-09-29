'use client';

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'framer-motion';

// Komponen untuk animasi fade-in saat scroll
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

const ServicesPage = () => {
  useEffect(() => {
    // Menambahkan efek parallax pada scroll
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
        <title>Layanan - ASTRAWORK</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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
            <span className="text-white">Layanan Kami</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Solusi Lengkap untuk Kebutuhan Digital dan Konstruksi Anda
          </p>
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

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F76F1F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F1340] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Layanan Unggulan</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
              <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
                Kami menyediakan berbagai solusi digital dan konstruksi untuk mendukung pertumbuhan bisnis Anda
              </p>
            </div>
          </FadeInSection>

          {/* Website Development Services */}
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-[#2F1340] to-[#501C6B] p-8 text-white lg:col-span-1 flex flex-col justify-center">
                  <div className="bg-[#F76F1F] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pembuatan Website</h3>
                  <p className="text-gray-200">
                    Website profesional yang responsive dan optimasi SEO untuk meningkatkan online presence bisnis Anda
                  </p>
                </div>
                <div className="p-8 lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {websiteServices.map((service, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-[#2F1340] mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Konsultasi Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* App Development Services */}
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-[#F76F1F] to-[#FF9850] p-8 text-white lg:col-span-1 flex flex-col justify-center order-2 lg:order-1">
                  <div className="bg-[#2F1340] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pengembangan Aplikasi</h3>
                  <p className="text-gray-200">
                    Aplikasi mobile dan desktop yang powerful untuk meningkatkan produktivitas dan engagement
                  </p>
                </div>
                <div className="p-8 lg:col-span-2 order-1 lg:order-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {appServices.map((service, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-[#2F1340] mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Konsultasi Aplikasi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Business Systems Services */}
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-[#2F1340] to-[#501C6B] p-8 text-white lg:col-span-1 flex flex-col justify-center">
                  <div className="bg-[#F76F1F] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sistem Bisnis</h3>
                  <p className="text-gray-200">
                    Sistem terintegrasi untuk mengoptimalkan operasional bisnis dan meningkatkan efisiensi
                  </p>
                </div>
                <div className="p-8 lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {businessServices.map((service, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-[#2F1340] mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Konsultasi Sistem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Architecture & Civil Services */}
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-[#F76F1F] to-[#FF9850] p-8 text-white lg:col-span-1 flex flex-col justify-center order-2 lg:order-1">
                  <div className="bg-[#2F1340] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-8 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Arsitektur & Sipil</h3>
                  <p className="text-gray-200">
                    Desain arsitektur dan perencanaan konstruksi yang inovatif dan berkelanjutan
                  </p>
                </div>
                <div className="p-8 lg:col-span-2 order-1 lg:order-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {architectureServices.map((service, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-[#2F1340] mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Konsultasi Desain
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Proses Kerja Kami</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <FadeInSection key={index}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#2F1340] to-[#501C6B] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">{index + 1}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2F1340] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-100 transform -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F1340] mb-6">Siap Mengembangkan Proyek Anda?</h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Konsultasikan kebutuhan digital dan konstruksi Anda dengan tim profesional kami. 
                Dapatkan solusi terbaik yang disesuaikan dengan kebutuhan bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Konsultasi Gratis
                </button>
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Hubungi Kami
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Data untuk layanan website
const websiteServices = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-8 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Company Profile",
    description: "Website profesional untuk memperkenalkan perusahaan dan layanan Anda"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "E-commerce",
    description: "Toko online lengkap dengan sistem pembayaran dan manajemen produk"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Landing Page",
    description: "Halaman penjualan yang menarik dan konversi tinggi untuk campaign"
  }
];

// Data untuk layanan aplikasi
const appServices = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Apps",
    description: "Aplikasi mobile iOS dan Android yang user-friendly dan performa optimal"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Desktop Apps",
    description: "Aplikasi desktop untuk Windows, macOS, dan Linux dengan fitur lengkap"
  }
];

// Data untuk layanan bisnis
const businessServices = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "POS System",
    description: "Sistem point of sale untuk retail dengan laporan penjualan real-time"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "ERP Sederhana",
    description: "Enterprise resource planning terintegrasi untuk manajemen bisnis"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Manajemen Inventaris",
    description: "Sistem pengelolaan stok dan inventaris dengan tracking otomatis"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Team Work System",
    description: "Platform kolaborasi tim dengan task management dan komunikasi"
  }
];

// Data untuk layanan arsitektur
const architectureServices = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Desain Rumah",
    description: "Desain rumah tinggal dengan konsep modern dan fungsional"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-8 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Bangunan Komersial",
    description: "Desain kantor, ruko, dan bangunan komersial lainnya"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Perencanaan Konstruksi",
    description: "Rencana detail konstruksi dan pengawasan pembangunan"
  }
];

// Data untuk proses kerja
const processSteps = [
  {
    title: "Konsultasi",
    description: "Diskusi kebutuhan dan tujuan proyek Anda dengan tim ahli kami"
  },
  {
    title: "Perencanaan",
    description: "Membuat rencana detail dan timeline pengerjaan proyek"
  },
  {
    title: "Eksekusi",
    description: "Pengerjaan proyek dengan standar kualitas tertinggi"
  },
  {
    title: "Delivery",
    description: "Serah terima hasil dan dukungan pasca peluncuran"
  }
];

export default ServicesPage;