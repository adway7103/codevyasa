import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
export default function Home() {
  return (
    <div className="bg-black">
        <Navbar />
        <Hero />
        <Sponsor />
    </div>
  );
}
