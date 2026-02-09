import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ"; // <--- Importação restaurada
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Menu Superior */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="features">
          <Features />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="pricing">
          <Pricing />
        </div>

        {/* Seção FAQ Restaurada */}
        <div id="faq">
          <FAQ />
        </div>
        
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;