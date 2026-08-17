
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      <Industries />
      <ContactCTA />
      <Footer />
    </>
  );
}