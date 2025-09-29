'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'framer-motion';
import Image from 'next/image';

// Komponen untuk animasi fade-in saat scroll
const FadeInSection: React.FC<{ children: ReactNode }> = ({ children }) => {
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

const AboutPage: React.FC = () => {
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
        <title>Tentang Kami - ASTRAWORK</title>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
            Tentang <span className="text-[#F76F1F]">Astrawork</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Menghubungkan dunia digital dengan konstruksi nyata untuk menciptakan solusi menyeluruh
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

      {/* Visi Misi Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F76F1F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F1340] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Visi & Misi Kami</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Card Visi */}
            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-[#2F1340]">Visi Kami</h3>
                </div>
                <p className="text-gray-700">
                  Menjadi mitra terpercaya dalam menghadirkan solusi digital, arsitektur, dan teknik sipil yang inovatif, efisien, dan humanis, demi mendukung pertumbuhan bisnis, pendidikan, dan individu di Indonesia.
                </p>
              </div>
            </FadeInSection>

            {/* Card Misi */}
            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#2F1340] mb-6">Misi Kami</h3>
                {misiItems.map((item, index) => (
                  <div key={index} className="flex items-start group mb-4">
                    <div className="bg-[#F76F1F] text-white p-2 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 group-hover:text-[#2F1340] transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Latar Belakang</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-gray-700 text-lg mb-6">
                Astrawork hadir dari keyakinan bahwa dunia digital dan pembangunan fisik harus saling terhubung untuk menciptakan solusi yang lebih efektif.
                Banyak UMKM, startup, hingga lembaga pendidikan yang membutuhkan dukungan digitalisasi bisnis sekaligus perencanaan ruang dan pembangunan yang modern.
              </p>

              <p className="text-gray-700 text-lg mb-8">
                Melihat kebutuhan itu, Astrawork lahir untuk menjadi mitra yang mampu menghadirkan dua layanan utama:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] text-white p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">Digital & Teknologi</h4>
                  <p>Membangun website, aplikasi, dan sistem bisnis.</p>
                </div>
                <div className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">Arsitektur & Teknik Sipil</h4>
                  <p>Merancang dan merealisasikan pembangunan dengan desain yang visioner.</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg">
                Dengan semangat profesional, efisien, inovatif, ramah, dan amanah, Astrawork berkomitmen untuk memberikan solusi menyeluruh yang membawa dampak positif bagi klien.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Filosofi Brand Section (pakai next/image) */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#2F1340] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Filosofi Brand</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-[#2F1340] to-[#501C6B] rounded-full flex items-center justify-center shadow-2xl">
                    <Image
                      src="/AstraWork_transparan_nobuffer 2.png"
                      alt="Logo Astrawork"
                      width={192}
                      height={192}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#F76F1F] rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#F76F1F] rounded-full opacity-20"></div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Logo Astrawork menggambarkan dua elemen manusia yang berkolaborasi, membentuk simbol menyerupai mahkota atau perisai.
                </p>

                <div className="space-y-4">
                  {filosofiItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#2F1340] text-white p-2 rounded-md mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2F1340]">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 text-lg mt-6">
                  Perpaduan warna oranye keemasan melambangkan semangat, energi, dan optimisme, sedangkan latar gelap menandakan stabilitas dan keteguhan.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Section */}
      <section className="py-20 bg-gradient-to-br from-[#2F1340] to-[#501C6B] text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nilai-Nilai Kami</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nilaiItems.map((item, index) => (
              <FadeInSection key={index}>
                <div className="bg-gradient-to-br from-[#2F1340] to-[#501C6B] p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 text-center h-72 flex flex-col justify-center items-center">
                  <div className="mb-4 text-[#F76F1F]">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F1340] mb-6">Tertarik untuk Berkolaborasi?</h2>
            <p className="text-gray-700 text-lg mb-8">
              Mari wujudkan proyek digital atau konstruksi Anda bersama tim profesional kami
            </p>
            <a
              href="https://wa.me/62895322276944"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Data untuk misi
const misiItems: string[] = [
  'Memberikan layanan digital & teknologi (website, aplikasi, sistem bisnis) yang dapat meningkatkan daya saing UMKM, startup, perusahaan, dan lembaga pendidikan.',
  'Menyediakan layanan arsitektur & teknik sipil yang kreatif, fungsional, dan berkelanjutan demi pembangunan yang bernilai jangka panjang.',
  'Mengedepankan profesionalisme, efisiensi, dan inovasi dalam setiap solusi yang kami tawarkan.',
  'Menjaga kepercayaan klien melalui pelayanan yang ramah, jujur, dan amanah.',
  'Menjadi jembatan penghubung antara teknologi dan arsitektur untuk menciptakan solusi menyeluruh dan terintegrasi.',
];

// Data untuk filosofi brand
interface Filosofi {
  title: string;
  description: string;
}
const filosofiItems: Filosofi[] = [
  { title: 'Kolaborasi & Kebersamaan', description: 'Astrawork hadir sebagai mitra, bukan sekadar penyedia jasa.' },
  { title: 'Perlindungan & Kepercayaan', description: 'Klien merasa aman mempercayakan proyeknya.' },
  { title: 'Mahkota & Nilai Tinggi', description: 'Setiap karya yang dihasilkan memiliki kualitas unggul dan bernilai jangka panjang.' },
];

// Data untuk nilai-nilai
interface Nilai {
  icon: ReactNode;
  title: string;
  description: string;
}

const nilaiItems: Nilai[] = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Profesional",
    description: "Berkomitmen memberikan layanan terbaik dengan standar tinggi",
  },
  {
    icon: (
      <svg className="w 10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Efisien",
    description: "Mengutamakan efektivitas dan optimalisasi sumber daya",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Inovatif",
    description: "Selalu mencari solusi kreatif dan terdepan",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Amanah",
    description: "Menjaga kepercayaan dengan integritas tinggi",
  },
];

export default AboutPage;
