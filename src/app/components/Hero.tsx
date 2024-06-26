"use client"
import { Vortex } from "./ui/vortex";
import Navbar from "./Navbar";
function Hero() {
  return (
    <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-screen"
    >
      <div className="h-screen w-screen flex flex-col justify-center items-center 2xl:gap-3">
        <h2 className="text-white text-2xl md:text-6xl 2xl:text-8xl font-bold text-center">
          Start your journey now!
        </h2>
        <p className="text-white text-sm md:text-2xl 2xl:text-4xl 2xl:max-w-3xl max-w-xl mt-6 text-center">
          Propelling Early-Stage Tech Ventures to Unprecedented Heights
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center 2xl:text-2xl">
          <button className="px-6 py-2 bg-white hover:bg-black hover:text-white transition duration-200 rounded-full text-black hover:border-[1.1px] border-white">
            See Plans
          </button>
          <button className="px-4 py-2  text-white">Schedule a Call</button>
        </div>
      </div>
    </Vortex>
  );
}

export default Hero