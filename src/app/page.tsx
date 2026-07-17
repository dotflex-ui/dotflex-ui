import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";

import homeData from "./../json/home.json";

export default function Home() {
  return (
    <>
      <Hero data={homeData.hero} />

      <Features data={homeData.features} />

      <About data={homeData.about} />

      <Contact data={homeData.contact} />
    </>
  );
}