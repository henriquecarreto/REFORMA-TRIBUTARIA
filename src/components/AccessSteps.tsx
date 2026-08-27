import React from 'react';
import { ShoppingCart, MailCheck, Download, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';

export const AccessSteps: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'precos';
    }
  };

  const steps = [
    {
      number: '1',
      title: 'Conclua sua compra',
      text: 'Escolha o plano desejado e finalize o pagamento com segurança.',
      icon: ShoppingCart,
      iconColor: 'text-[#1769D1]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      number: '2',
      title: 'Receba o acesso pela Wiapy',
      text: 'Após a confirmação do pagamento, as orientações de acesso serão enviadas para o e-mail informado na compra.',
      icon: MailCheck,
      iconColor: 'text-[#00A859]',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      number: '3',
      title: 'Acesse e baixe os materiais',
      text: 'Os arquivos ficarão disponíveis na plataforma Wiapy, organizados para você acessar, consultar e baixar quando precisar.',
      icon: Download,
      iconColor: 'text-[#D97706]',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      number: '4',
      title: 'Estude como preferir',
      text: 'Consulte os materiais pelo celular, tablet ou computador. Se preferir, você também poderá baixar e imprimir os arquivos em PDF.',
      icon: Smartphone,
      iconColor: 'text-[#00A859]',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-amber-200/60 relative overflow-hidden" id="como-recebe">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3.5 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
            <span>PASSO A PASSO DA ENTREGA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
            COMO VOCÊ RECEBE OS MATERIAIS
          </h2>

          <p className="text-base sm:text-lg text-[#44566C] font-semibold">
            Veja como funciona, passo a passo
          </p>
        </div>

        {/* AS 4 ETAPAS (DESKTOP: 4 EM LINHA COM LINHA DISCRETA / TABLET: 2 COLUNAS / MOBILE: 1 COLUNA) */}
        <div className="relative mb-12 sm:mb-16">
          
          {/* LINHA DISCRETA DE CONEXÃO NO DESKTOP */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-amber-200/80 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center h-full group"
                >
                  {/* ÍCONE E NÚMERO */}
                  <div className="relative mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform`}>
                      <IconComponent className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0B1F3A] text-white text-xs font-black flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                  </div>

                  {/* TÍTULO */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  {/* TEXTO (FONTE MÍNIMA 16PX NO MOBILE) */}
                  <p className="text-base text-[#44566C] font-medium leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* AVISO DESTACADO DA WIAPY */}
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-xs mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-[#00A859] font-extrabold text-xs sm:text-sm uppercase mb-3 border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
            <span>TUDO EM UM SÓ LUGAR, NA WIAPY</span>
          </div>

          <p className="text-base sm:text-lg text-[#14233B] font-semibold leading-relaxed">
            Você não precisa procurar uma área de membros em outro site. Após a confirmação do pagamento, basta seguir as orientações enviadas para o seu e-mail e acessar os materiais diretamente pela plataforma Wiapy.
          </p>
        </div>

        {/* BOTÃO DA SEÇÃO */}
        <div className="flex flex-col items-center">
          <a
            href="#precos"
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-[#00A859] hover:bg-[#008C4A] text-white font-extrabold text-base sm:text-lg min-h-[56px] px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-emerald-700/20 hover:scale-[1.01] transition-transform text-center border border-emerald-400/30"
          >
            <span>QUERO GARANTIR MEU ACESSO</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AccessSteps;
