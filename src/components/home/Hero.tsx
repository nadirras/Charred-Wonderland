import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image src={"/hero-icon.png"} width={500} height={500} alt={"our_mascots"} />
        <div>
          <h1 className="text-5xl font-bold font-[IM_FELL_English_SC]">Charred Wonderland is Here!</h1>
          <p className="py-6">From mystery, to fruit and vegetable? Charred Wonderland has it all! Explore our wide range of products and find your new favorite today.</p>
        </div>
      </div>
    </div>
  );
}
