"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CatalogPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pages = [
    { src: "/catalog/01.png", alt: "Cover" },
    { src: "/catalog/02.png", alt: "Page 1" },
    { src: "/catalog/03.png", alt: "Page 2" },
    { src: "/catalog/04.png", alt: "Page 3" },
    { src: "/catalog/05.png", alt: "Page 4" },
    { src: "/catalog/06.png", alt: "Page 5" },
    { src: "/catalog/07.png", alt: "Page 6" },
    { src: "/catalog/08.png", alt: "Page 7" },
    { src: "/catalog/09.png", alt: "Page 8" },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-[IM_FELL_English_SC] mb-8 text-center text-neutral-800 dark:text-neutral-100">Catalog Preview</h1>

      {/* Catalog Grid */}
      <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedImage(page.src)}
            className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <Image src={page.src} width={800} height={800} alt={page.alt} className="object-cover w-full h-auto" />
            <div className="absolute bottom-2 right-3 text-xs text-white bg-black/60 px-2 py-1 rounded-md">{page.alt}</div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Pop-up */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="relative w-auto max-w-3xl max-h-[90vh]" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} width={1000} height={1000} alt="Enlarged catalog page" className="w-auto h-auto max-h-[85vh] max-w-full rounded-lg shadow-lg object-contain" />
              <button className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm hover:bg-black/70" onClick={() => setSelectedImage(null)}>
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
