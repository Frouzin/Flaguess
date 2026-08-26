/**
 * Configurações editáveis do site num único lugar: redes sociais, doação (PIX)
 * e contato. Deixe uma string vazia ('') para esconder o item na interface —
 * cada link/botão só aparece quando tem valor.
 */
export const SITE = {
  /** E-mail de contato (também usado na Política de Privacidade). */
  contactEmail: 'matheusereis44@gmail.com',

  /** Links das redes sociais. '' esconde o link no rodapé. */
  social: {
    github: 'https://github.com/Frouzin',
    linkedin: 'https://www.linkedin.com/in/matheusreisdev/',
  },

  /** Doação via PIX. Preencha `pixKey` para habilitar o botão "Apoiar". */
  donation: {
    /** Chave PIX: e-mail, telefone, CPF ou chave aleatória. */
    pixKey: '31cca80c-2222-407b-890a-d8920a18de7e',
    /** Nome do recebedor exibido no modal (opcional). */
    pixName: 'Matheus Reis',
    /** Link do Ko-fi / Buy me a coffee (opcional). */
    kofi: '',
  },

  /**
   * Google AdSense — fonte única da verdade para anúncios.
   *
   * Deixe `client` vazio ('') para manter TUDO DESLIGADO: nenhum script é
   * carregado e nenhum anúncio aparece (em produção não renderiza nada; em
   * desenvolvimento mostra apenas um placeholder para você ver a posição).
   *
   * Ao ser aprovado no AdSense: preencha `client` com o seu ID de editor
   * ("ca-pub-XXXXXXXXXXXXXXXX") e cada `slots.*` com o ID do bloco de anúncio
   * (data-ad-slot) criado no painel. Ver MONETIZACAO.md.
   */
  ads: {
    /** ID do editor AdSense (ca-pub-...). Vazio = anúncios desligados. */
    client: '',
    /** IDs dos blocos de anúncio (data-ad-slot) por posição na tela. */
    slots: {
      /** Banner horizontal acima do rodapé. */
      footer: '',
    },
  },
};
