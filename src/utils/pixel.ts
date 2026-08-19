declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispara o evento padrão InitiateCheckout no Meta Pixel (Pixel ID: 904141958942511).
 * 
 * @param value Valor numérico da oferta (ex: 17.90 ou 27.90)
 * @param contentName Nome do produto (ex: 'Plano Básico' ou 'Plano Completo')
 */
export const trackInitiateCheckout = (value: number, contentName: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        value: value,
        currency: 'BRL',
        content_name: contentName,
      });
    }
  } catch (error) {
    console.error('Erro ao disparar o evento InitiateCheckout do Meta Pixel:', error);
  }
};

/**
 * Dispara o evento InitiateCheckout e garante o tempo necessário para o navegador
 * enviar a requisição HTTP para a Meta antes do redirecionamento de página,
 * preservando todas as UTMs alteradas ou capturadas pela UTMify ou vindas da URL atual.
 * 
 * @param e Evento de clique do React (opcional)
 * @param url URL de destino padrão no checkout da Wiapy
 * @param value Valor numérico da oferta (17.90 ou 27.90)
 * @param contentName Nome da oferta ('Plano Básico' ou 'Plano Completo')
 */
export const trackInitiateCheckoutAndNavigate = (
  e: React.MouseEvent<Element> | null,
  url: string,
  value: number,
  contentName: string
) => {
  if (e) {
    e.preventDefault();
  }

  // Dispara evento no Meta Pixel
  trackInitiateCheckout(value, contentName);

  // Preserva os parâmetros UTM decorados no elemento <a> pelo script da UTMify
  let targetUrl = url;
  if (e && e.currentTarget) {
    const anchor = e.currentTarget as HTMLAnchorElement;
    if (anchor.href && anchor.href.includes('pay.wiapy.com')) {
      targetUrl = anchor.href;
    }
  }

  // Preserva parâmetros da URL atual (utm_source, utm_campaign, utm_medium, utm_content, utm_term, src, sck, etc.)
  if (typeof window !== 'undefined' && window.location.search) {
    try {
      const currentParams = new URLSearchParams(window.location.search);
      const targetObj = new URL(targetUrl);
      currentParams.forEach((val, key) => {
        if (!targetObj.searchParams.has(key)) {
          targetObj.searchParams.set(key, val);
        }
      });
      targetUrl = targetObj.toString();
    } catch (err) {
      console.error('Erro ao repassar parâmetros UTM para a URL do checkout:', err);
    }
  }

  // Retenção de 200ms para envio dos eventos antes da troca de página
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 200);
};
