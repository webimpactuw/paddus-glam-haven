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
      "Prerana Annapantula, the artist behind Paddu's Glam Haven, has been passionate about dance and makeup from a very young age - dancing before she could even walk. Her love for makeup began through classical dance, where she first learned to do her own makeup and soon became the go-to artist in greenrooms for fellow dancers as well.",
      "Since middle school Prerana has specialized in classical dance makeup and has done on to work on multple Rangapraveshams, performances, and bridal events.",
    ],
    stats: [
      { value: "12+", label: "Years Experience" },
      { value: "500+", label: "Happy Brides" },
      { value: "25", label: "Awards Won" },
      { value: "100%", label: "Satisfaction" },
    ],
    philosophy: {
      heading: "Her Philosophy",
      text: "Makeup has always been more than just beauty to her - it's a passion, an art form, and a way to help oothers feel confident and celebrated during their special moments.",
      ctaText: "Book a Consultation",
    },
  };
}
