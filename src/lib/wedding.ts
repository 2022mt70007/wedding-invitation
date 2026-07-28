/**
 * ═══════════════════════════════════════════════════════════
 * WEDDING INVITATION — EDITABLE CONTENT
 * Kerala Hindu Royal style · Update names, dates, venues here
 * ═══════════════════════════════════════════════════════════
 */

export const wedding = {
  seo: {
    title: "Karthik & Vyshnavi — Kerala Wedding Invitation",
    description:
      "With the blessings of the Almighty, you are invited to the sacred wedding of Karthik and Vyshnavi — a Kerala Hindu celebration of love and tradition.",
    url: "https://karthikvaishnavi.tech",
    ogImage: "/images/og-cover.jpg",
  },

  couple: {
    partner1: "Karthik",
    partner2: "Vyshnavi",
    monogram: "K & V",
    tagline: "Blessed by tradition. United by love.",
  },

  date: {
    iso: "2026-12-12T10:00:00+05:30",
    display: "Saturday, 12 December 2026",
    time: "Muhurtham · 10:00 AM",
  },

  hero: {
    backgroundImage: "/images/hero.jpg",
    ctaLabel: "View Invitation",
    ctaHref: "#invite",
  },

  music: {
    src: "/music/KDVyshnavi.mp4",
    label: "Our wedding song",
  },

  invite: {
    greeting: "Namaskaram",
    message:
      "With the blessings of the Almighty and our elders, we joyfully invite you to grace the sacred muhurtham of our wedding. Your presence will complete our happiness as we begin this lifelong journey together, rooted in faith, family, and Kerala tradition.",
    closing: "With love & respect,",
    signedBy: "Karthik & Vyshnavi",
  },

  events: [
    {
      id: "wedding",
      title: "Muhurtham",
      date: "Saturday, 12 December 2026",
      time: "10:00 AM",
      venue: "Temple Mandapam",
      address: "Sree Krishna Temple Grounds, Thrissur, Kerala 680001",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Thrissur+Kerala+Temple",
      icon: "heart" as const,
    },
    {
      id: "reception",
      title: "Reception & Sadhya",
      date: "Saturday, 12 December 2026",
      time: "6:30 PM",
      venue: "Royal Banquet Hall",
      address: "Kasavu Heritage, MG Road, Kochi, Kerala 682011",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=MG+Road+Kochi+Kerala",
      icon: "sparkles" as const,
    },
  ],

  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Karthik and Vyshnavi — portrait", caption: "A quiet moment" },
    { src: "/images/gallery-2.jpg", alt: "Karthik and Vyshnavi — outdoors", caption: "Under the trees" },
    { src: "/images/gallery-3.jpg", alt: "Karthik and Vyshnavi — evening", caption: "Golden hour" },
    { src: "/images/gallery-4.jpg", alt: "Karthik and Vyshnavi — candid", caption: "Laughter" },
    { src: "/images/gallery-5.jpg", alt: "Karthik and Vyshnavi — close-up", caption: "Forever starts here" },
    { src: "/images/gallery-6.jpg", alt: "Karthik and Vyshnavi — together", caption: "Hand in hand" },
    { src: "/images/gallery-7.jpg", alt: "Karthik and Vyshnavi — soft light", caption: "Soft light" },
    { src: "/images/gallery-8.jpg", alt: "Karthik and Vyshnavi — garden walk", caption: "Garden walk" },
    { src: "/images/gallery-9.jpg", alt: "Karthik and Vyshnavi — evening glow", caption: "Evening glow" },
    { src: "/images/gallery-10.jpg", alt: "Karthik and Vyshnavi — joy", caption: "Pure joy" },
    { src: "/images/gallery-11.jpg", alt: "Karthik and Vyshnavi — promise", caption: "The promise" },
    { src: "/images/gallery-12.jpg", alt: "Karthik and Vyshnavi — forever", caption: "Always" },
    { src: "/images/gallery-13.jpg", alt: "Karthik and Vyshnavi — embrace", caption: "Embrace" },
    { src: "/images/gallery-14.jpg", alt: "Karthik and Vyshnavi — twilight", caption: "Twilight" },
    { src: "/images/gallery-15.jpg", alt: "Karthik and Vyshnavi — bloom", caption: "In bloom" },
    { src: "/images/gallery-16.jpg", alt: "Karthik and Vyshnavi — serenity", caption: "Serenity" },
    { src: "/images/gallery-17.jpg", alt: "Karthik and Vyshnavi — devotion", caption: "Devotion" },
    { src: "/images/gallery-18.jpg", alt: "Karthik and Vyshnavi — eternity", caption: "Eternity" },
  ],

  family: {
    intro: "With love and reverence to our families",
    sides: [
      {
        title: "Groom's Family",
        members: [
          { name: "Mr. & Mrs. Nair", relation: "Parents of the Groom" },
          { name: "Arjun Nair", relation: "Brother" },
          { name: "Priya Nair", relation: "Sister-in-law" },
        ],
      },
      {
        title: "Bride's Family",
        members: [
          { name: "Mr. & Mrs. Menon", relation: "Parents of the Bride" },
          { name: "Ananya Menon", relation: "Sister" },
          { name: "Rohan Menon", relation: "Brother" },
        ],
      },
    ],
  },

  rsvp: {
    title: "Will You Grace the Occasion?",
    subtitle:
      "We would be blessed by your presence. Kindly confirm by 1 November 2026.",
    phone: "+919876543210",
    email: "rsvp@karthikvaishnavi.tech",
    whatsappMessage:
      "Namaskaram! I would like to RSVP for Karthik & Vyshnavi's wedding.",
  },

  share: {
    text: "You're invited to Karthik & Vyshnavi's Kerala wedding!",
    url: "https://karthikvaishnavi.tech",
    instagramUrl: "https://www.instagram.com/",
  },
} as const;

export type WeddingConfig = typeof wedding;
