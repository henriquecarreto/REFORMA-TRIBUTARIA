import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { MaterialCarousel } from './components/MaterialCarousel';
import { BenefitsSection } from './components/BenefitsSection';
import { AudienceSection } from './components/AudienceSection';
import { ProductBundle } from './components/ProductBundle';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* 1. BARRA SUPERIOR */}
      <AnnouncementBar />

      <main>
        {/* 1. PRIMEIRA DOBRA */}
        <HeroSection />

        {/* 2. PRÉVIAS REAIS */}
        <MaterialCarousel />

        {/* 3. BENEFÍCIOS */}
        <BenefitsSection />

        {/* 4. PÚBLICOS ATENDIDOS */}
        <AudienceSection />

        {/* 5. MATERIAIS INCLUÍDOS (12 GUIAS + 4 BÔNUS = 16 MATERIAIS) */}
        <ProductBundle />

        {/* 6. PLANOS E PREÇOS */}
        <PricingSection />

        {/* 7. DEPOIMENTOS */}
        <TestimonialsSection />

        {/* 8. GARANTIA */}
        <GuaranteeSection />

        {/* 9. FAQ */}
        <FAQSection />
      </main>

      {/* RODAPÉ E CTA FLUTUANTE MOBILE */}
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
