"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const artists = [
  {
    name: "Pukattori",
    avatar: "/comission/pp-pukat.png",
    bio: "Aku suka alpukat.",
    portfolios: ["/comission/bowb.png", "/comission/pukattori.png"],
    contact: "https://www.instagram.com/pukattori?igsh=aGlveWhsczNuZmZl",
  },
  {
    name: "Tjiahaya",
    avatar: "/comission/tjiahaya.png",
    bio: "A game master, an illustrator, a writer, a gamer, a hobbyist-dev depending on my mood, and others. I basically like doing and creating things.",
    portfolios: ["/comission/tjiahaya.png", "/comission/tjiahaya.png"],
    contact: "https://x.com/honeybubblecia",
  },
];

export default function ComponentPage() {
  return (
    <div className="min-h-screen bg-base-100 dark:bg-neutral-900 py-12 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-2 text-neutral-800 dark:text-neutral-100">Artist Commissions</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Browse our talented artists and explore their portfolios. Each artist offers unique styles — perfect for your novel cover, OC art, or event merchandise.
        </p>
      </div>

      {/* Artists Section */}
      <div className="w-full max-w-6xl space-y-16">
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card lg:card-side bg-base-200 dark:bg-neutral-800 shadow-xl rounded-2xl overflow-hidden"
          >
            {/* Artist Info */}
            <div className="p-6 lg:w-1/3 flex flex-col items-center justify-center text-center">
              <Image src={artist.avatar} alt={`${artist.name} avatar`} width={120} height={120} className="rounded-full mb-4 object-cover shadow-md" />
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{artist.name}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{artist.bio}</p>
              <a href={artist.contact} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm mt-4">
                Commission Info →
              </a>
            </div>

            {/* Portfolio */}
            <div className="grid grid-cols-3 gap-2 p-4 lg:w-2/3 bg-base-300/50 dark:bg-neutral-700/40">
              {artist.portfolios.map((image, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-md cursor-pointer">
                  <Image src={image} alt={`${artist.name} artwork ${i + 1}`} width={400} height={400} className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
