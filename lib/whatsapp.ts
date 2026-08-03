// Única fonte da verdade do contato por WhatsApp. O link aparece em várias
// seções — nunca montar a URL à mão em outro lugar.
const NUMERO = "5532984015847";
const MENSAGEM_PADRAO = "Olá, Isabela. Gostaria de agendar uma primeira conversa.";

export function whatsappUrl(mensagem: string = MENSAGEM_PADRAO): string {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
