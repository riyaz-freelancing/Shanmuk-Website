export const SITE_CONFIG = {
  name: "Shanmuk Fitness",
  trainerName: "Shanmuk",
  title: "Certified Fitness Coach & Nutrition Specialist",
  experience: "5+ Years",
  members: "500+",
  whatsappNumber: "918317688770", // Single configurable WhatsApp number
  email: "contact@shanmukfitness.com",
  location: "Hyderabad, India",
  instagram: "https://www.instagram.com/shannufit?stkn=OG9sa2x6NHY1ZHBp",
  youtube: "https://youtube.com/c/shanmukfitness",
  facebook: "https://facebook.com/shanmukfitness",
};

/**
 * Helper to generate encoded WhatsApp URLs
 * @param {string} message 
 * @returns {string}
 */
export const getWhatsAppUrl = (message = "Hi Shanmuk, I would like to know more about your fitness & diet plans.") => {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMsg}`;
};
