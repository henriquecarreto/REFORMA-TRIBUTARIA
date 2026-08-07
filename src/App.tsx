import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { MaterialCarousel } from './components/MaterialCarousel';
import { DifferentialsSection } from './components/DifferentialsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { ProblemBlock } from './components/ProblemBlock';
import { AudienceSection } from './components/AudienceSection';
import { ProductBundle } from './components/ProductBundle';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* SEÇÃO 01 — BARRA SUPERIOR */}
      <AnnouncementBar />

      {/* MAIN CONTENT LANDING NARRATIVE */}
      <main>
        {/* SEÇÃO 02 — HERO PRINCIPAL */}
        <HeroSection />

        {/* SEÇÃO 04 — NOVO CARROSSEL GRANDE DE AMOS TRAS (100% LARGURA CONTINUO) */}
        <MaterialCarousel />

        {/* SEÇÃO 05 — DIFERENCIAIS */}
        <DifferentialsSection />

        {/* SEÇÃO 06 — BENEFÍCIOS */}
        <BenefitsSection />

        {/* SEÇÃO 07 — SEGUNDO CARROSSEL VISUAL */}
        <ShowcaseGallery />

        {/* SEÇÃO 08 — BLOCO DE PROBLEMA */}
        <ProblemBlock />

        {/* SEÇÃO 09 — 6 CARDS DE DIREÇÃO E ORGANIZAÇÃO */}
        <AudienceSection />

        {/* SEÇÃO 10 — TUDO QUE A PESSOA RECEBE */}
        <ProductBundle />

        {/* SEÇÃO 11 — 4 BÔNUS INCLUSOS */}
        <BonusSection />

        {/* SEÇÃO 12 — OFERTA */}
        <PricingSection />

        {/* SEÇÃO 14 — DEPOIMENTOS */}
        <TestimonialsSection />

        {/* SEÇÃO 15 — GARANTIA */}
        <GuaranteeSection />

        {/* SEÇÃO 17 — FAQ */}
        <FAQSection />
      </main>

      {/* SEÇÃO 18 — RODAPÉ */}
      <Footer />

      {/* SEÇÃO 19 — CTA FLUTUANTE NO MOBILE */}
      <MobileStickyCTA />
    </div>
  );
}

export default App;
