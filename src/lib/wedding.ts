/**
 * ═══════════════════════════════════════════════════════════
 * WEDDING INVITATION — EDITABLE CONTENT
 * Update this file to customize names, dates, venues, photos,
 * family, RSVP, and share links. No backend required.
 * ═══════════════════════════════════════════════════════════
 */

export const wedding = {
  seo: {
    title: "Karthik & Vyshnavi — Wedding Invitation",
    description:
      "You are cordially invited to celebrate the wedding of Karthik and Vyshnavi. Join us for an evening of love, laughter, and everlasting memories.",
    url: "https://karthikvaishnavi.tech",
    ogImage: "/images/og-cover.jpg",
  },

  couple: {
    partner1: "Karthik",
    partner2: "Vyshnavi",
    monogram: "K & V",
    tagline: "Two hearts. One forever.",
  },

  date: {
    /** ISO string used by countdown & formatting */
    iso: "2026-08-31T11:00:00+05:30",
    display: "Monday, 31 August 2026",
    time: "11:00 AM – 2:00 PM",
  },

  hero: {
    backgroundImage: "/images/hero.jpg",
    ctaLabel: "View Invitation",
    ctaHref: "#invite",
  },

  music: {
    src: "/music/KDVySong.mp4",
    label: "Kun Faya Kun",
  },

  invite: {
    greeting: "Dear Family & Friends",
    message:
      "With hearts full of joy and gratitude, we invite you to witness the beginning of our forever. Your presence will make our celebration complete as we exchange vows and step into a lifetime of love together.",
    closing: "With love,",
    signedBy: "Karthik & Vyshnavi",
  },

  events: [
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "Monday, 31 August 2026",
      time: "11:00 AM – 2:00 PM",
      venue: "Chakolas Pavilion",
      address: "North Kalamassery, HMT Kalamassery, Ernakulam",
      mapUrl: "https://maps.app.goo.gl/KBxA3bGN31eRKd647",
      icon: "heart" as const,
    },
  ],

  gallery: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Karthik and Vyshnavi — portrait",
      caption: "A quiet moment",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Karthik and Vyshnavi — outdoors",
      caption: "Under the trees",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Karthik and Vyshnavi — evening",
      caption: "Golden hour",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Karthik and Vyshnavi — candid",
      caption: "Laughter",
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Karthik and Vyshnavi — close-up",
      caption: "Forever starts here",
    },
    {
      src: "/images/gallery-7.jpg",
      alt: "Karthik and Vyshnavi — soft light",
      caption: "Soft light",
    },
    {
      src: "/images/gallery-8.jpg",
      alt: "Karthik and Vyshnavi — garden walk",
      caption: "Garden walk",
    },
    {
      src: "/images/gallery-9.jpg",
      alt: "Karthik and Vyshnavi — evening glow",
      caption: "Evening glow",
    },
    {
      src: "/images/gallery-10.jpg",
      alt: "Karthik and Vyshnavi — joy",
      caption: "Pure joy",
    },
    {
      src: "/images/gallery-11.jpg",
      alt: "Karthik and Vyshnavi — promise",
      caption: "The promise",
    },
  ],

  family: {
    intro: "The ones who made us who we are",
    sides: [
      {
        title: "Groom's Family",
        members: [
          { name: "Reji N", relation: "Father" },
          { name: "Deepa Reji", relation: "Mother" },
        ],
      },
      {
        title: "Bride's Family",
        members: [
          { name: "Sabu KP", relation: "Father" },
          { name: "Lekha PS", relation: "Mother" },
          { name: "Vivek KS", relation: "Brother" },
        ],
      },
    ],
  },

  rsvp: {
    title: "Will You Join Us?",
    subtitle:
      "We would be honoured by your presence. Kindly let us know by 15 August 2026.",
    phone: "+917994513284",
    email: "rsvp@karthikvaishnavi.tech",
    whatsappMessage:
      "Hello! I would like to RSVP for Karthik & Vyshnavi's wedding.",
  },

  share: {
    text: "You're invited to Karthik & Vyshnavi's wedding! 💍",
    /** Public site URL used in share links */
    url: "https://karthikvaishnavi.tech",
    instagramUrl: "https://www.instagram.com/",
  },
} as const;

export type WeddingConfig = typeof wedding;
