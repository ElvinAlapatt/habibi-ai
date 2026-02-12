import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Hero />
      <Logos />
      
    </main>
  );
}
