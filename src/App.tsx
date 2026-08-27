import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { MaterialCarousel } from './components/MaterialCarousel';
import { BenefitsSection } from './components/BenefitsSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { AudienceSection } from './components/AudienceSection';
import { ProductBundle } from './components/ProductBundle';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { AccessSteps } from './components/AccessSteps';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* BARRA SUPERIOR */}
      <AnnouncementBar />

      <main>
        {/* 1. PRIMEIRA DOBRA (SEM PREÇO, CAPAS INTEIRAS, BENEFÍCIOS NO FUNDO BEGE) */}
        <HeroSection />

        {/* 2. PRÉVIAS DAS PÁGINAS INTERNAS */}
        <MaterialCarousel />

        {/* 3. EXPLICAÇÃO DOS BENEFÍCIOS */}
        <BenefitsSection />

        {/* 4. CARROSSEL RESTAURADO: PESSOAS UTILIZANDO OS MATERIAIS */}
        <ShowcaseGallery />

        {/* 5. PÚBLICOS ATENDIDOS */}
        <AudienceSection />

        {/* 6. APRESENTAÇÃO DOS 16 MATERIAIS (VITRINE COMERCIAL EM 2 GRUPOS) */}
        <ProductBundle />

        {/* 7. PLANOS E PREÇOS (PREÇOS R$ 17,90 E R$ 27,90 AQUI!) */}
        <PricingSection />

        {/* 8. DEPOIMENTOS REAIS */}
        <TestimonialsSection />

        {/* 9. GARANTIA DE 7 DIAS */}
        <GuaranteeSection />

        {/* 10. COMO VOCÊ RECEBE OS MATERIAIS (PASSO A PASSO WIAPY) */}
        <AccessSteps />

        {/* 11. PERGUNTAS FREQUENTES */}
        <FAQSection />
      </main>

      {/* RODAPÉ E CTA FLUTUANTE MOBILE */}
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
