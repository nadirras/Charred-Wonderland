"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, X } from "lucide-react";

const artists = [
  {
    name: "Pukattori",
    avatar: "/comission/pp-pukat.png",
    bio: "Aku suka alpukat.",
    portfolios: ["/comission/bowb.png", "/comission/pukattori.png"],
    contact: "https://linktr.ee/pukattori",
  },
  {
    name: "Tjiahaya",
    avatar: "/comission/Tjiahaya_Logo.png",
    shortBio: `✨ Logo Commissions Now Open!  
For Comics/Books, Series, VTubers, and more!  
Starting from IDR 150,000 (Special Comipara 5 price!)`,
    fullBio: `Logo Commissions Now Open!
For Comics/Books, Series, VTubers, and more!
✨ Starting from IDR 150,000 (Special Comipara 5 price!)

General Terms:
- For non-commercial use only (contact me for commercial licensing).
- Includes 1 revision and master file.
- No refunds after the first preview before revision.
- Final logo may be featured in my portfolio.

Workflow:
1. Submit the brief and references.
2. Request will be reviewed, and a detailed quote will be provided based on complexity and timeline agreement
3. 50% down payment to begin the project.
4. Drafts and sketches will be shared for review.
5. Provide feedback and approval.
6. Remaining payment to be completed.
7. Final design will be prepared.
8. One revision (if needed).
9. Final deliverables will be sent.

📩 Contact @tjiahaya via Discord for inquiries and commissions!`,
    portfolios: ["/comission/tjiahaya_1.png", "/comission/tjiahaya_2.png", "/comission/tjiahaya_3.png"],
    contact: "https://tjiahaya.xyz/",
  },
];

export default function ComponentPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100  py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-[IM_FELL_English_SC] text-neutral-900 dark:text-neutral-100">Artist Commissions</h1>
        <p className="mt-4 text-neutral-600  max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Meet our talented illustrators! Each artist brings their own charm — whether you’re seeking a book cover, OC art, or special event merchandise, you’ll find the perfect collaborator here.
        </p>
      </motion.div>

      {/* Artists */}
      <div className="w-full max-w-4xl space-y-16">
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-base-200/60 dark:bg-neutral-800/70 shadow-xl rounded-3xl overflow-hidden border border-base-300/30 p-6 flex flex-col items-center"
          >
            {/* Artist Info */}
            <div className="flex flex-col items-center text-center space-y-4 w-full">
              <div className="relative w-28 h-28">
                <Image src={artist.avatar} alt={`${artist.name} avatar`} fill className=" object-fit shadow-md" />
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mt-2">{artist.name}</h2>

              {artist.fullBio ? (
                <>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">{expanded === index ? artist.fullBio : artist.shortBio}</p>

                  <button onClick={() => setExpanded(expanded === index ? null : index)} className="text-sm text-primary mt-2 flex items-center gap-1 hover:underline">
                    {expanded === index ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">{artist.bio}</p>
              )}

              <a href={artist.contact} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm mt-3 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Commission Info
              </a>
            </div>

            {/* Portfolio */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 mt-6 bg-base-300/40 dark:bg-neutral-700/30 w-full rounded-2xl">
              {artist.portfolios.map((image, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer" onClick={() => setPreviewImage(image)}>
                  <Image src={image} alt={`${artist.name} artwork ${i + 1}`} width={400} height={400} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-light">
                    Click to view
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute -top-4 -right-4  rounded-full p-2 shadow-md hover:bg-gray-600" onClick={() => setPreviewImage(null)}>
                <X size={18} />
              </button>
              <Image src={previewImage} alt="Preview full size" width={1000} height={800} className="object-contain max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
