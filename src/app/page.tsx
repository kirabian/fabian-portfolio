"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

type Lang = "EN" | "ID";

const translations = {
  EN: {
    greeting: "Hi, I'm Fabian.",
    intro1: "I'm a software engineer who actually enjoys making things work. I don't just build \"scalable architectures\"—I write code that solves real, messy human problems.",
    intro2: "Right now, I spend my days building point-of-sale systems that handle thousands of real-world transactions at PSTORE. Before that, I founded Fabian Solutions to help local businesses move their chaotic operations into clean, usable web and mobile apps.",
    status: "Currently: Fullstack Developer @ PSTORE",
    experienceTitle: "Journey so far",
    experienceSub: "The chapters of my professional life.",
    exp1Role: "Fullstack Developer",
    exp1Company: "PSTORE",
    exp1Date: "2025 - Present",
    exp1Desc: "Architecting enterprise POS and Inventory systems using Laravel and React. Handling massive daily transactions and streamlining logistics tracking.",
    exp2Role: "Founder & Lead Engineer",
    exp2Company: "Fabian Solutions",
    exp2Date: "2026 - Present",
    exp2Desc: "Delivering end-to-end web and mobile applications for various clients. Developed the Guardia SOS tracking app and optimized e-commerce infrastructures.",
    projectsTitle: "Things I've Built",
    projectsSub: "Some of my favorite pieces of work.",
    proj1Title: "Guardia",
    proj1Desc: "An emergency SOS tracker built with Flutter. It's essentially a panic button in your pocket that broadcasts your real-time location. I built this because safety shouldn't be complicated.",
    proj2Title: "Pstore POS",
    proj2Desc: "The backbone of PSTORE's daily retail operations. A massive Laravel application I architected to keep inventory from falling apart.",
    proj3Title: "Aniflix",
    proj3Desc: "A mobile streaming client (Flutter). Fast, offline-capable, and probably smoother than some official apps out there.",
    proj4Title: "Marbie Bakes",
    proj4Desc: "A digital storefront for a bakery. Built with Next.js to make sure buying bread online feels as good as smelling it in person.",
    toolsTitle: "My Toolbox",
    toolsDesc: "I don't believe in language wars. I use whatever gets the job done best. Lately, that looks a lot like:",
    contactTitle: "Let's Chat",
    contactDesc: "If you want to talk about code, a project, or just say hi, my inbox is open.",
    resumeText: "Prefer a traditional PDF?",
    resumeBtn: "Grab my resume",
    viewProject: "View project"
  },
  ID: {
    greeting: "Hai, saya Fabian.",
    intro1: "Saya seorang programmer yang benar-benar menikmati proses memperbaiki sesuatu. Saya tidak sekadar merakit \"arsitektur berskala\"—saya menulis kode untuk menyelesaikan masalah nyata yang rumit.",
    intro2: "Saat ini, keseharian saya dihabiskan untuk merancang sistem kasir yang menangani ribuan transaksi nyata di PSTORE. Sebelumnya, saya mendirikan Fabian Solutions untuk membantu bisnis lokal mengubah operasional mereka yang berantakan menjadi aplikasi web/mobile yang rapi.",
    status: "Saat Ini: Fullstack Developer @ PSTORE",
    experienceTitle: "Perjalanan Sejauh Ini",
    experienceSub: "Babak dalam karir profesional saya.",
    exp1Role: "Fullstack Developer",
    exp1Company: "PSTORE",
    exp1Date: "2025 - Sekarang",
    exp1Desc: "Merancang sistem Kasir (POS) dan Inventaris kelas enterprise menggunakan Laravel. Menangani transaksi masif dan logistik harian.",
    exp2Role: "Founder & Lead Engineer",
    exp2Company: "Fabian Solutions",
    exp2Date: "2026 - Sekarang",
    exp2Desc: "Membuat aplikasi web dan mobile end-to-end. Mengembangkan aplikasi pelacakan darurat Guardia dan optimalisasi infrastruktur e-commerce.",
    projectsTitle: "Apa Saja yang Saya Buat?",
    projectsSub: "Beberapa karya favorit yang pernah saya rilis.",
    proj1Title: "Guardia",
    proj1Desc: "Aplikasi pelacak SOS darurat dengan Flutter. Pada dasarnya ini adalah tombol panik di saku Anda yang memancarkan lokasi real-time. Saya membuatnya karena keamanan tidak boleh rumit.",
    proj2Title: "Pstore POS",
    proj2Desc: "Tulang punggung operasional ritel harian PSTORE. Aplikasi Laravel raksasa yang saya rancang agar inventaris gudang tidak hancur berantakan.",
    proj3Title: "Aniflix",
    proj3Desc: "Klien mobile streaming film (Flutter). Cepat, bisa offline, dan mungkin lebih mulus dari beberapa aplikasi resmi di luar sana.",
    proj4Title: "Marbie Bakes",
    proj4Desc: "Toko digital untuk sebuah toko roti. Dibangun dengan Next.js untuk memastikan pengalaman membeli roti secara online senyaman wangi rotinya langsung.",
    toolsTitle: "Peralatan Saya",
    toolsDesc: "Saya tidak suka berdebat soal bahasa pemrograman terbaik. Saya memakai apa pun yang menyelesaikan masalah. Akhir-akhir ini, saya sering menggunakan:",
    contactTitle: "Mari Mengobrol",
    contactDesc: "Kalau Anda ingin membahas soal kode, proyek kerja sama, atau sekadar menyapa, kotak masuk saya selalu terbuka.",
    resumeText: "Lebih suka format PDF tradisional?",
    resumeBtn: "Ambil resume saya",
    viewProject: "Lihat proyek"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("EN");
  const t = translations[lang];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="bg-[#18181b] text-[#e4e4e7] min-h-screen selection:bg-zinc-700 selection:text-white pb-32 overflow-x-hidden">
      
      {/* Navigation (Very Minimal, like a blog header) */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 pt-12 pb-16 flex justify-between items-center"
      >
        <div className="font-mono text-sm text-zinc-400">~/fabian/portfolio</div>
        <div className="flex gap-4 font-mono text-sm">
          <button 
            onClick={() => setLang("EN")} 
            className={`${lang === 'EN' ? 'text-zinc-100 underline decoration-zinc-500 underline-offset-4' : 'text-zinc-500 hover:text-zinc-300'} transition-colors`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang("ID")} 
            className={`${lang === 'ID' ? 'text-zinc-100 underline decoration-zinc-500 underline-offset-4' : 'text-zinc-500 hover:text-zinc-300'} transition-colors`}
          >
            ID
          </button>
        </div>
      </motion.nav>

      {/* Hero / Letter Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 mb-24"
      >
        <motion.h1 
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-8 text-zinc-100 leading-tight" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t.greeting.split("").map((char, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.1, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
          <motion.p variants={fadeUp}>{t.intro1}</motion.p>
          <motion.p variants={fadeUp}>{t.intro2}</motion.p>
        </div>

        <motion.div variants={fadeUp} className="mt-12 inline-flex items-center gap-3 px-4 py-2 bg-zinc-800/50 rounded-md font-mono text-xs text-zinc-400 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          {t.status}
        </motion.div>
      </motion.section>

      {/* Experience Section (Organic timeline) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-3xl mx-auto px-6 mb-32"
      >
        <div className="mb-12 border-b border-zinc-800 pb-4">
          <h2 className="text-2xl font-bold text-zinc-100" style={{ fontFamily: "'Playfair Display', serif" }}>{t.experienceTitle}</h2>
          <p className="text-zinc-500 font-mono text-sm mt-2">{t.experienceSub}</p>
        </div>

        <div className="space-y-16 pl-4 border-l border-zinc-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative pl-6">
            <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2 border-2 border-[#18181b]"></div>
            <div className="text-xs font-mono text-zinc-500 mb-2">{t.exp2Date}</div>
            <h3 className="text-xl font-bold text-zinc-200 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{t.exp2Role}</h3>
            <div className="text-zinc-400 mb-3">{t.exp2Company}</div>
            <p className="text-zinc-500 leading-relaxed text-sm">{t.exp2Desc}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative pl-6">
            <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2 border-2 border-[#18181b]"></div>
            <div className="text-xs font-mono text-zinc-500 mb-2">{t.exp1Date}</div>
            <h3 className="text-xl font-bold text-zinc-200 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{t.exp1Role}</h3>
            <div className="text-zinc-400 mb-3">{t.exp1Company}</div>
            <p className="text-zinc-500 leading-relaxed text-sm">{t.exp1Desc}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section (Organic flow) */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 border-b border-zinc-800 pb-4">
          <h2 className="text-2xl font-bold text-zinc-100" style={{ fontFamily: "'Playfair Display', serif" }}>{t.projectsTitle}</h2>
          <p className="text-zinc-500 font-mono text-sm mt-2">{t.projectsSub}</p>
        </motion.div>

        <div className="space-y-32">
          {[
            { 
              title: t.proj1Title, 
              desc: t.proj1Desc, 
              img: "/projects/guardia_sos_app_1782731415110.png",
              tags: ["Flutter", "REST API", "Geolocation"]
            },
            { 
              title: t.proj2Title, 
              desc: t.proj2Desc, 
              img: "/projects/pstore_pos_web_1782731425375.png",
              tags: ["Laravel", "React", "MySQL"]
            },
            { 
              title: t.proj3Title, 
              desc: t.proj3Desc, 
              img: "/projects/aniflix_movie_app_1782731435522.png",
              tags: ["Flutter", "Firebase", "SQLite"]
            },
            { 
              title: t.proj4Title, 
              desc: t.proj4Desc, 
              img: "/projects/marbie_bakery_web_1782731450511.png",
              tags: ["Next.js", "Tailwind CSS", "CMS"]
            },
          ].map((proj, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-150px" }} 
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-start group"
            >
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 relative aspect-[4/3]">
                <Image 
                  src={proj.img} 
                  alt={proj.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-zinc-100 group-hover:text-emerald-400 transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {proj.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-zinc-800/50 text-zinc-500 rounded border border-zinc-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-white transition-colors w-max">
                  <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> {t.viewProject}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack (Like a simple list) */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="text-2xl font-bold text-zinc-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.toolsTitle}</h2>
        <p className="text-zinc-400 mb-8">{t.toolsDesc}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-zinc-500">
          <ul className="space-y-2">
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Laravel</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Next.js</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">React</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Flutter</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">PHP</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Dart</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">MySQL</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">PostgreSQL</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Redis</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Git</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Docker</li>
            <li className="hover:text-zinc-300 hover:translate-x-1 transition-transform cursor-default">Linux</li>
          </ul>
        </div>
      </motion.section>

      {/* Footer / Connect */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto px-6 border-t border-zinc-800 pt-16">
        <h2 className="text-2xl font-bold text-zinc-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.contactTitle}</h2>
        <p className="text-zinc-400 mb-8 max-w-md">{t.contactDesc}</p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:contact@fabian.com" className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded hover:bg-zinc-300 transition-colors font-medium">
            <Mail className="w-4 h-4" /> Email Me
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/kirabian" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-zinc-100 px-6 py-3 rounded hover:bg-zinc-700 transition-colors font-medium border border-zinc-700">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub
          </motion.a>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-400">
            {t.resumeText}
          </div>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 text-sm font-mono text-zinc-300 hover:text-white transition-colors underline decoration-zinc-600 underline-offset-4 group">
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" /> {t.resumeBtn}
          </a>
        </div>
      </motion.section>

    </main>
  );
}
