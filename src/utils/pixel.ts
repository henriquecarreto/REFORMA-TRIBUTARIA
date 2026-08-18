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
 * enviar a requisição HTTP para a Meta antes do redirecionamento de página.
 * 
 * @param e Evento de clique do React (opcional)
 * @param url URL de destino no checkout da Wiapy
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

  trackInitiateCheckout(value, contentName);

  // Pequena pausa (200ms) imperceptível ao usuário, porém suficiente para a transmissão da requisição beacon da Meta
  setTimeout(() => {
    window.location.href = url;
  }, 200);
};
