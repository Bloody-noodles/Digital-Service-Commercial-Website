export interface GadgetImage {
  src: string;
  alt: string;
}

export interface GadgetProduct {
  slug: string;
  name: string;
  category: string;
  description: string;
  images: GadgetImage[];
  affiliateUrl: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const gadgetCategories = [
  "Speakers",
  "Headphones & Earphones",
  "Power Banks",
  "Chargers & Cables",
  "Phone Accessories",
  "Smartwatches & Wearables",
  "Computer Accessories",
  "Home Electronics",
  "Gaming Accessories",
  "Storage & Connectivity",
] as const;

const temuAffiliateUrl = "https://temu.to/k/e9uu7t2whv5";
export const temuLinkNotice =
  "The Temu link opens a general affiliate destination and may not show this exact product. Check Temu for current listings and details.";

export const gadgetProducts: GadgetProduct[] = [
  {
    slug: "jbl-go-2",
    name: "JBL GO 2 Portable Bluetooth Speaker",
    category: "Speakers",
    description:
      "A compact, complete JBL portable speaker shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/speakers/jbl-go2-main.jpg",
        alt: "Front view of the complete JBL GO 2 portable Bluetooth speaker.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:JBL%20GO2%20Bluetooth%20speaker.jpeg",
  },
  {
    slug: "jbl-flip-portable-speaker",
    name: "JBL Flip Portable Bluetooth Speaker",
    category: "Speakers",
    description:
      "A complete portable JBL Flip speaker shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/speakers/jbl-flip.jpg",
        alt: "Complete JBL Flip portable Bluetooth speaker.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:JBL%20Flip%20bluetooth%20speaker.jpg",
  },
  {
    slug: "leto-bluetooth-speaker",
    name: "Leto Bluetooth Speaker",
    category: "Speakers",
    description:
      "A complete compact Bluetooth music speaker shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/speakers/leto-bluetooth-speaker.jpg",
        alt: "Complete cylindrical Leto Bluetooth music speaker.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Leto%20bluetooth%20speaker.jpg",
  },
  {
    slug: "anker-powercore-5000",
    name: "Anker PowerCore 5000 Power Bank",
    category: "Power Banks",
    description:
      "A complete Anker portable power bank shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/power-banks/anker-powercore-5000.jpg",
        alt: "Complete Anker PowerCore 5000 portable power bank.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:2023%20Powerbank%20Anker%20Powercore%205000mAh.jpg",
  },
  {
    slug: "xiaomi-portable-power-bank",
    name: "Xiaomi Portable Power Bank",
    category: "Power Banks",
    description:
      "A complete Xiaomi power bank shown charging a phone in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/power-banks/xiaomi-power-bank.jpg",
        alt: "Complete Xiaomi portable power bank connected to a smartphone.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC0 1.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Powerbank%20Xiaomi%2C%203.jpg",
  },
  {
    slug: "oraimo-portable-power-bank",
    name: "Oraimo Power Bank",
    category: "Power Banks",
    description:
      "A complete Oraimo-branded portable power bank shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/power-banks/oraimo-power-bank.jpg",
        alt: "Complete white Oraimo portable power bank.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oraimo_power_bank.jpg",
  },
  {
    slug: "romoss-portable-power-bank",
    name: "Romoss Portable Power Bank",
    category: "Power Banks",
    description:
      "A complete Romoss portable power bank shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/power-banks/romoss-sense-4-power-bank.jpg",
        alt: "Complete Romoss portable power bank beside a smartphone.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:A%20Romoss%20power%20bank-20210312.jpg",
  },
  {
    slug: "sony-wh-1000xm3",
    name: "Sony WH-1000XM3 Wireless Headphones",
    category: "Headphones & Earphones",
    description:
      "Sony WH-1000XM3 wireless headphones shown in their carrying case.",
    images: [
      {
        src: "/images/gadgets/headphones-earphones/sony-wh-1000xm3.jpg",
        alt: "Sony WH-1000XM3 wireless headphones in their carrying case.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sony-WH-1000XM3-kabellose-Bluetooth-Noise-Cancelling-Kopfhoerer.jpg",
  },
  {
    slug: "wireless-earbuds",
    name: "True Wireless Earbuds",
    category: "Headphones & Earphones",
    description:
      "A pair of complete wireless earbuds shown with their charging case.",
    images: [
      {
        src: "/images/gadgets/headphones-earphones/bluetooth-earphones.jpg",
        alt: "Complete pair of wireless earbuds with their charging case.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Bluetooth%20ear%20set.jpg",
  },
  {
    slug: "apple-usb-power-adapter",
    name: "Apple USB Power Adapter",
    category: "Chargers & Cables",
    description:
      "A complete Apple USB wall power adapter shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/apple-usb-charger.jpg",
        alt: "Complete Apple USB wall power adapter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Apple%20USB%20Charger%201%202017-02-02.jpg",
  },
  {
    slug: "portable-selfie-stick",
    name: "Portable Selfie Stick",
    category: "Phone Accessories",
    description:
      "A complete handheld selfie stick shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/portable-selfie-stick.jpg",
        alt: "Complete portable selfie stick with its handheld remote.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Portable%20Selfie%20Stick.jpg",
  },
  {
    slug: "fossil-q-smartwatch",
    name: "Fossil Q Venture Wear OS Smartwatch",
    category: "Smartwatches & Wearables",
    description:
      "A complete Fossil Q Venture smartwatch shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/wearables/android-wear-smartwatch.jpg",
        alt: "Fossil Q Venture smartwatch running Android Wear.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC0 1.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:AndroidWearSmartWatch.jpg",
  },
  {
    slug: "logitech-wireless-mouse",
    name: "Logitech Wireless Mouse",
    category: "Computer Accessories",
    description:
      "A complete Logitech wireless mouse shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/logitech-wireless-mouse.jpg",
        alt: "Complete Logitech wireless mouse.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Wireless%20mouse%20logi.jpg",
  },
  {
    slug: "logitech-k810-keyboard",
    name: "Logitech K810 Bluetooth Keyboard",
    category: "Computer Accessories",
    description:
      "A complete Logitech K810 Bluetooth keyboard shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/logitech-k810-keyboard.jpg",
        alt: "Complete Logitech K810 Bluetooth illuminated keyboard.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Logitech%20Bluetooth%20Illuminated%20Wireless%20Keyboard%20K810%20(13490950765).jpg",
  },
  {
    slug: "standing-fan",
    name: "Standing Electric Fan",
    category: "Home Electronics",
    description:
      "A complete standing table fan shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/home-electronics/table-fan.jpg",
        alt: "Complete standing electric fan on its base.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Table%20fan.jpg",
  },
  {
    slug: "mini-handheld-fan",
    name: "Mini Handheld Fan",
    category: "Home Electronics",
    description:
      "A complete compact handheld fan shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/home-electronics/mini-fan.jpg",
        alt: "Complete handheld mini fan with a small stand.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC0 1.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mini%20fan.jpg",
  },
  {
    slug: "xbox-one-wireless-controller",
    name: "Xbox One Wireless Controller",
    category: "Gaming Accessories",
    description:
      "A complete Xbox Controller S gamepad shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/xbox-one-controller.jpg",
        alt: "Complete Xbox One wireless game controller.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - Public domain",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Microsoft-Xbox-One-controller.jpg",
  },
  {
    slug: "kingston-usb-flash-drive",
    name: "Kingston DataTraveler 32 GB USB Flash Drive",
    category: "Storage & Connectivity",
    description:
      "A complete Kingston DataTraveler USB flash drive shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/kingston-usb-flash-drive.jpg",
        alt: "Complete Kingston DataTraveler 32 GB USB flash drive.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Kingston%20usb%2032gb%20datatraveler.JPG",
  },
  {
    slug: "sandisk-microsdxc-card",
    name: "SanDisk 64 GB microSDXC Memory Card",
    category: "Storage & Connectivity",
    description:
      "A SanDisk microSDXC memory card shown in a real product photograph.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/sandisk-microsd-card.jpg",
        alt: "SanDisk 64 GB microSDXC memory card.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Wikimedia Commons - CC BY-SA 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sandisk%20microSDXC%2064GB%20Ultra.jpg",
  },
];
