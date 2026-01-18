
export async function getProductRecommendation(userInput: string) {
  // Simula um pequeno delay para parecer um processamento natural
  await new Promise(resolve => setTimeout(resolve, 800));

  const input = userInput.toLowerCase();

  // Lógica de recomendação baseada em palavras-chave industriais
  if (input.includes('alimento') || input.includes('comida') || input.includes('açúcar') || input.includes('farinha') || input.includes('nutrição')) {
    return "Para sua operação alimentícia, recomendo nosso **Big Bag Food Grade**. Ele é fabricado em ambiente controlado (Sala Limpa), com corte ultrassônico para evitar fios soltos e possui certificação BRC/GFSI, garantindo zero contaminação.";
  }

  if (input.includes('químico') || input.includes('inflamável') || input.includes('explosão') || input.includes('estática') || input.includes('gás') || input.includes('pó fino')) {
    return "Devido aos riscos eletrostáticos, o ideal é o **Big Bag Condutivo (Tipo C)**. Ele possui filamentos de carbono interconectados que, quando aterrados, eliminam o risco de faíscas e descargas térmicas em áreas classificadas.";
  }

  if (input.includes('peso') || input.includes('carga') || input.includes('resistência') || input.includes('mineração') || input.includes('obra') || input.includes('entulho')) {
    return "Para cargas pesadas e materiais densos, o **Big Bag Padrão** com fator de segurança 6:1 é a melhor escolha. Ele suporta até 2.000kg com tecido de polipropileno de alta densidade e tratamento anti-UV.";
  }

  // Resposta padrão caso não identifique palavras-chave específicas
  return "Entendi sua necessidade. Na LACBAG trabalhamos com modelos **Padrão** (uso geral), **Condutivos** (segurança elétrica) e **Food Grade** (alimentícios). Poderia me informar qual material você pretende ensacar para que eu seja mais específico?";
}
