"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CatalogPreview() {
  const previewPages = [
    { src: "/catalog/01.png", alt: "Cover" },
    { src: "/catalog/02.png", alt: "Page 1" },
    { src: "/catalog/03.png", alt: "Page 2" },
  ];

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-neutral-800 dark:text-neutral-100">Catalog Preview</h2>
          <Link href="/catalog">
            <button className="btn btn-outline btn-sm md:btn-md rounded-full">See More →</button>
          </Link>
        </div>

        {/* Preview Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previewPages.map((page, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-lg bg-base-200"
            >
              <Image src={page.src} alt={page.alt} width={800} height={800} className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105" />
              <div className="absolute bottom-2 right-3 text-xs text-white bg-black/60 px-2 py-1 rounded-md">{page.alt}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
