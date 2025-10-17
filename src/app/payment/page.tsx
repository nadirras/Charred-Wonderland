"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 py-12 text-center space-y-10">
      <motion.h1 className="text-3xl font-[IM_FELL_English_SC] tracking-wide text-base-content" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Payment via QRIS
      </motion.h1>

      <motion.div
        className="bg-base-200/60 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-6 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-base-content/80 text-sm uppercase tracking-wide">Sponsored by</p>
        <Image src="/payment/tjiahaya_transportasi.jpeg" alt="Sponsor Logo" width={200} height={200} className="rounded-lg shadow-md" />

        <hr className="w-1/2 border-base-content/20" />

        <div className="flex flex-col items-center space-y-4">
          <p className="text-base-content/70 text-sm">Scan to pay</p>
          <div className="bg-white p-4 rounded-xl shadow-inner flex flex-col items-center">
            <Image src="/payment/qris.jpeg" alt="QRIS Payment" width={250} height={250} className="rounded-md" />

            {/* Download button */}
            <a
              href="/payment/qris.jpeg"
              download="qris-payment.jpeg"
              className="mt-4 flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-base-300 hover:bg-base-200 text-base-content transition-colors duration-200"
            >
              <Download size={16} />
              Download QR
            </a>
          </div>
        </div>
      </motion.div>

      <p className="text-xs text-base-content/50">Thank you for your support 💕</p>
    </div>
  );
};

export default PaymentPage;
