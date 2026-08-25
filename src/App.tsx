import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { MaterialCarousel } from './components/MaterialCarousel';
import { DifferentialsSection } from './components/DifferentialsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { ProblemBlock } from './components/ProblemBlock';
import { AudienceSection } from './components/AudienceSection';
import { ProductBundle } from './components/ProductBundle';
import { AccessSteps } from './components/AccessSteps';
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

        {/* SEÇÃO 04 — PRÉVIAS REAIS (100% LARGURA CONTINUO) */}
        <MaterialCarousel />

        {/* SEÇÃO 05 — DIFERENCIAIS */}
        <DifferentialsSection />

        {/* SEÇÃO 06 — BENEFÍCIOS */}
        <BenefitsSection />

        {/* SEÇÃO 07 — GALERIA VISUAL */}
        <ShowcaseGallery />

        {/* SEÇÃO 08 — BLOCO DE PROBLEMA */}
        <ProblemBlock />

        {/* SEÇÃO 09 — PÚBLICOS ATENDIDOS */}
        <AudienceSection />

        {/* SEÇÃO 10 — COLEÇÃO DOS 16 MATERIAIS */}
        <ProductBundle />

        {/* SEÇÃO 11 — PASSO A PASSO DE ACESSO */}
        <AccessSteps />

        {/* SEÇÃO 12 — BÔNUS INCLUSOS */}
        <BonusSection />

        {/* SEÇÃO 13 — OFERTA E PREÇOS */}
        <PricingSection />

        {/* SEÇÃO 14 — DEPOIMENTOS */}
        <TestimonialsSection />

        {/* SEÇÃO 15 — GARANTIA */}
        <GuaranteeSection />

        {/* SEÇÃO 16 — FAQ */}
        <FAQSection />
      </main>

      {/* SEÇÃO 17 — RODAPÉ */}
      <Footer />

      {/* SEÇÃO 18 — CTA FLUTUANTE NO MOBILE */}
      <MobileStickyCTA />
    </div>
  );
}

export default App;
