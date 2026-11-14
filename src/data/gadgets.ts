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
  "Headphones \u0026 Earphones",
  "Power Banks",
  "Chargers \u0026 Cables",
  "Phone Accessories",
  "Smartwatches \u0026 Wearables",
  "Computer Accessories",
  "Home Electronics",
  "Gaming Accessories",
  "Storage \u0026 Connectivity",
] as const;

const temuAffiliateUrl = "https://temu.to/k/e9uu7t2whv5";
export const temuLinkNotice =
  "The Temu link opens a general affiliate destination and may not show this exact product. Check Temu for current listings and details.";

export const gadgetProducts: GadgetProduct[] = [
  {
    slug: "adafruit-3369",
    name: "Mini External USB Stereo Speaker",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/3369.jpg",
        alt: "Small, black, oval USB speaker plugged with bundled cable.",
      },
      {
        src: "/images/gadgets/speakers/3369-2.jpg",
        alt: "Small, black, oval USB speaker plugged into a laptop.",
      },
      {
        src: "/images/gadgets/speakers/3369-3.jpg",
        alt: "Small, black, oval USB speaker plugged into a Raspberry Pi computer.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3369",
  },
  {
    slug: "adafruit-1732",
    name: "20W 4 Ohm Full Range Speaker",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/1732.jpg",
        alt: "Large 20W 4 Ohm Full Range Speaker",
      },
      {
        src: "/images/gadgets/speakers/1732-2.jpg",
        alt: "Angle detail of speaker showing height",
      },
      {
        src: "/images/gadgets/speakers/1732-3.jpg",
        alt: "Top of speaker with grill (Black Accent Color)",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1732",
  },
  {
    slug: "adafruit-1669",
    name: "Stereo Enclosed Speaker Set - 3W 4 Ohm",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/1669.jpg",
        alt: "Rectangular Stereo Enclosed Speaker Set with JST cable",
      },
      {
        src: "/images/gadgets/speakers/1669-2.jpg",
        alt: "Close up of one speaker, next to quarter",
      },
      {
        src: "/images/gadgets/speakers/1669-3.jpg",
        alt: "Top down detail of one speaker",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1669",
  },
  {
    slug: "adafruit-3351",
    name: "Mono Enclosed Speaker - 3W 4 Ohm",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/3351.jpg",
        alt: "Enclosed Speaker with JST cable",
      },
      {
        src: "/images/gadgets/speakers/3351-2.jpg",
        alt: "Close up of speaker, next to quarter",
      },
      {
        src: "/images/gadgets/speakers/3351-3.jpg",
        alt: "Back detail of speaker",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3351",
  },
  {
    slug: "adafruit-5304",
    name: "Meditation Chanting Prayer Speaker Box",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/5304.jpg",
        alt: "Angled shot of black speaker box with Chinese characters.",
      },
      {
        src: "/images/gadgets/speakers/5304-2.jpg",
        alt: "Back of black speaker box featuring the battery compartment.",
      },
      {
        src: "/images/gadgets/speakers/5304-3.jpg",
        alt: "Side detail of speaker box, featuring the volume wheel, headphone jack, and power port.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5304",
  },
  {
    slug: "adafruit-5986",
    name: "Mono Enclosed Speaker - 1W 8 Ohm",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/5986.jpg",
        alt: "Angel Shot of the Mono Enclosed Speaker - 1W 8 Ohm",
      },
      {
        src: "/images/gadgets/speakers/5986-2.jpg",
        alt: "Side Profile Shot of the Mono Enclosed Speaker - 1W 8 Ohm",
      },
      {
        src: "/images/gadgets/speakers/5986-3.jpg",
        alt: "Top Down Back Shot of the Mono Enclosed Speaker - 1W 8 Ohm",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5986",
  },
  {
    slug: "adafruit-4227",
    name: "Mini Oval Speaker with Short Wires - 8 Ohm 1 Watt",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/4227.jpg",
        alt: "Mini Oval Speaker with Short Wires ",
      },
      {
        src: "/images/gadgets/speakers/4227-2.jpg",
        alt: "Speaker with sticker cover removed",
      },
      {
        src: "/images/gadgets/speakers/4227-3.jpg",
        alt: "Top of speaker detail.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4227",
  },
  {
    slug: "adafruit-3968",
    name: "Speaker - 40mm Diameter - 4 Ohm 5 Watt",
    category: "Speakers",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/speakers/3968.jpg",
        alt: "Angled Shot of the Speaker - 40mm Diameter - 4 Ohm 3 Watt.",
      },
      {
        src: "/images/gadgets/speakers/3968-2.jpg",
        alt: "Top Down Front Shot of the Speaker - 40mm Diameter - Ohm 3 Watt.",
      },
      {
        src: "/images/gadgets/speakers/3968-3.jpg",
        alt: "Top Down Back Shot of the Speaker - 40mm Diameter next to U.S Quarter for Scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3968",
  },
  {
    slug: "adafruit-1966",
    name: "Cell-phone TRRS Headset - Earbud Headphones w/ Microphone",
    category: "Headphones \u0026 Earphones",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/headphones-earphones/1966.jpg",
        alt: "Cell-phone TRRS Headset - Earbud Headphones with Microphone",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1966",
  },
  {
    slug: "adafruit-353",
    name: "Lithium Ion Battery Pack - 3.7V 6600mAh",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/353.jpg",
        alt: "Lithium Ion Battery Pack with three round cells 3.7V 6600mAh with JST PH connector",
      },
      {
        src: "/images/gadgets/power-banks/353-2.jpg",
        alt: "Battery pack next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/353",
  },
  {
    slug: "adafruit-354",
    name: "Lithium Ion Battery Pack - 3.7V 4400mAh",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/354.jpg",
        alt: "Angled Shot of the Lithium Ion Battery Pack - 3.7V 4400mAh",
      },
      {
        src: "/images/gadgets/power-banks/354-2.jpg",
        alt: "Top Down Shot of the Lithium Ion Battery Pack - 3.7V 4400mAh",
      },
      {
        src: "/images/gadgets/power-banks/354-3.jpg",
        alt: "Close Up Shot of the 2pin JST Connector to the Lithium Ion Battery Pack - 3.7V 4400mAh",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/354",
  },
  {
    slug: "adafruit-1959",
    name: "USB Battery Pack - 2200 mAh Capacity - 5V 1A Output",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/1959.jpg",
        alt: "Angled Shot (1) of the USB Battery Pack - 2200 mAh Capacity - 5V 1A Output.",
      },
      {
        src: "/images/gadgets/power-banks/1959-2.jpg",
        alt: "Demo Shot of the USB Battery Pack - 2200 mAh Capacity - 5V 1A Output.",
      },
      {
        src: "/images/gadgets/power-banks/1959-3.jpg",
        alt: "Angled Shot (2) of the USB Battery Pack - 2200 mAh Capacity - 5V 1A Output.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1959",
  },
  {
    slug: "adafruit-1565",
    name: "USB Battery Pack for Raspberry Pi - 5000mAh - 5V @ 2.1A",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/1565.jpg",
        alt: "Angled shot of a USB Battery Pack for Raspberry Pi - 5000mAh - 5V @ 2.1A.",
      },
      {
        src: "/images/gadgets/power-banks/1565-2.jpg",
        alt: "USB port and power port on white rectangular USB battery pack.",
      },
      {
        src: "/images/gadgets/power-banks/1565-3.jpg",
        alt: "Side detail of white rectangular USB battery pack featuring the power button",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1565",
  },
  {
    slug: "adafruit-1566",
    name: "USB Battery Pack for Raspberry Pi - 10000mAh - 2 x 5V outputs",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/1566.jpg",
        alt: "Angled shot of white rectangular USB battery pack with 4 dotted lights indicating battery is fully charged. ",
      },
      {
        src: "/images/gadgets/power-banks/1566-2.jpg",
        alt: "Side detail of white rectangular USB battery pack featuring the power button.",
      },
      {
        src: "/images/gadgets/power-banks/1566-3.jpg",
        alt: "Angled shot of white rectangular USB battery pack",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1566",
  },
  {
    slug: "adafruit-4288",
    name: "USB Li-Ion Power Bank with 2 x 5V Outputs @ 2.1A - 5000mAh",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/4288.jpg",
        alt: "Angled shot of a USB Li-Ion Power Bank with 2 x 5V Outputs @ 2.1A - 5000mAh.",
      },
      {
        src: "/images/gadgets/power-banks/4288-2.jpg",
        alt: "Reversed angled shot of white rectangular USB battery pack with 4 dotted lights indicating battery is fully charged. ",
      },
      {
        src: "/images/gadgets/power-banks/4288-3.jpg",
        alt: "Top view of white rectangular USB battery pack.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4288",
  },
  {
    slug: "adafruit-962",
    name: "USB Battery Pack for Raspberry Pi - 3300mAh - 5V @ 1A and 500mA",
    category: "Power Banks",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/power-banks/962.jpg",
        alt: "Angled shot of a silver rectangular USB battery pack.",
      },
      {
        src: "/images/gadgets/power-banks/962-2.jpg",
        alt: "A smart phone plugged into a USB battery pack.",
      },
      {
        src: "/images/gadgets/power-banks/962-3.jpg",
        alt: "A silver rectangular USB battery pack powering a mini wireless keyboard, a green microcontroller, and a full-size breadboard with graphic display breakout.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/962",
  },
  {
    slug: "adafruit-276",
    name: "5V 2A (2000mA) switching power supply - UL Listed",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/276.jpg",
        alt: "Angled shot of power supply.",
      },
      {
        src: "/images/gadgets/chargers-cables/276-2.jpg",
        alt: "Close-up of barrel jack on cable.",
      },
      {
        src: "/images/gadgets/chargers-cables/276-3.jpg",
        alt: "Overhead shot of power supply cable with US quarter for scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/276",
  },
  {
    slug: "adafruit-501",
    name: "5V 1A (1000mA) USB port power supply - UL Listed",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/501.jpg",
        alt: "Angled Shot of the 5V 1A (1000mA) USB port power supply - UL Listed (Plug End).",
      },
      {
        src: "/images/gadgets/chargers-cables/501-2.jpg",
        alt: "Side Profile Shot of the Info Label on the 5V 1A (1000mA) USB port power supply.",
      },
      {
        src: "/images/gadgets/chargers-cables/501-3.jpg",
        alt: "Angled Shot of the 5V 1A (1000mA) USB port power supply (USB-A Port End)",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/501",
  },
  {
    slug: "adafruit-1994",
    name: "5V 2A Switching Power Supply w/ USB-A Connector",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/1994.jpg",
        alt: "5V 2A Switching Power Supply with  USB-A Connector",
      },
      {
        src: "/images/gadgets/chargers-cables/1994-2.jpg",
        alt: "Close up of USB A port",
      },
      {
        src: "/images/gadgets/chargers-cables/1994-3.jpg",
        alt: "Close up of label showing UL and FCC logos",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1994",
  },
  {
    slug: "adafruit-1995",
    name: "5V 2.5A Switching Power Supply with 20AWG MicroUSB Cable",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/1995.jpg",
        alt: "MicroUSB power supply with bundled cable and U.S. plugs.",
      },
      {
        src: "/images/gadgets/chargers-cables/1995-2.jpg",
        alt: "MicroUSB power supply with bundled cable and U.S. plugs connected to a Raspberry Pi computer.",
      },
      {
        src: "/images/gadgets/chargers-cables/1995-3.jpg",
        alt: "Top Down Plug Shot of the 5V 2.5A Switching Power Supply next to a U.S. Quarter for Scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1995",
  },
  {
    slug: "adafruit-2297",
    name: "5V 2A Power Supply w/ 20AWG 6\u0027 MicroUSB Cable - International",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/2297.jpg",
        alt: "5V 2A Power Supply with 20AWG 6\u0027 MicroUSB Cable and International Plug set",
      },
      {
        src: "/images/gadgets/chargers-cables/2297-2.jpg",
        alt: "Power supply with Euro connector and USB side plugged into Raspberry Pi",
      },
      {
        src: "/images/gadgets/chargers-cables/2297-3.jpg",
        alt: "Close up of UK power plug",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2297",
  },
  {
    slug: "adafruit-1448",
    name: "Compact Switching Power Supply - Selectable Output 3-12VDC",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/1448.jpg",
        alt: "Angle Shot of the Compact Switching Power Supply - Selectable Output 3-12VDC",
      },
      {
        src: "/images/gadgets/chargers-cables/1448-2.jpg",
        alt: "Top Down Close Up Shot of Plug Voltage Switch with 3V, 5V, 6V, 7.5V, 9V and 12V",
      },
      {
        src: "/images/gadgets/chargers-cables/1448-3.jpg",
        alt: "Close Up Shot of the Swappable Connector Port.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1448",
  },
  {
    slug: "adafruit-3438",
    name: "USB Extension Cable with Data/Charge Sync Switch",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/3438.jpg",
        alt: "Angled shot of 9.5 inch long USB-A extension cable with data/charge sync switch",
      },
      {
        src: "/images/gadgets/chargers-cables/3438-2.jpg",
        alt: "Top down photo of  9.5 inch long USB-A extension cable with data/charge sync switch.",
      },
      {
        src: "/images/gadgets/chargers-cables/3438-3.jpg",
        alt: "Detail of Data/Charge Sync Switch",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3438",
  },
  {
    slug: "adafruit-3419",
    name: "Right Angle Extension USB Cable - A Male to A Female",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/3419.jpg",
        alt: "Right Angle Extension USB Cable with A Male to A Female",
      },
      {
        src: "/images/gadgets/chargers-cables/3419-2.jpg",
        alt: "Cable next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3419",
  },
  {
    slug: "adafruit-260",
    name: "USB cable - A/MiniB",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/260.jpg",
        alt: "USB cable with Type A and Mini B ends",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/260",
  },
  {
    slug: "adafruit-1099",
    name: "USB OTG Host Cable - MicroB OTG male to A female",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/1099.jpg",
        alt: "USB OTG Host Cable with Micro B OTG male to A female in black",
      },
      {
        src: "/images/gadgets/chargers-cables/1099-2.jpg",
        alt: "Cable next to quarter",
      },
      {
        src: "/images/gadgets/chargers-cables/1099-3.jpg",
        alt: "Detail shot of both cable ends",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1099",
  },
  {
    slug: "adafruit-3610",
    name: 'Micro USB to Micro USB OTG Cable - 10-12" / 25-30cm long',
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/3610.jpg",
        alt: "Micro USB to Micro USB OTG Cable",
      },
      {
        src: "/images/gadgets/chargers-cables/3610-2.jpg",
        alt: "Close up of micro USB end",
      },
      {
        src: "/images/gadgets/chargers-cables/3610-3.jpg",
        alt: "cable next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3610",
  },
  {
    slug: "adafruit-4111",
    name: "Fully Reversible Pink/Purple USB A to micro B Cable - 1m long",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/4111.jpg",
        alt: "Fully Reversible Pink/Purple USB A to micro B Cable",
      },
      {
        src: "/images/gadgets/chargers-cables/4111-2.jpg",
        alt: "Close up of USB Type A end",
      },
      {
        src: "/images/gadgets/chargers-cables/4111-3.jpg",
        alt: "Close up of USB micro B end",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4111",
  },
  {
    slug: "adafruit-6369",
    name: "Slim Right Angle USB C to USB C Cable - 75mm - Opposite Plugs",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/6369.jpg",
        alt: "Angled shot of a small, slim, 75mm long right angle USB C to USB C cable.",
      },
      {
        src: "/images/gadgets/chargers-cables/6369-2.jpg",
        alt: "Overhead shot of a small, slim, 75mm long right angle USB C to USB C cable.",
      },
      {
        src: "/images/gadgets/chargers-cables/6369-3.jpg",
        alt: "75mm long slim, right angle USB C to USB C cable with U.S. quarter for scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/6369",
  },
  {
    slug: "adafruit-6370",
    name: "Slim Right Angle USB C to USB C Cable - 100mm",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/6370.jpg",
        alt: "Angled shot of a small, slim, 100mm long right angle USB C to USB C cable.",
      },
      {
        src: "/images/gadgets/chargers-cables/6370-2.jpg",
        alt: "Overhead shot of a slim, 100mm long right angle USB C to USB C cable.",
      },
      {
        src: "/images/gadgets/chargers-cables/6370-3.jpg",
        alt: "100mm long slim, right angle USB C to USB C cable with U.S. quarter for scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/6370",
  },
  {
    slug: "adafruit-1197",
    name: 'USB cable - 8" A to Mini B Charging and Micro B Data',
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/1197.jpg",
        alt: "USB cable with Type A to Mini B Charging and Micro B Data",
      },
      {
        src: "/images/gadgets/chargers-cables/1197-2.jpg",
        alt: "Cable next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1197",
  },
  {
    slug: "adafruit-1620",
    name: "USB Cable with Switch",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/1620.jpg",
        alt: "Short USB Extender Cable with Switch in center",
      },
      {
        src: "/images/gadgets/chargers-cables/1620-2.jpg",
        alt: "Cable between Raspberry Pi and power supply",
      },
      {
        src: "/images/gadgets/chargers-cables/1620-3.jpg",
        alt: "Cable next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1620",
  },
  {
    slug: "adafruit-2185",
    name: "USB A/Micro Cable - 2m",
    category: "Chargers \u0026 Cables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/chargers-cables/2185.jpg",
        alt: "USB Cable with Type A and Micro B ends",
      },
      {
        src: "/images/gadgets/chargers-cables/2185-2.jpg",
        alt: "Close-up of USB micro B connector on cable.",
      },
      {
        src: "/images/gadgets/chargers-cables/2185-3.jpg",
        alt: "Close-up of USB A connector on cable.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2185",
  },
  {
    slug: "adafruit-1235",
    name: "Flowing Effect iOS Dock Data+Charging Cable - White w/Aqua EL",
    category: "Phone Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/1235.jpg",
        alt: "Lit up USB cable between computer and iPhone - White w/Aqua. ",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1235",
  },
  {
    slug: "adafruit-1236",
    name: "Flowing Effect iOS Dock Data+Charging Cable - Black w/Aqua EL",
    category: "Phone Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/1236.jpg",
        alt: "Lit up USB cable between computer and iPhone - Black w/Aqua.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1236",
  },
  {
    slug: "adafruit-1237",
    name: "Flowing Effect iOS Lightning  Cable - White w/Aqua EL",
    category: "Phone Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/1237.jpg",
        alt: "Lit up USB cable to lightening between computer and iPhone.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1237",
  },
  {
    slug: "adafruit-1238",
    name: "Flowing Effect iOS Lightning Cable - Black w/Aqua EL",
    category: "Phone Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/1238.jpg",
        alt: "Lit up USB cable to lightening between computer and iPhone - Black w/Aqua",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1238",
  },
  {
    slug: "adafruit-1472",
    name: "CHARGECARD Thin Lightning Cable for iPhone 5",
    category: "Phone Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/1472.jpg",
        alt: "Business card that turns into a USB charging cable to Lightning Cable.",
      },
      {
        src: "/images/gadgets/phone-accessories/1472-2.jpg",
        alt: "ChargeCARD charging phone from laptop",
      },
      {
        src: "/images/gadgets/phone-accessories/1472-3.jpg",
        alt: "ChargeCARD inserted into wallet",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1472",
  },
  {
    slug: "adafruit-1514",
    name: "USB 3-Way Charging Cable - iPhone 5/iPhone/iPad and MicroUSB",
    category: "Phone Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/phone-accessories/1514.jpg",
        alt: "USB 3-Way Charging Cable - With Type A, iPhone 5/iPhone/iPad and Micro USB ends",
      },
      {
        src: "/images/gadgets/phone-accessories/1514-2.jpg",
        alt: "Close up of lightening, 30-pin and micro B ends",
      },
      {
        src: "/images/gadgets/phone-accessories/1514-3.jpg",
        alt: "Close up of Type A end",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1514",
  },
  {
    slug: "adafruit-5427",
    name: "Espruino Bangle.js v2 - Hackable Javascript Smart Watch",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/5427.jpg",
        alt: "Angled shot of electronic watch.",
      },
      {
        src: "/images/gadgets/wearables/5427-2.jpg",
        alt: "Top view of watch parts disassembled with charging cable.",
      },
      {
        src: "/images/gadgets/wearables/5427-3.jpg",
        alt: "Front of watch.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5427",
  },
  {
    slug: "adafruit-4811",
    name: "Bangle.js - Hackable Javascript Smart Watch",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/4811.jpg",
        alt: "Close up of the watch face powered on and displaying the time",
      },
      {
        src: "/images/gadgets/wearables/4811-2.jpg",
        alt: "Watch shown on it\u0027s side with watch band attached",
      },
      {
        src: "/images/gadgets/wearables/4811-3.jpg",
        alt: "Watch shown from the back",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4811",
  },
  {
    slug: "adafruit-1224",
    name: "TIMESQUARE DIY Watch Kit - Lime Display Matrix",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/1224.jpg",
        alt: "8x8 matrix display showing moon phase",
      },
      {
        src: "/images/gadgets/wearables/1224-2.jpg",
        alt: "8x8 matrix display showing battery level",
      },
      {
        src: "/images/gadgets/wearables/1224-3.jpg",
        alt: "Watch with binary clock display",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1224",
  },
  {
    slug: "adafruit-1225",
    name: "TIMESQUARE DIY Watch Kit - Blue Display Matrix",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/1225.jpg",
        alt: "8x8 matrix display showing moon phase",
      },
      {
        src: "/images/gadgets/wearables/1225-2.jpg",
        alt: "8x8 matrix display showing battery level",
      },
      {
        src: "/images/gadgets/wearables/1225-3.jpg",
        alt: "Watch with binary clock display",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1225",
  },
  {
    slug: "adafruit-1223",
    name: "TIMESQUARE DIY Watch Kit - Tangerine Display Matrix",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/1223.jpg",
        alt: "8x8 matrix display showing moon phase",
      },
      {
        src: "/images/gadgets/wearables/1223-2.jpg",
        alt: "8x8 matrix display showing battery level",
      },
      {
        src: "/images/gadgets/wearables/1223-3.jpg",
        alt: "Watch with binary clock display",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1223",
  },
  {
    slug: "adafruit-1226",
    name: "TIMESQUARE DIY Watch Kit - White Display Matrix",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/1226.jpg",
        alt: "8x8 matrix display showing battery level",
      },
      {
        src: "/images/gadgets/wearables/1226-2.jpg",
        alt: "8x8 matrix display showing moon phase",
      },
      {
        src: "/images/gadgets/wearables/1226-3.jpg",
        alt: "Watch with binary clock display",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1226",
  },
  {
    slug: "adafruit-1106",
    name: "TIMESQUARE DIY Watch Kit - Red Display Matrix",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/1106.jpg",
        alt: "8x8 matrix display showing moon phase",
      },
      {
        src: "/images/gadgets/wearables/1106-2.jpg",
        alt: "still of scrolling time displayed on watch",
      },
      {
        src: "/images/gadgets/wearables/1106-3.jpg",
        alt: "Unlit watch showing 8x8 matrix",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1106",
  },
  {
    slug: "adafruit-950",
    name: "Solder:Time II DIY watch kit",
    category: "Smartwatches \u0026 Wearables",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/wearables/950.jpg",
        alt: "Arm with large round watch with dot matrix display showing time",
      },
      {
        src: "/images/gadgets/wearables/950-2.jpg",
        alt: "Unassembled kit shot with PCB, enclosure and loose parts.",
      },
      {
        src: "/images/gadgets/wearables/950-3.jpg",
        alt: "Arm with large round watch with dot matrix display unlit",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/950",
  },
  {
    slug: "adafruit-1736",
    name: "Mini Chiclet Keyboard - USB Wired - Black",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/1736.jpg",
        alt: "Angled shot of a Black woman\u0027s silver-blue manicured hands on a slim, black keyboard.",
      },
      {
        src: "/images/gadgets/computer-accessories/1736-2.jpg",
        alt: "Overhead shot of black, USB-wired keyboard .",
      },
      {
        src: "/images/gadgets/computer-accessories/1736-3.jpg",
        alt: "Black, USB-wired keyboard connected to a green microcontroller.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1736",
  },
  {
    slug: "adafruit-1738",
    name: "Wireless Keyboard and Mouse Combo - One USB Port!",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/1738.jpg",
        alt: "Angled Shot of the Black Wireless Keyboard and Mouse Combo with One USB Port!",
      },
      {
        src: "/images/gadgets/computer-accessories/1738-2.jpg",
        alt: "Angled Shot of the Wireless Keyboard.",
      },
      {
        src: "/images/gadgets/computer-accessories/1738-3.jpg",
        alt: "Angled Shot of the Wireless Mouse.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1738",
  },
  {
    slug: "adafruit-4112",
    name: "Official Raspberry Pi Keyboard - Black and Gray",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/4112.jpg",
        alt: "Raspberry Pi Keyboard - Black and Gray",
      },
      {
        src: "/images/gadgets/computer-accessories/4112-2.jpg",
        alt: "Angled shot of the Raspberry Pi Keyboard - Black and Gray",
      },
      {
        src: "/images/gadgets/computer-accessories/4112-3.jpg",
        alt: "Front shot of the keyboard next to USB cable",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4112",
  },
  {
    slug: "adafruit-4113",
    name: "Official Raspberry Pi USB Optical Mouse - Black and Gray",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/4113.jpg",
        alt: "Angled shot of a black-and-gray-blue optical mouse with USB-A cable.",
      },
      {
        src: "/images/gadgets/computer-accessories/4113-2.jpg",
        alt: "Overhead shot of a black-and-gray-blue optical mouse with USB-A cable.",
      },
      {
        src: "/images/gadgets/computer-accessories/4113-3.jpg",
        alt: "Side profile shot of a black-and-gray-blue optical mouse.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4113",
  },
  {
    slug: "adafruit-6458",
    name: "Official Raspberry Pi Mouse 2 - Black",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/6458.jpg",
        alt: "Angled Sot of the Official Raspberry Pi Mouse 2 - Black.",
      },
      {
        src: "/images/gadgets/computer-accessories/6458-2.jpg",
        alt: "Top Down Top Shot of the Official Raspberry Pi Mouse 2.",
      },
      {
        src: "/images/gadgets/computer-accessories/6458-3.jpg",
        alt: "Side Profile Shot of the Official Raspberry Pi Mouse 2.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/6458",
  },
  {
    slug: "adafruit-3600",
    name: '10" Bluetooth Keyboard – Black',
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/3600.jpg",
        alt: '10" Bluetooth Keyboard Ã¢â‚¬â€œ Black colored',
      },
      {
        src: "/images/gadgets/computer-accessories/3600-2.jpg",
        alt: "Angled shot of the Black Bluetooth Keyboard",
      },
      {
        src: "/images/gadgets/computer-accessories/3600-3.jpg",
        alt: "Front shot of Bluetooth keyboard along with USB charging cable",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3600",
  },
  {
    slug: "adafruit-3601",
    name: "Yichip Micro Mini Bluetooth® Keyboard – Black",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/3601.jpg",
        alt: "Mini Bluetooth Keyboard Ã¢â‚¬â€œ Black colored",
      },
      {
        src: "/images/gadgets/computer-accessories/3601-2.jpg",
        alt: "Angle shot of Mini Bluetooth Keyboard Ã¢â‚¬â€œ Black",
      },
      {
        src: "/images/gadgets/computer-accessories/3601-3.jpg",
        alt: "Mini Bluetooth Keyboard next to  USB charging cable",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3601",
  },
  {
    slug: "adafruit-2876",
    name: "Full Size Wireless Keyboard with Trackpad",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/2876.jpg",
        alt: "Full Size Wireless Keyboard with Trackpad connected to Raspberry Pi",
      },
      {
        src: "/images/gadgets/computer-accessories/2876-2.jpg",
        alt: "Angled shot of full sized wireless keyboard with Trackpad.",
      },
      {
        src: "/images/gadgets/computer-accessories/2876-3.jpg",
        alt: "Full sized wireless keyboard along side a USB -C cable to charge, and a wireless receiver.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2876",
  },
  {
    slug: "adafruit-3398",
    name: "Keyboard with Blue-type Mechanical Switches and LED Backlights",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/3398.jpg",
        alt: "Angled shot of keyboard with mechanical switches and LED backlights.",
      },
      {
        src: "/images/gadgets/computer-accessories/3398-2.jpg",
        alt: "Topdown shot of mechanical keyboard with charging cable next to US quarter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3398",
  },
  {
    slug: "adafruit-2025",
    name: "USB Wired Mouse - Two Buttons plus Wheel",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/2025.jpg",
        alt: "Angled Shot of the USB Wired Mouse - Two Buttons plus Wheel",
      },
      {
        src: "/images/gadgets/computer-accessories/2025-2.jpg",
        alt: "Top Down Top Shot of the USB Wired Mouse - Two Buttons plus Wheel.",
      },
      {
        src: "/images/gadgets/computer-accessories/2025-3.jpg",
        alt: "Side Profile Shot of the USB Wired Mouse - Two Buttons plus Wheel.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2025",
  },
  {
    slug: "adafruit-1737",
    name: "Mini Wireless Keyboard - Black w/ Batteries",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/1737.jpg",
        alt: "Angled shot Mini Wireless Keyboard - Black w/ Batteries",
      },
      {
        src: "/images/gadgets/computer-accessories/1737-2.jpg",
        alt: "Front shot Mini Wireless Keyboard - Black w/ Batteries",
      },
      {
        src: "/images/gadgets/computer-accessories/1737-3.jpg",
        alt: "Mini Keyboard with the back cover removed revealing the batteries inside",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1737",
  },
  {
    slug: "adafruit-5061",
    name: "Medium Panel Mount USB Trackpad with Three Buttons",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/5061.jpg",
        alt: "Angled shot of a Medium Panel Mount USB Trackpad with Three Buttons.",
      },
      {
        src: "/images/gadgets/computer-accessories/5061-2.jpg",
        alt: "Top view of USB wired trackpad.",
      },
      {
        src: "/images/gadgets/computer-accessories/5061-3.jpg",
        alt: " Bottom of USB wired trackpad next to US Quarter for scale. The PCB and circuitry are exposed.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5061",
  },
  {
    slug: "adafruit-5062",
    name: "Mini Panel Mount USB Trackpad with Two Buttons",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/5062.jpg",
        alt: "Angled shot of Mini Panel Mount USB Trackpad with Two Buttons.",
      },
      {
        src: "/images/gadgets/computer-accessories/5062-2.jpg",
        alt: "Top view of USB wired trackpad.",
      },
      {
        src: "/images/gadgets/computer-accessories/5062-3.jpg",
        alt: " Bottom of USB wired trackpad next to US Quarter for scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5062",
  },
  {
    slug: "adafruit-5733",
    name: "Ultra Tiny USB Webcam Camera with GC0307 Sensor",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/5733.jpg",
        alt: "GC0307 USB camera",
      },
      {
        src: "/images/gadgets/computer-accessories/5733-2.jpg",
        alt: "Demo pic of a USB camera connected to a laptop. It captures a friendly robot on the screen.",
      },
      {
        src: "/images/gadgets/computer-accessories/5733-3.jpg",
        alt: "Camera close up",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5733",
  },
  {
    slug: "adafruit-922",
    name: "Miniature Wireless USB Keyboard with Touchpad",
    category: "Computer Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/computer-accessories/922.jpg",
        alt: "Angled shot of Miniature Wireless USB keyboard with touchpad",
      },
      {
        src: "/images/gadgets/computer-accessories/922-2.jpg",
        alt: "Miniature Wireless USB Keyboard with Touchpad, keyboard in use",
      },
      {
        src: "/images/gadgets/computer-accessories/922-3.jpg",
        alt: "Top Down Kit Shot of the Miniature Wireless USB Keyboard w/ Touchpad along with a USB-C split to USB-A Jack \u0026 Plug Cable.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/922",
  },
  {
    slug: "adafruit-5137",
    name: "Cool White LED Ring Light with USB Cable and On/Off Switch",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/5137.jpg",
        alt: "Angled shot of 5V COB Ring Light with black USB cable uncoiled.",
      },
      {
        src: "/images/gadgets/home-electronics/5137-2.jpg",
        alt: "Close-up of LED ring light.",
      },
      {
        src: "/images/gadgets/home-electronics/5137-3.jpg",
        alt: "Bottom of  5V COB Ring Light with black USB cable",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5137",
  },
  {
    slug: "adafruit-4433",
    name: "LED Ring Light - 76mm Diameter",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/4433.jpg",
        alt: "LED Ring Light with metal 76mm Diameter body, lit up",
      },
      {
        src: "/images/gadgets/home-electronics/4433-2.jpg",
        alt: "Top down shot of lit ring light",
      },
      {
        src: "/images/gadgets/home-electronics/4433-3.jpg",
        alt: "Unlit ring light showing power cable",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4433",
  },
  {
    slug: "adafruit-3368",
    name: "Miniature 5V Cooling Fan for Raspberry Pi (and Other Computers)",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/3368.jpg",
        alt: "Miniature 5V Cooling Fan for Raspberry Pi and Other Computers",
      },
      {
        src: "/images/gadgets/home-electronics/3368-2.jpg",
        alt: "Fan plugged into Raspberry Pi",
      },
      {
        src: "/images/gadgets/home-electronics/3368-3.jpg",
        alt: "Fan installed onto Raspberry Pi",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3368",
  },
  {
    slug: "adafruit-1138",
    name: "Adafruit NeoPixel Digital RGB LED Strip - White 60 LED",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/1138.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip reel wired to a microcontroller, with all the LEDs in a rainbow",
      },
      {
        src: "/images/gadgets/home-electronics/1138-2.jpg",
        alt: "Detail of top of LED strip next to quarter.",
      },
      {
        src: "/images/gadgets/home-electronics/1138-3.jpg",
        alt: "Detail of back of LED strip next to quarter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1138",
  },
  {
    slug: "adafruit-1460",
    name: "Adafruit NeoPixel Digital RGB LED Strip - Black 30 LED 5m",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/1460.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip reel wired to a microcontroller, with all the LEDs in a rainbow",
      },
      {
        src: "/images/gadgets/home-electronics/1460-2.jpg",
        alt: "Top of LED strip with U.S. quarter for scale.",
      },
      {
        src: "/images/gadgets/home-electronics/1460-3.jpg",
        alt: "LED strip in a reel.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1460",
  },
  {
    slug: "adafruit-1461",
    name: "Adafruit NeoPixel Digital RGB LED Strip - Black 60 LED 4m",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/1461.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip reel wired to a microcontroller, with all the LEDs in a rainbow",
      },
      {
        src: "/images/gadgets/home-electronics/1461-3.jpg",
        alt: "Overhead shot of back of LED strip next to US quarter for scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1461",
  },
  {
    slug: "adafruit-1506",
    name: "Adafruit NeoPixel Digital RGB LED Strip 144 LED - 1m Black",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/1506.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip wired to a microcontroller, with all the LEDs in a rainbow",
      },
      {
        src: "/images/gadgets/home-electronics/1506-2.jpg",
        alt: "Top Down Front Shot of the Adafruit NeoPixel Digital RGB LED Strip 144 LED - 1m Black next to U.S.Quarter for Scale.",
      },
      {
        src: "/images/gadgets/home-electronics/1506-3.jpg",
        alt: "Top Down Back Shot of the Adafruit NeoPixel Digital RGB LED Strip 144 LED - 1m Black next to U.S.Quarter for Scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1506",
  },
  {
    slug: "adafruit-1507",
    name: "Adafruit NeoPixel Digital RGB LED Strip 144 LED - 1m White",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/1507.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip wired to a microcontroller, with all the LEDs in a rainbow",
      },
      {
        src: "/images/gadgets/home-electronics/1507-2.jpg",
        alt: "Detail of top of LED strip next to quarter",
      },
      {
        src: "/images/gadgets/home-electronics/1507-3.jpg",
        alt: "Detail of back of LED strip next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1507",
  },
  {
    slug: "adafruit-1376",
    name: "Adafruit NeoPixel Digital RGB LED Strip - White 30 LED",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/1376.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip reel wired to a microcontroller, with all the LEDs in a rainbow",
      },
      {
        src: "/images/gadgets/home-electronics/1376-2.jpg",
        alt: "Detail of top of LED strip next to quarter",
      },
      {
        src: "/images/gadgets/home-electronics/1376-3.jpg",
        alt: "Detail of back of LED strip next to quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1376",
  },
  {
    slug: "adafruit-2958",
    name: "Adafruit Mini Skinny NeoPixel Digital RGB LED Strip 1m",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/2958.jpg",
        alt: "LED strip emitting yellow, pink, and purple lights.",
      },
      {
        src: "/images/gadgets/home-electronics/2958-2.jpg",
        alt: "LED strip emitting blue and green lights.",
      },
      {
        src: "/images/gadgets/home-electronics/2958-3.jpg",
        alt: "LED strip emitting red, pink, and purple lights.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2958",
  },
  {
    slug: "adafruit-2959",
    name: "Adafruit Mini Skinny NeoPixel Digital RGB LED Strip - 60 LED/m",
    category: "Home Electronics",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/home-electronics/2959.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip with different rainbow lights",
      },
      {
        src: "/images/gadgets/home-electronics/2959-2.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip with different rainbow lights",
      },
      {
        src: "/images/gadgets/home-electronics/2959-3.jpg",
        alt: "Adafruit NeoPixel Digital RGB LED Strip with different rainbow lights",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2959",
  },
  {
    slug: "adafruit-1783",
    name: "Cupcade: the Raspberry Pi-Powered Micro Arcade Cabinet Kit",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/1783.jpg",
        alt: "Two hands playing Cupcade with very small pacman game on display",
      },
      {
        src: "/images/gadgets/gaming-accessories/1783-2.jpg",
        alt: "Front angle shot showing PacMan loading screen on CupCade",
      },
      {
        src: "/images/gadgets/gaming-accessories/1783-3.jpg",
        alt: "Front angle shot showing PacMan play screen on CupCade",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1783",
  },
  {
    slug: "adafruit-3015",
    name: "PiGRRL 2.0 Custom Gamepad PCB",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/3015.jpg",
        alt: "Angled shot of black, rectangular DIY game pad PCB.",
      },
      {
        src: "/images/gadgets/gaming-accessories/3015-2.jpg",
        alt: "Top-down shot of black, rectangular DIY game pad PCB.",
      },
      {
        src: "/images/gadgets/gaming-accessories/3015-3.jpg",
        alt: "Top Down Back Shot of the PiGRRL 2.0 Custom Gamepad PCB next to a U.S. Quarter for Scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3015",
  },
  {
    slug: "adafruit-2934",
    name: "PiGrrl Zero Custom Gamepad PCB",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/2934.jpg",
        alt: "Angle shot PiGrrl Zero Custom Gamepad PCB ",
      },
      {
        src: "/images/gadgets/gaming-accessories/2934-2.jpg",
        alt: "Close up shot PiGrrl Zero Custom Gamepad PCB ",
      },
      {
        src: "/images/gadgets/gaming-accessories/2934-3.jpg",
        alt: "Back shot PiGrrl Zero Custom Gamepad PCB measured by a US quarter ",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/2934",
  },
  {
    slug: "adafruit-3102",
    name: "Mini Analog Joystick - 10K Potentiometers",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/3102.jpg",
        alt: "Hand gripping joystick knob of mini analog joystick",
      },
      {
        src: "/images/gadgets/gaming-accessories/3102-2.jpg",
        alt: "Angled shot showing dual potentiometers",
      },
      {
        src: "/images/gadgets/gaming-accessories/3102-3.jpg",
        alt: "Kit components for potentiometer",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3102",
  },
  {
    slug: "adafruit-480",
    name: "Small Arcade Joystick",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/480.jpg",
        alt: "Small Arcade Joystick with red ball",
      },
      {
        src: "/images/gadgets/gaming-accessories/480-2.jpg",
        alt: "Profile of joystick showing mechanism",
      },
      {
        src: "/images/gadgets/gaming-accessories/480-3.jpg",
        alt: "Bottom detail showing X Y selector plate",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/480",
  },
  {
    slug: "adafruit-1188",
    name: "Massive Arcade Button with LED - 100mm Green",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/1188.jpg",
        alt: "Demo Shot of the Illuminated Button to the Massive Arcade Button with LED - 100mm Green",
      },
      {
        src: "/images/gadgets/gaming-accessories/1188-2.jpg",
        alt: "Disassembled massive arcade button parts.",
      },
      {
        src: "/images/gadgets/gaming-accessories/1188-3.jpg",
        alt: "Angled Shot of the Massive Arcade Button.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1188",
  },
  {
    slug: "adafruit-3272",
    name: "Raspberry Pi Arcade Cabinet Pack",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/3272.jpg",
        alt: "An assembled Raspberry Pi Arcade Cabinet Pack. ",
      },
      {
        src: "/images/gadgets/gaming-accessories/3272-2.jpg",
        alt: "Overhead shot of electronics.",
      },
      {
        src: "/images/gadgets/gaming-accessories/3272-3.jpg",
        alt: "Black rectangular box with Adafruit logo on it. ",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3272",
  },
  {
    slug: "adafruit-6285",
    name: "USB Game Controller with SNES-like Layout",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/6285.jpg",
        alt: "Angled shot of SNES game controller with USB-A cable.",
      },
      {
        src: "/images/gadgets/gaming-accessories/6285-2.jpg",
        alt: "Overhead shot of SNES game controller with USB-A cable.",
      },
      {
        src: "/images/gadgets/gaming-accessories/6285-3.jpg",
        alt: "Back of SNES game controller with USB-A cable next to US quarter for scale.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/6285",
  },
  {
    slug: "adafruit-5743",
    name: "Adafruit Mini I2C Gamepad with seesaw - STEMMA QT / Qwiic",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/5743.jpg",
        alt: "Angled shot of small rectangular gamepad PCB with thumbstick.",
      },
      {
        src: "/images/gadgets/gaming-accessories/5743-2.jpg",
        alt: "Overhead shot of small rectangular gamepad PCB with thumbstick.",
      },
      {
        src: "/images/gadgets/gaming-accessories/5743-3.jpg",
        alt: "Overhead shot of small rectangular gamepad PCB with thumbstick.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5743",
  },
  {
    slug: "adafruit-1187",
    name: "Massive Arcade Button with LED - 100mm White",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/1187.jpg",
        alt: "Demo Shot of the Illuminated Button of the Massive Arcade Button with LED - 100mm White.",
      },
      {
        src: "/images/gadgets/gaming-accessories/1187-2.jpg",
        alt: "Disassembled massive arcade button parts.",
      },
      {
        src: "/images/gadgets/gaming-accessories/1187-3.jpg",
        alt: "Angled Shot of the Massive Arcade Button.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/1187",
  },
  {
    slug: "adafruit-3487",
    name: "Arcade Button with LED - 30mm Translucent Green",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/3487.jpg",
        alt: "Angled closeup of 30mm mini translucent green LED arcade button",
      },
      {
        src: "/images/gadgets/gaming-accessories/3487-2.jpg",
        alt: "30mm mini translucent green LED arcade button next to US quarter",
      },
      {
        src: "/images/gadgets/gaming-accessories/3487-3.jpg",
        alt: "Disassembled LED arcade button parts.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3487",
  },
  {
    slug: "adafruit-3488",
    name: "Arcade Button with LED - 30mm Translucent Yellow",
    category: "Gaming Accessories",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/gaming-accessories/3488.jpg",
        alt: "Angled closeup of 30mm translucent yellow LED arcade button",
      },
      {
        src: "/images/gadgets/gaming-accessories/3488-2.jpg",
        alt: "Disassembled LED arcade button parts.",
      },
      {
        src: "/images/gadgets/gaming-accessories/3488-3.jpg",
        alt: "30mm translucent yellow LED arcade button next to US quarter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/3488",
  },
  {
    slug: "adafruit-939",
    name: "USB MicroSD Card Reader/Writer - microSD / microSDHC / microSDXC",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/939.jpg",
        alt: "USB MicroSD Card Reader/Writer",
      },
      {
        src: "/images/gadgets/storage-connectivity/939-2.jpg",
        alt: "Reader with cap removed",
      },
      {
        src: "/images/gadgets/storage-connectivity/939-3.jpg",
        alt: "Micro SD card inserting into reader",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/939",
  },
  {
    slug: "adafruit-6452",
    name: "Raspberry Pi Flash Drive 128GB USB 3.0",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/6452.jpg",
        alt: "Angled Shot of the Raspberry Pi Flash Drive 128GB USB 3.0 (USB Connector End)",
      },
      {
        src: "/images/gadgets/storage-connectivity/6452-2.jpg",
        alt: "Angled Shot of the Raspberry Pi Flash Drive 128GB USB 3.0 (Lanyard Loop End)",
      },
      {
        src: "/images/gadgets/storage-connectivity/6452-3.jpg",
        alt: "Demo Shot of the Raspberry Pi Flash Drive 128GB USB 3.0 inserted into the USB 3.0 Port on a Raspberry Pi 5.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/6452",
  },
  {
    slug: "adafruit-6453",
    name: "Raspberry Pi Flash Drive 256GB USB 3.0",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/6453.jpg",
        alt: "Angled Shot of the Raspberry Pi Flash Drive 256GB USB 3.0 (USB Connector End)",
      },
      {
        src: "/images/gadgets/storage-connectivity/6453-2.jpg",
        alt: "Angled Shot of the Raspberry Pi Flash Drive 256GB USB 3.0 (Lanyard Loop End)",
      },
      {
        src: "/images/gadgets/storage-connectivity/6453-3.jpg",
        alt: "Demo Shot of the Raspberry Pi Flash Drive 256GB USB 3.0 inserted into the USB 3.0 Port on a Raspberry Pi 5.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/6453",
  },
  {
    slug: "adafruit-5212",
    name: "USB Type C microSD Card Reader/Writer",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/5212.jpg",
        alt: "Angled shot of a microSD card reader with a key chain plugged into a laptop port.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5212-2.jpg",
        alt: "Angle shot USB C microSD Card Reader",
      },
      {
        src: "/images/gadgets/storage-connectivity/5212-3.jpg",
        alt: "Close up shot of microSD Card Reader slot ",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5212",
  },
  {
    slug: "adafruit-5622",
    name: '2.5" SATA III to USB 3.0 Adapter Cable - 30cm long',
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/5622.jpg",
        alt: "Angled shot of a SATA-to-USB-A cable.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5622-2.jpg",
        alt: "Overhead shot of SATA-to-USB-A cable.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5622-3.jpg",
        alt: "Angled close-up of SATA connector.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5622",
  },
  {
    slug: "adafruit-974",
    name: "Flexible USB Swivel Adapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/974.jpg",
        alt: "Flexible USB Type A to A Swivel Adapter",
      },
      {
        src: "/images/gadgets/storage-connectivity/974-2.jpg",
        alt: "Bent adapter with detail of Type A plug and socket",
      },
      {
        src: "/images/gadgets/storage-connectivity/974-3.jpg",
        alt: "Detail of Type a plug",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/974",
  },
  {
    slug: "adafruit-5030",
    name: "USB A Socket to USB Type C Plug Adapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/5030.jpg",
        alt: "Angled shot of single back keycap with Adafruit logo plugged via a USB adapter into a laptop. Blue light glows through the keycap.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5030-2.jpg",
        alt: "Angled shot of gray rectangular USA A socket to USB C plug adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5030-3.jpg",
        alt: "Reverse angled shot of gray rectangular USA A socket to USB C plug adapter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5030",
  },
  {
    slug: "adafruit-4432",
    name: "Right Angle USB Type C Adapter - USB 3.1 Gen 4 Compatible",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/4432.jpg",
        alt: "Angled Shot of the Right Angle USB Type C Adapter - USB 3.1 Gen 4 Compatible.",
      },
      {
        src: "/images/gadgets/storage-connectivity/4432-2.jpg",
        alt: "Close-up Shot of the USB-C socket on the Right Angle USB Type C Adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/4432-3.jpg",
        alt: "Close-up Shot of the USB-C jack on the Right Angle USB Type C Adapter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4432",
  },
  {
    slug: "adafruit-5329",
    name: "USB-A Plug to USB-C Plug Adapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/5329.jpg",
        alt: "USB-A to USB-C Plug-Plug Adapter inserted into a QT PY board and a laptop",
      },
      {
        src: "/images/gadgets/storage-connectivity/5329-2.jpg",
        alt: "Angle shot USB-A to USB-C Plug-Plug Adapter",
      },
      {
        src: "/images/gadgets/storage-connectivity/5329-3.jpg",
        alt: "Close up USB-A to USB-C Plug-Plug Adapter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5329",
  },
  {
    slug: "adafruit-5521",
    name: "Magnetic Right Angle USB Type C Adapter - 120W Data and Power",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/5521.jpg",
        alt: "Angled shot of right angle USB-C adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5521-2.jpg",
        alt: "Overhead shot of right angle USB-C adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5521-3.jpg",
        alt: "Close-up of USB-C plug on right angle adapter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5521",
  },
  {
    slug: "adafruit-4175",
    name: "USB A to USB C Adapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/4175.jpg",
        alt: "Angled shot of a shot of USB A to USB C Adapter. ",
      },
      {
        src: "/images/gadgets/storage-connectivity/4175-2.jpg",
        alt: "Reverse end shot of USB A to USB C Adapter",
      },
      {
        src: "/images/gadgets/storage-connectivity/4175-3.jpg",
        alt: "Close up shot of USB C side of adapter",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4175",
  },
  {
    slug: "adafruit-5461",
    name: "USB A Plug to USB C Jack Microadapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/5461.jpg",
        alt: "Angled shot of USB-C socket to USB-A socket micro-adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5461-2.jpg",
        alt: "Close-up of a USB-C to USB-A micro-adapter plugged into a laptop port. A USB-C cable is connected to the micro-adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/5461-3.jpg",
        alt: "Top view of USB-C socket to USB-A socket micro-adapter.",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/5461",
  },
  {
    slug: "adafruit-4715",
    name: "RCA NTSC or PAL or S-Video Input to USB 2.0 Capture Adapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/4715.jpg",
        alt: "RCA NTSC or PAL or S-Video Input to USB Capture Adapter",
      },
      {
        src: "/images/gadgets/storage-connectivity/4715-2.jpg",
        alt: "Adapter capturing XBox classic output onto laptop",
      },
      {
        src: "/images/gadgets/storage-connectivity/4715-3.jpg",
        alt: "Close up of S-Video and RCA jacks",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4715",
  },
  {
    slug: "adafruit-4827",
    name: "Xinghuatian Tech Combination WiFi + Bluetooth® 4.0 USB Adapter",
    category: "Storage \u0026 Connectivity",
    description:
      "Product reference from the Adafruit catalog. See the linked source for details; Temu may not carry this exact item.",
    images: [
      {
        src: "/images/gadgets/storage-connectivity/4827.jpg",
        alt: "Angled shot of a Combination WiFi + Bluetooth 4.0 USB Adapter. ",
      },
      {
        src: "/images/gadgets/storage-connectivity/4827-2.jpg",
        alt: "Detailed shot of a USB on a Combination WiFi + Bluetooth 4.0 USB Adapter.",
      },
      {
        src: "/images/gadgets/storage-connectivity/4827-3.jpg",
        alt: "Top down view of a Combination WiFi + Bluetooth 4.0 USB Adapter. ",
      },
    ],
    affiliateUrl: temuAffiliateUrl,
    sourceLabel: "Adafruit product catalog",
    sourceUrl: "https://www.adafruit.com/product/4827",
  },
];
