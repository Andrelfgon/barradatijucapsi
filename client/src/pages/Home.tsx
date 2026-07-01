import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import InspirationalSection from '@/components/InspirationalSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Landing Page - Maria da Conceição | Clínica de Psicologia
 * 
 * Design Philosophy: Minimalismo Elegante com Acentos Verdes
 * - Cores: Branco, Verde Menta (#4A9B6F), Cinza Escuro (#2C3E50)
 * - Tipografia: Playfair Display (títulos) + Lato (corpo)
 * - Espaço em branco generoso para transmitir calma e profissionalismo
 * - Transições suaves e animações sutis
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <SpecialtiesSection />
        <InspirationalSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
