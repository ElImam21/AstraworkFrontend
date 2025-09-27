'use client';

import React, { useEffect, useRef, useState } from 'react';
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

// Komponen Accordion untuk FAQ
const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left font-semibold text-[#2F1340] hover:text-[#501C6B] transition-colors duration-300"
        onClick={onClick}
      >
        <span className="text-lg pr-4">{question}</span>
        <svg
          className={`w-6 h-6 text-[#F76F1F] transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Komponen Section untuk setiap kategori jasa
const ServiceCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  faqs: { question: string; answer: string }[];
  categoryIndex: number;
}> = ({ title, icon, faqs, categoryIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FadeInSection>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] p-6 text-white">
          <div className="flex items-center">
            <div className="bg-[#F76F1F] p-3 rounded-lg mr-4">
              {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
        <div className="p-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

const FAQPage = () => {
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
        <title>FAQ - Pertanyaan Umum | ASTRAWORK</title>
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
            <span className="text-white">FAQ</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Pertanyaan Umum Seputar Layanan ASTRAWORK
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Temukan jawaban untuk pertanyaan paling umum tentang layanan website, aplikasi, sistem bisnis, dan desain arsitektur kami.
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

      {/* FAQ Content Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F76F1F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F1340] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Pertanyaan Umum</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
              <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
                Berikut adalah pertanyaan-pertanyaan yang sering diajukan oleh klien kami. 
                Jika Anda memiliki pertanyaan lain, jangan ragu untuk menghubungi kami.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Website Development */}
            <ServiceCategory
              title="Pembuatan Website"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              faqs={websiteFAQs}
              categoryIndex={0}
            />

            {/* Mobile Application */}
            <ServiceCategory
              title="Pembuatan Aplikasi"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              faqs={appFAQs}
              categoryIndex={1}
            />

            {/* Business Systems */}
            <ServiceCategory
              title="Sistem Bisnis"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
              faqs={systemFAQs}
              categoryIndex={2}
            />

            {/* Architecture Design */}
            <ServiceCategory
              title="Desain Arsitektur"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-8 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              faqs={architectureFAQs}
              categoryIndex={3}
            />

            {/* Civil Design */}
            <ServiceCategory
              title="Desain Sipil"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              faqs={civilFAQs}
              categoryIndex={4}
            />
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F1340] mb-6">Masih Ada Pertanyaan?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Jika Anda tidak menemukan jawaban yang Anda cari atau membutuhkan informasi lebih detail, 
                tim support kami siap membantu Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:buwongpuyuh41@gmail.com" 
                  className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Email Support
                </a>
                <a 
                  href="tel:0895322276944" 
                  className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Telepon Langsung
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-100 transform -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F1340] mb-6">Siap Memulai Proyek Anda?</h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Konsultasikan kebutuhan digital dan konstruksi Anda dengan tim profesional kami. 
                Dapatkan solusi terbaik untuk bisnis Anda.
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

// Data FAQ untuk Pembuatan Website (5 pertanyaan)
const websiteFAQs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    answer: "Waktu pengerjaan website bervariasi tergantung kompleksitas proyek. Website company profile biasanya selesai dalam 2-3 minggu, website e-commerce 4-6 minggu, dan website custom yang kompleks bisa memakan waktu 8-12 minggu."
  },
  {
    question: "Apakah website yang dibuat responsive untuk mobile?",
    answer: "Ya, semua website yang kami buat fully responsive dan dioptimalkan untuk berbagai perangkat termasuk desktop, tablet, dan smartphone. Kami menggunakan pendekatan mobile-first design."
  },
  {
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer: "Paket dasar biasanya belum termasuk domain dan hosting. Kami menyediakan paket terpisah untuk domain, hosting, dan maintenance. Namun untuk paket lengkap, semua sudah termasuk dengan harga kompetitif."
  },
  {
    question: "Bisakah saya update konten website sendiri?",
    answer: "Tentu! Kami menggunakan CMS (Content Management System) seperti WordPress atau custom CMS yang memudahkan Anda mengupdate konten, gambar, dan artikel tanpa perlu pengetahuan coding."
  },
  {
    question: "Apakah ada garansi setelah website selesai?",
    answer: "Kami memberikan garansi 3 bulan untuk maintenance dan perbaikan bug. Selain itu, kami juga menyediakan layanan support teknis untuk membantu Anda mengoperasikan website."
  }
];

// Data FAQ untuk Pembuatan Aplikasi (5 pertanyaan)
const appFAQs = [
  {
    question: "Platform apa saja yang didukung untuk aplikasi mobile?",
    answer: "Kami mengembangkan aplikasi untuk iOS, Android, dan cross-platform. Untuk performa terbaik, kami rekomendasikan native development, namun untuk budget terbatas kami juga menyediakan solusi hybrid/react native."
  },
  {
    question: "Berapa biaya rata-rata pembuatan aplikasi mobile?",
    answer: "Biaya bervariasi dari Rp 15-100 juta tergantung kompleksitas fitur. Aplikasi sederhana mulai Rp 15-30 juta, aplikasi menengah Rp 30-60 juta, dan aplikasi enterprise bisa mencapai Rp 100 juta ke atas."
  },
  {
    question: "Apakah aplikasi bisa terintegrasi dengan sistem yang sudah ada?",
    answer: "Ya, kami memiliki pengalaman mengintegrasikan aplikasi dengan berbagai sistem seperti ERP, CRM, payment gateway, dan API pihak ketiga lainnya."
  },
  {
    question: "Bagaimana proses pengembangan aplikasi?",
    answer: "Proses kami meliputi: konsultasi kebutuhan, wireframing, UI/UX design, development, testing, deployment, dan maintenance. Kami menggunakan metodologi agile untuk memastikan kualitas."
  },
  {
    question: "Apakah aplikasi bisa di-publish ke App Store dan Play Store?",
    answer: "Tentu! Kami akan membantu proses publishing ke Apple App Store dan Google Play Store, termasuk persiapan assets dan mengikuti guidelines masing-masing platform."
  }
];

// Data FAQ untuk Sistem Bisnis (5 pertanyaan)
const systemFAQs = [
  {
    question: "Apa saja jenis sistem bisnis yang bisa dikembangkan?",
    answer: "Kami mengembangkan berbagai sistem termasuk ERP, CRM, inventory management, accounting software, HR system, project management, dan custom system sesuai kebutuhan bisnis spesifik."
  },
  {
    question: "Bagaimana sistem bisa membantu efisiensi bisnis?",
    answer: "Sistem kami mengotomatiskan proses manual, mengurangi human error, memberikan insights melalui reporting, meningkatkan kolaborasi tim, dan mengoptimalkan alur kerja bisnis."
  },
  {
    question: "Apakah sistem bisa diakses secara online?",
    answer: "Ya, sistem yang kami kembangkan berbasis web dan bisa diakses dari mana saja dengan koneksi internet. Kami juga menyediakan opsi on-premise untuk kebutuhan khusus."
  },
  {
    question: "Bagaimana keamanan data dalam sistem?",
    answer: "Kami menerapkan standar keamanan tinggi termasuk enkripsi data, autentikasi multi-factor, regular security update, backup otomatis, dan compliance dengan regulasi data protection."
  },
  {
    question: "Apakah ada training untuk penggunaan sistem?",
    answer: "Kami menyediakan comprehensive training untuk tim Anda, termasuk dokumentasi user manual, video tutorial, dan sesi training langsung hingga tim mahir menggunakan sistem."
  }
];

// Data FAQ untuk Desain Arsitektur (5 pertanyaan)
const architectureFAQs = [
  {
    question: "Layanan apa saja yang termasuk dalam desain arsitektur?",
    answer: "Kami menyediakan layanan lengkap: konsultasi desain, perencanaan konsep, gambar teknikal 2D/3D, rendering 3D photorealistic, perizinan bangunan, dan pengawasan konstruksi."
  },
  {
    question: "Berapa biaya jasa desain arsitektur?",
    answer: "Biaya desain mulai dari Rp 50.000-200.000 per m² tergantung kompleksitas desain. Untuk rumah tinggal biasanya 3-5% dari nilai proyek, sedangkan bangunan komersial 5-8%."
  },
  {
    question: "Apakah menyediakan layanan perizinan bangunan?",
    answer: "Ya, kami membantu pengurusan IMB dan perizinan terkait lainnya. Tim kami familiar dengan peraturan bangunan setempat dan akan memastikan semua legal requirements terpenuhi."
  },
  {
    question: "Bagaimana proses kerja desain arsitektur?",
    answer: "Proses dimulai dengan site survey, konsultasi kebutuhan, conceptual design, development design, construction drawing, hingga asistensi selama konstruksi berlangsung."
  },
  {
    question: "Apakah bisa menangani renovasi dan ekspansi bangunan?",
    answer: "Tentu! Kami berpengalaman menangani renovasi, ekspansi, dan adaptive reuse. Kami akan memastikan desain baru harmonis dengan struktur existing dan memenuhi kebutuhan baru."
  }
];

// Data FAQ untuk Desain Sipil (5 pertanyaan)
const civilFAQs = [
  {
    question: "Apa saja cakupan layanan desain sipil yang Anda tawarkan?",
    answer: "Kami menyediakan layanan desain struktur bangunan, perencanaan infrastruktur, analisis kelayakan teknis, perhitungan struktur, dan pengawasan teknis konstruksi untuk memastikan keamanan dan kepatuhan terhadap standar."
  },
  {
    question: "Bagaimana proses analisis struktur yang dilakukan?",
    answer: "Kami menggunakan software terkini untuk menganalisis beban, kekuatan material, dan faktor keamanan struktur. Proses meliputi perhitungan fondasi, kolom, balok, dan elemen struktur lainnya sesuai standar SNI."
  },
  {
    question: "Apakah Anda menangani proyek infrastruktur seperti jalan dan jembatan?",
    answer: "Ya, kami memiliki pengalaman dalam perencanaan dan desain infrastruktur termasuk jalan, jembatan, drainase, serta utilitas lainnya dengan mempertimbangkan aspek teknis dan lingkungan."
  },
  {
    question: "Bagaimana dengan pengurusan izin teknis dan sertifikasi?",
    answer: "Kami membantu client dalam pengurusan izin terkait desain sipil, termasuk penyiapan dokumen teknis yang diperlukan untuk mendapatkan persetujuan dari instansi berwenang."
  },
  {
    question: "Apakah tersedia layanan pengawasan konstruksi (supervisi)?",
    answer: "Tentu, kami menyediakan layanan pengawasan konstruksi untuk memastikan pelaksanaan di lapangan sesuai dengan desain yang telah disetujui, serta memantau kualitas material dan metode kerja."
  }
];

export default FAQPage;