import { site } from "@/data/site";

function getInternationalWhatsAppNumber(): string {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  return digits.startsWith("0") ? "234" + digits.slice(1) : digits;
}

export function createDirectWhatsAppLink(): string {
  return "https://wa.me/" + getInternationalWhatsAppNumber();
}

export function createWhatsAppLink(message: string): string {
  return createDirectWhatsAppLink() + "?text=" + encodeURIComponent(message);
}
