import Header from "./components/Header";
import Intro from "./components/Intro";
import Benefits from "./components/Benefits";
import BusinessCard from "./components/Business_Card";
import Cases from "./components/Cases";
import Economy from "./components/Economy";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Motivation from "./components/Motivation";
import Sponsors from "./components/Sponsors";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-w-[390px] px-5 leading-none">
      <Header />
      <Intro />
      <Features></Features>
      <Motivation></Motivation>
      <Benefits></Benefits>
      <Sponsors></Sponsors>
      <Cases></Cases>
      <Economy></Economy>
      <BusinessCard></BusinessCard>
      <Footer></Footer>
    </div>
  );
}
