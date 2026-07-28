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
    tagline: "A love sealed in garnet and gold.",
  },

  date: {
    /** ISO string used by countdown & formatting */
    iso: "2026-12-12T18:30:00+05:30",
    display: "Saturday, 12 December 2026",
    time: "6:30 PM onwards",
  },

  hero: {
    backgroundImage: "/images/hero.jpg",
    ctaLabel: "View Invitation",
    ctaHref: "#invite",
  },

  music: {
    src: "/music/KDVyshnavi.mp4",
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
      date: "Saturday, 12 December 2026",
      time: "10:00 AM",
      venue: "Sacred Garden Mandap",
      address: "Green Meadows Resort, Shamshabad Road, Hyderabad 501218",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Shamshabad+Hyderabad+wedding+venue",
      icon: "heart" as const,
    },
    {
      id: "reception",
      title: "Reception",
      date: "Saturday, 12 December 2026",
      time: "6:30 PM",
      venue: "The Orchid Pavilion",
      address: "12 Rosewood Lane, Jubilee Hills, Hyderabad 500033",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Jubilee+Hills+Hyderabad",
      icon: "sparkles" as const,
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
      src: "/images/gallery-6.jpg",
      alt: "Karthik and Vyshnavi — together",
      caption: "Hand in hand",
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
    {
      src: "/images/gallery-12.jpg",
      alt: "Karthik and Vyshnavi — forever",
      caption: "Always",
    },
    {
      src: "/images/gallery-13.jpg",
      alt: "Karthik and Vyshnavi — embrace",
      caption: "Embrace",
    },
    {
      src: "/images/gallery-14.jpg",
      alt: "Karthik and Vyshnavi — twilight",
      caption: "Twilight",
    },
    {
      src: "/images/gallery-15.jpg",
      alt: "Karthik and Vyshnavi — bloom",
      caption: "In bloom",
    },
    {
      src: "/images/gallery-16.jpg",
      alt: "Karthik and Vyshnavi — serenity",
      caption: "Serenity",
    },
    {
      src: "/images/gallery-17.jpg",
      alt: "Karthik and Vyshnavi — devotion",
      caption: "Devotion",
    },
    {
      src: "/images/gallery-18.jpg",
      alt: "Karthik and Vyshnavi — eternity",
      caption: "Eternity",
    },
  ],

  family: {
    intro: "The ones who made us who we are",
    sides: [
      {
        title: "Groom's Family",
        members: [
          { name: "Mr. & Mrs. Sharma", relation: "Parents of the Groom" },
          { name: "Arjun Sharma", relation: "Brother" },
          { name: "Priya Sharma", relation: "Sister-in-law" },
        ],
      },
      {
        title: "Bride's Family",
        members: [
          { name: "Mr. & Mrs. Reddy", relation: "Parents of the Bride" },
          { name: "Ananya Reddy", relation: "Sister" },
          { name: "Rohan Reddy", relation: "Brother" },
        ],
      },
    ],
  },

  rsvp: {
    title: "Will You Join Us?",
    subtitle:
      "We would be honoured by your presence. Kindly let us know by 1 November 2026.",
    phone: "+919876543210",
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
