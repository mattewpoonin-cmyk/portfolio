"use client";

import { useState } from "react";

const certifications = [
  {
    title: "Virtual Assistant Certificate",
    issuer: "Online Course",
    date: "2026",
    image: "/certifications/certificate1.jpg",
  },
  {
    title: "Data Science Essentials",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/certifications/certificate2.jpg",
  },
  {
    title: "Additional Certification",
    issuer: "Certificate Issuer",
    date: "2026",
    image: "/certifications/certificate3.jpg",
  },
];

const skills = [
  "UI/UX Design",
  "HTML & CSS",
  "JavaScript",
  "PHP & MySQL",
  "Python",
  "Java",
  "C#",
  "Database Management",
  "Git & GitHub",
  "Microsoft Office",
];

export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  return (
    <main className="min-h-screen bg-[#08090d] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            MATTEW<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400">
              Certifications
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* PROFILE + INTRO */}
          <div className="flex flex-col items-start">

            {/* PROFILE PICTURE */}
            <div className="mb-8">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-white/[0.03] shadow-2xl shadow-cyan-500/20 md:h-48 md:w-48">
                <img
                  src="/profile.jpg"
                  alt="Mattew profile picture"
                  className="h-full w-full object-cover"
                />

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-cyan-400/20" />
              </div>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              IT Fresh Graduate
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mattew.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              A Bachelor of Science in Information Technology graduate
              specializing in Software Development, UI/UX Design, and
              computer technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#certifications"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                View Certifications
              </a>

              <a
                href="#projects"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IT DESIGN */}
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/20 bg-white/[0.03] shadow-2xl shadow-cyan-500/10 md:h-96 md:w-96">
              <div className="absolute inset-5 rounded-full border border-white/10" />

              <div className="text-center">
                <div className="text-7xl font-bold text-cyan-400">IT</div>
                <p className="mt-2 text-sm tracking-[0.3em] text-gray-400">
                  SOFTWARE DEVELOPMENT
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Building solutions through technology.
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I am an IT fresh graduate with a strong interest in software
            development, web technologies, UI/UX design, databases, and
            problem solving. I enjoy learning new technologies and creating
            practical systems that can solve real-world problems.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technologies & Skills
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            My Certifications
          </h2>

          <p className="mt-4 text-gray-400">
            Click a certificate to view it in a larger format.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate) => (
              <button
                key={certificate.title}
                onClick={() => setSelectedCertificate(certificate.image)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f14] text-left transition hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {certificate.issuer}
                  </p>

                  <p className="mt-1 text-xs text-cyan-400">
                    {certificate.date}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-cyan-400">
                Capstone Project
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                AquaSync
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A Smart Pipeline Maintenance System with Real-Time Geo
                Mapping and Inventory Tracking.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Geo Mapping",
                  "Inventory",
                  "Database",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-cyan-400">
                Academic Project
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Student Management Systems
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Various academic projects involving databases, CRUD
                operations, authentication, system interfaces, and
                application development.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["PHP", "MySQL", "Java", "C#", "Python"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's connect.
          </h2>

          <p className="mt-5 text-gray-400">
            I'm currently open to opportunities where I can grow my
            technical skills and contribute to a team.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            Email Me
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Mattew. All rights reserved.
      </footer>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-h-[90vh] max-w-5xl">
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />

            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-4 py-2 text-xl text-white hover:bg-black"
            >
              ×
            </button>
          </div>
        </div>
      )}

    </main>
  );
}