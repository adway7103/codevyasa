import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import { TabsDemo } from "./components/TabsDemo";
export default function Home() {
  return (
    <div className="bg-black">
        <Navbar />
        <Hero />
      <Sponsor />
      <TabsDemo/>
    </div>
  );
}
