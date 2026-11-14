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
}

export const gadgetCategories = [
  "Power Banks",
  "Chargers",
  "Cables",
  "Earbuds",
  "Speakers",
  "Phone Accessories",
  "Smart Gadgets",
] as const;

const temuAffiliateUrl = "https://temu.to/k/e9uu7t2whv5";

export const gadgetProducts: GadgetProduct[] = [
  {
    slug: "portable-power-bank",
    name: "Portable Power Bank",
    category: "Power Banks",
    description:
      "A portable power bank for charging your mobile devices on the go. Check Temu for current product details and compatibility.",
    images: [
      {
        src: "/images/gadgets/portable-power-bank.jpg",
        alt: "Illustrative stock photo of a power bank; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "compact-fast-charging-adapter",
    name: "Compact Fast-Charging Adapter",
    category: "Chargers",
    description:
      "A compact charging adapter for everyday use. Check Temu for compatibility and product details.",
    images: [
      {
        src: "/images/gadgets/compact-fast-charging-adapter.jpg",
        alt: "Illustrative stock photo of charging adapters; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "usb-c-charging-cable",
    name: "USB-C Charging Cable",
    category: "Cables",
    description:
      "A USB-C charging cable. Check the Temu listing for connector details and compatible devices.",
    images: [
      {
        src: "/images/gadgets/usb-c-charging-cable.jpg",
        alt: "Illustrative stock photo of a charging cable; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "3-in-1-multi-charging-cable",
    name: "3-in-1 Multi-Charging Cable",
    category: "Cables",
    description:
      "A multi-charging cable for everyday use. Check Temu for connector and compatibility details.",
    images: [
      {
        src: "/images/gadgets/3-in-1-multi-charging-cable.jpg",
        alt: "Illustrative stock photo of a USB cable; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "tws-wireless-earbuds",
    name: "TWS Wireless Earbuds",
    category: "Earbuds",
    description:
      "Wireless earbuds for listening on the go. Check Temu for compatibility and product details.",
    images: [
      {
        src: "/images/gadgets/tws-wireless-earbuds.jpg",
        alt: "Illustrative stock photo of wireless earbuds; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "mini-bluetooth-speaker",
    name: "Mini Bluetooth Speaker",
    category: "Speakers",
    description:
      "A mini Bluetooth speaker. Check Temu for connection and product details.",
    images: [
      {
        src: "/images/gadgets/mini-bluetooth-speaker.jpg",
        alt: "Illustrative stock photo of a portable speaker; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "foldable-mobile-phone-stand",
    name: "Foldable Mobile Phone Stand",
    category: "Phone Accessories",
    description:
      "A foldable stand for positioning a mobile phone. Check Temu for product details.",
    images: [
      {
        src: "/images/gadgets/foldable-mobile-phone-stand.jpg",
        alt: "Illustrative stock photo of a phone stand; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "adjustable-car-phone-holder",
    name: "Adjustable Car Phone Holder",
    category: "Phone Accessories",
    description:
      "An adjustable holder for a phone in a vehicle. Check Temu for fit and product details.",
    images: [
      {
        src: "/images/gadgets/adjustable-car-phone-holder.jpg",
        alt: "Illustrative stock photo of a car phone holder; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "rechargeable-led-selfie-light",
    name: "Rechargeable LED Selfie Light",
    category: "Smart Gadgets",
    description:
      "A rechargeable LED light for selfies and content capture. Check Temu for product details.",
    images: [
      {
        src: "/images/gadgets/rechargeable-led-selfie-light.jpg",
        alt: "Illustrative stock photo showing a phone ring light; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
  {
    slug: "portable-phone-cooling-fan",
    name: "Portable Phone Cooling Fan",
    category: "Smart Gadgets",
    description:
      "A portable cooling fan for phone use. Check Temu for fit and compatibility details.",
    images: [
      {
        src: "/images/gadgets/portable-phone-cooling-fan.jpg",
        alt: "Illustrative stock photo of a phone with cooling fans; not the exact Temu product",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
  },
];
