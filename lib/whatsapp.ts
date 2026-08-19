const WHATSAPP_NUMBER = "40757256574";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  inscription:
    "Bonjour, je souhaite m'inscrire à la formation Excel gratuite (cohorte de septembre 2026). Pouvez-vous me donner les prochaines étapes ?",
  inscriptionNiveau: (niveau: string) =>
    `Bonjour, je souhaite m'inscrire à la formation Excel gratuite (cohorte de septembre 2026), en particulier au ${niveau}. Pouvez-vous me donner les prochaines étapes ?`,
  question:
    "Bonjour, j'ai une question sur la formation Excel gratuite avant de m'inscrire.",
  ressources:
    "Bonjour, j'ai téléchargé les ressources de la formation Excel gratuite et j'aimerais avoir plus d'informations sur la cohorte de septembre 2026.",
  calendrier:
    "Bonjour, pourriez-vous me communiquer le calendrier des sessions live de la formation Excel gratuite ?",
};
