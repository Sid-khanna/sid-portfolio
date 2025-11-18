import Hero from "../components/Hero";
import AboutSection from "../components/About/AboutSection";
import FeaturedReel from "../components/Featured/FeaturedReel";

export default function Home() {
  return (
    <main className="text-neutral-900">
      <Hero />
      <AboutSection />
      <FeaturedReel />
    </main>
  );
}
