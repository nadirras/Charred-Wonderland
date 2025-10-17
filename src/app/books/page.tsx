"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Book {
  title: string;
  cover: string;
  blurb: string;
  previewImages: string[];
  tags?: string[];
}

const books: Book[] = [
  {
    title: "Book 0: Isolation",
    cover: "/books/cover_isolation.png",
    blurb:
      "Thraver adalah seorang anak SMA asrama yang sering memecachkan kasus-kasus kecil di sekolahnya, seperti barang hilang hingga ke perundungan. Suatu hari, ia merasa diikuti dan ternyata ia diculik sesampainya di rumah. Ia terbangun di sebuah rumah mewah bernuansa kuno yang menurutnya ia asing. Dia pun disambut dengan baik oleh orang-orang di rumah itu dan dia merasa dirinya kerasan di sana. Tetapi ternyata keindahan itu tidak berlangsung lama setelah mengetahui bahwa yang ia tempati adalah tempat yang salah, yaitu tempat percobaan manusia. Bagaimana ia bisa bebas dari tempat mengerikan itu?",
    previewImages: ["/books/previews/book0_page1.png", "/books/previews/book0_page2.png", "/books/previews/book0_page3.png"],
    tags: ["Mystery", "Psychological", "Prequel"],
  },
  {
    title: "Book 1: Shadows of Deception",
    cover: "/books/cover_shadows_of_deception.png",
    blurb:
      "Thraver berhasil keluar dari Mangroveshield bersama sebelas orang rekannya. Renshaw yang ternyata sudah terlibat dengan suatu organisasi mata-mata rahasia yang dibentuk oleh walikota menarik mereka untuk masuk ke dalam organisasi yang bernama ETA (Exotechnology Tactical Agency) itu. Thraver pun diberi perlindungan dari ETA dengan syarat mengikuti serangkaian pelatihan untuk bisa membela dirinya jika diserang oleh musuh. Berbagai masalah terjadi selama menjadi agen rahasia tersebut, berhadapan dengan sekelompok anggota organisasi Mangroveshield. Bagaimana ia bisa bertahan di saat gencarnya ancaman Mangroveshield?",
    previewImages: ["/books/previews/book1_page1.png", "/books/previews/book1_page2.png", "/books/previews/book1_page3.png"],
    tags: ["Thriller", "Secret Agent", "Sequel"],
  },
];

export default function BooksPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-neutral-900 py-16 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl mb-4 font-[IM_FELL_English_SC] text-neutral-400">My Books</h1>
        <p
          className="
        text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Step into the world of <span className="font-semibold">Thraver</span> — mysteries, secret organizations, and the fragile line between sanity and truth.
        </p>
      </div>

      <div className="w-full max-w-6xl space-y-20">
        {books.map((book, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card lg:card-side bg-neutral-800 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl duration-300"
          >
            {/* Cover */}
            <div className="lg:w-1/3 flex items-center justify-center bg-neutral-700/30 p-6">
              <Image src={book.cover} alt={`${book.title} cover`} width={350} height={500} className="rounded-xl shadow-md object-cover" />
            </div>

            {/* Content */}
            <div className="p-8 lg:w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3 text-neutral-100">{book.title}</h2>

                {/* Tags */}
                {book.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.tags.map((tag, t) => (
                      <span key={t} className="badge badge-outline text-xs text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Blurb */}
                <p className="text-neutral-300 leading-relaxed mb-6">{book.blurb}</p>

                {/* Image Previews */}
                <div className="bg-neutral-700/30 p-4 rounded-lg">
                  <p className="font-semibold mb-3 text-neutral-200">✦ Book Preview</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <AnimatePresence initial={false}>
                      {(expanded === i ? book.previewImages : book.previewImages.slice(0, 2)).map((src, idx) => (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="cursor-pointer overflow-hidden rounded-lg hover:scale-[1.03] duration-300"
                          onClick={() => setPopupImage(src)}
                        >
                          <Image src={src} alt={`Preview ${idx + 1}`} width={400} height={600} className="rounded-lg shadow-sm object-cover" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Show More / Less */}
                  <div className="mt-4 flex justify-end">
                    <button className="btn btn-outline btn-xs" onClick={() => setExpanded(expanded === i ? null : i)}>
                      {expanded === i ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {popupImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-auto p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mx-auto my-auto flex items-center justify-center max-sm:ml-0"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={popupImage} alt="Preview full size" className="object-contain max-h-[85vh] w-auto max-w-[90vw] rounded-xl shadow-2xl " />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
