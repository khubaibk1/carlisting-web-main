import Image from "next/image";
import { Montserrat } from "next/font/google";
import Hero from "@/components/home/Hero";
import Tabs from "@/components/home/tabs/Tabs";
import Carousel from "@/components/home/Carousel";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const font = Montserrat({ subsets: ["latin"] });
const hide=false;
export default function Home() {
  return (
    <main className={`${font.className}`}>
      <Navbar hide={hide}/>
      <Hero />
      <Tabs />
      <Carousel />
      <Footer />
    </main>
  );
}
