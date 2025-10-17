"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const books = [
  {
    title: "Buku 0: Isolation",
    cover: "/books/cover_isolation.png",
    blurb: "Thraver, seorang siswa SMA yang suka memecahkan misteri, terbangun di sebuah rumah mewah — hanya untuk menemukan bahwa itu adalah bagian dari eksperimen manusia.",
  },
  {
    title: "Buku 1: Shadows of Deception",
    cover: "/books/cover_shadows_of_deception.png",
    blurb: "Setelah melarikan diri dari Mangroveshield, Thraver bergabung dengan ETA — sebuah badan rahasia — dan menghadapi konspirasi yang mengaburkan batas antara kebenaran dan kebohongan.",
  },
];

export default function BookPreview() {
  return (
    <section id="book_preview" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-100 mb-3">✦ Book Preview ✦</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Step into the world of <span className="font-semibold">Thraver</span> — mysteries, secret organizations, and the fragile line between sanity and truth.
          </p>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card bg-neutral-800 shadow-xl hover:shadow-2xl duration-300 rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-80">
                <Image src={book.cover} alt={book.title} fill className="object-cover" />
              </div>
              <div className="card-body p-6">
                <h3 className="text-xl font-serif font-semibold text-neutral-100">{book.title}</h3>
                <p className="text-neutral-400 text-sm">{book.blurb}</p>
                <div className="card-actions justify-end mt-4">
                  <a href="/books" className="btn btn-outline btn-sm">
                    See More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <a href="/books" className="btn btn-primary">
            Explore All Books
          </a>
        </div>
      </div>
    </section>
  );
}
