/**
 * Centralized content layer.
 *
 * All CMS-managed content is accessed through these async functions.
 * Currently returns static placeholder data. When Sanity is connected,
 * replace each function body with a GROQ query via fetchSanity().
 *
 * Data shapes match expected Sanity document schemas so components
 * won't need any changes when switching to live CMS data.
 */

// import { fetchSanity } from "./sanity";

export async function getHomeContent() {
  // ── Future GROQ query ──
  // return fetchSanity(`{
  //   "hero": *[_type == "homePage"][0] {
  //     heading, subheading, ctaText, image
  //   },
  //   "services": *[_type == "service"] | order(order asc) {
  //     _key, name, price, category, image
  //   },
  //   "serviceCategories": *[_type == "serviceCategory"] | order(order asc).name,
  //   "testimonials": *[_type == "testimonial"] | order(order asc) {
  //     _key, name, text, avatar
  //   }
  // }`);

  return {
    hero: {
      heading: "YOUR SIGNATURE LOOK, PERFECTED!",
      subheading:
        "Expert Makeup & Styling for Weddings, Performances, and Photo-shoots.",
        // "Prerna\u2019s Makeup Studio is a full-service beauty destination offering professional makeup for weddings, photoshoots, and special events.",
      ctaText: "Book Now",
      image: null,
    },
    serviceCategories: ["Featured", "Performance", "Prom", "Photo Shoots"]
  };
}

export async function getAboutContent() {
  // ── Future GROQ query ──
  // return fetchSanity(`*[_type == "aboutPage"][0] {
  //   heading, subtitle, portrait,
  //   "bio": bio[],
  //   "stats": stats[] { value, label },
  //   philosophy { heading, text, ctaText }
  // }`);

  return {
    heading: "About Prerna Makeup Studio",
    subtitle: "Creating timeless beauty with a modern touch.",
    portrait: null,
    bio: [
      "With over a decade of experience in the beauty industry, Prerna has become a sought-after name for bridal and editorial makeup. Her philosophy is simple: makeup should enhance, not mask.",
      "Trained in London and Paris, she brings international techniques to every client, ensuring a flawless, long-lasting application that looks beautiful both in person and on camera.",
    ],
    stats: [
      { value: "12+", label: "Years Experience" },
      { value: "500+", label: "Happy Brides" },
      { value: "25", label: "Awards Won" },
      { value: "100%", label: "Satisfaction" },
    ],
    philosophy: {
      heading: "Our Philosophy",
      text: "We believe that every face tells a story. Our goal is to make you feel like the most confident version of yourself. Whether it\u2019s a soft, natural glow or a dramatic, smoky eye, we customize every look to suit your personality and occasion.",
      ctaText: "Book a Consultation",
    },
  };
}
