import CatalogPreview from "@/components/home/CatalogPreview";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <CatalogPreview />
    </div>
  );
}
