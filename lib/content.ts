export const contactEmail = "hello@forma.studio";

export type NavLink = {
  href: string;
  label: string;
  detail: string;
};

export type NavItem = {
  href: string;
  label: string;
  items: NavLink[];
};

export const nav: NavItem[] = [
  {
    href: "#work",
    label: "Work",
    items: [
      {
        href: "#work-website",
        label: "Website",
        detail: "A homepage that leads with the offer.",
      },
      {
        href: "#work-brand",
        label: "Brand",
        detail: "Type, color, and a small system.",
      },
    ],
  },
  {
    href: "#services",
    label: "Services",
    items: [
      {
        href: "#service-websites",
        label: "Websites",
        detail: "Custom sites for new and existing brands.",
      },
      {
        href: "#service-logos",
        label: "Logos",
        detail: "A mark that holds up small and large.",
      },
      {
        href: "#service-branding",
        label: "Branding",
        detail: "Identity from scratch, or a refresh.",
      },
      {
        href: "#service-digital",
        label: "Digital design",
        detail: "The work around the website and logo.",
      },
    ],
  },
  {
    href: "#approach",
    label: "Approach",
    items: [
      {
        href: "#principle-look-good",
        label: "Look good",
        detail: "Type, color, and composition with care.",
      },
      {
        href: "#principle-work-well",
        label: "Work well",
        detail: "Clear structure on a phone or a laptop.",
      },
      {
        href: "#principle-last",
        label: "Last",
        detail: "A point of view people remember.",
      },
      {
        href: "#approach-process",
        label: "How we work",
        detail: "Listen, shape, refine, hand off.",
      },
    ],
  },
  {
    href: "#contact",
    label: "Contact",
    items: [
      {
        href: "#contact-form",
        label: "Start a project",
        detail: "Tell us what you are making.",
      },
      {
        href: `mailto:${contactEmail}`,
        label: "Email the studio",
        detail: contactEmail,
      },
      {
        href: "#approach-new",
        label: "New businesses",
        detail: "A first website, logo, and brand.",
      },
      {
        href: "#approach-existing",
        label: "Existing brands",
        detail: "A refresh when the look no longer fits.",
      },
    ],
  },
];

export const services = [
  {
    id: "websites",
    number: "01",
    title: "Websites",
    kicker: "Custom website design",
    summary:
      "A site that introduces you clearly, holds up on a phone, and feels like it belongs to you.",
    detail:
      "We design professional, modern websites for new businesses and for brands ready for a cleaner public face. Structure, type, and pacing come first, so the page is easy to read and easy to trust.",
  },
  {
    id: "logos",
    number: "02",
    title: "Logos",
    kicker: "Logo creation",
    summary:
      "A mark people can recognize at the size of a favicon or the size of a storefront.",
    detail:
      "We draw logos with a point of view, then test them in type, in color, and in the small places a brand actually shows up. The aim is a mark that feels inevitable.",
  },
  {
    id: "branding",
    number: "03",
    title: "Branding",
    kicker: "Identity and refresh",
    summary:
      "Color, type, voice, and the few rules that keep the next piece looking like the last.",
    detail:
      "Starting from scratch or refreshing a brand that has outgrown its first look, we shape an identity you can keep using. It is tailored to the client, including the parts of the old brand worth keeping.",
  },
  {
    id: "digital",
    number: "04",
    title: "Digital design",
    kicker: "The work around the brand",
    summary:
      "Campaign pages, social systems, decks, and the other pieces a presence needs.",
    detail:
      "Beyond the website and the logo, we design the digital materials that carry the same idea into the rest of your week. Each one is made for the job, not pulled from a shared menu.",
  },
] as const;

export const principles = [
  {
    id: "look-good",
    title: "Look good",
    copy: "Composition, type, and color chosen with care, so the work feels confident before anyone reads a word.",
  },
  {
    id: "work-well",
    title: "Work well",
    copy: "Clear structure, readable type, and a path a visitor can follow on a phone or a laptop.",
  },
  {
    id: "last",
    title: "Last",
    copy: "A point of view people remember after they close the tab, and a system you can keep using.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Listen",
    copy: "What you are starting, who it is for, and what the current brand is no longer doing.",
  },
  {
    number: "02",
    title: "Shape",
    copy: "A few directions, then one strong recommendation we can both stand behind.",
  },
  {
    number: "03",
    title: "Refine",
    copy: "Type, layout, and the small decisions that make a design feel finished.",
  },
  {
    number: "04",
    title: "Hand off",
    copy: "A site, a logo, or a brand system, delivered so you can put it to work.",
  },
] as const;

export const projectTypes = [
  "Custom website",
  "Logo",
  "Branding",
  "Other digital design",
] as const;
