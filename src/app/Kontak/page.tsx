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

const ContactPage = () => {
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
        <title>Kontak Kami - ASTRAWORK</title>
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
            <span className="text-white">Hubungi Kami</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Mari Berbincang dan Wujudkan Ide Anda Bersama Kami
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

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F76F1F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F1340] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Informasi Kontak</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                Tim kami siap membantu mewujudkan proyek digital dan konstruksi Anda. Jangan ragu untuk menghubungi kami melalui berbagai saluran berikut:
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <FadeInSection key={index}>
                <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 text-center h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2F1340]">{method.title}</h3>
                  <p className="text-gray-600 flex-grow">{method.description}</p>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#F76F1F] font-medium mt-2 hover:text-[#2F1340] transition-colors duration-300"
                    >
                      {method.linkText}
                    </a>
                  ) : (
                    <span className="text-[#F76F1F] font-medium mt-2">{method.linkText}</span>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Lokasi Kami</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] p-6 text-white text-center">
                <h3 className="text-xl font-semibold">Kantor Astrawork</h3>
                <p className="mt-2">Permata Permai 2 Blog G5, Pal IX, Kabupaten Kubu Raya, Kalimantan Barat</p>
              </div>
              <div className="h-96 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8083999999996!2d109.341071!3d-0.083056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58f7b5b5b5b5%3A0x5f5f5f5f5f5f5f5f!2sJl.%20Pal%20IX%2C%20Sungai%20Ambawang%2C%20Kec.%20Kubu%20Raya%2C%20Kabupaten%20Kubu%20Raya%2C%20Kalimantan%20Barat!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Astrawork"
                ></iframe>
              </div>
               <div className="bg-gray-100 p-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/snrbnyWMz2BqfSRd9?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#F76F1F] font-medium hover:text-[#2F1340] transition-colors duration-300 inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2F1340] mb-4">Kirim Pesan Langsung</h2>
              <div className="w-24 h-1 bg-[#F76F1F] mx-auto"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                Isi formulir di bawah ini dan kami akan menghubungi Anda dalam waktu 24 jam
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F1340] focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F1340] focus:border-transparent transition-all duration-300"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F1340] focus:border-transparent transition-all duration-300"
                    placeholder="08XXXXXXXXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subyek</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F1340] focus:border-transparent transition-all duration-300"
                    placeholder="Subyek pesan Anda"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F1340] focus:border-transparent transition-all duration-300"
                    placeholder="Tulis pesan detail tentang kebutuhan Anda"
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
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
                Jangan ragu untuk menghubungi kami melalui nomor telepon atau email yang tercantum di atas. 
                Tim customer service kami siap membantu Anda 7 hari seminggu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:buwongpuyuh41@gmail.com" 
                  className="bg-gradient-to-r from-[#F76F1F] to-[#FF9850] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Kirim Email
                </a>
                <a 
                  href="tel:0895322276944" 
                  className="bg-gradient-to-r from-[#2F1340] to-[#501C6B] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Telepon Sekarang
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

// Data untuk contact methods
const contactMethods = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "Kirim pesan melalui email untuk konsultasi lebih detail",
    link: "mailto:buwongpuyuh41@gmail.com",
    linkText: "buwongpuyuh41@gmail.com"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Telepon",
    description: "Hubungi kami langsung untuk respon cepat",
    link: "tel:0895322276944",
    linkText: "0895-3222-76944"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Alamat",
    description: "Kunjungi kantor kami untuk pertemuan langsung",
    link: null,
    linkText: "Permata Permai 2 Kota Baru"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Instagram",
    description: "Ikuti kami untuk update terbaru dan portfolio",
    link: "https://www.instagram.com/yazid_un/",
    linkText: "@yazid_un"
  },
];

export default ContactPage;