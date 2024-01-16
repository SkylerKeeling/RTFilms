const slrProducts = [
  {
    id: 1,
    name: "Canon Powershot SX10",
    description:
      "The Canon Powershot SX10 is a bridge camera that combines advanced features with a user-friendly design. With a powerful zoom lens and various shooting modes, it's suitable for both beginners and enthusiasts. The SX10 features a versatile focal length, allowing you to capture a wide range of scenes.",
    features: ["Bridge camera", "Powerful zoom lens", "Various shooting modes"],
    batteries: "Typically powered by rechargeable lithium-ion batteries.",
    imageUrl: "./public/images/SLR/CanonPowershotSX10.webp",
  },
  {
    id: 2,
    name: "Fujifilm S 5500",
    description:
      "The Fujifilm S 5500 is a versatile digital camera that strikes a balance between (simplicity) and (functionality). With its (compact design) and (advanced features), including a high-quality lens and various shooting modes, it's an excellent choice for (everyday photography).",
    features: [
      "(Compact design)",
      "(High-quality lens)",
      "(Various shooting modes)",
    ],
    batteries: "Powered by (AA batteries).",
    imageUrl: "./public/images/SLR/FujifilmS5500.webp",
  },
  {
    id: 3,
    name: "Kodak Pixpro Az 252",
    description:
      "The Kodak Pixpro Az 252 is a (user-friendly) digital camera with a (powerful zoom lens). Designed for (simplicity) and (versatility), it offers (various shooting modes) and (creative options). Its (compact size) makes it convenient for (on-the-go photography).",
    features: [
      "(Powerful zoom lens)",
      "(User-friendly design)",
      "(Various shooting modes)",
    ],
    batteries: "Powered by (AA batteries).",
    imageUrl: "./public/images/SLR/KodakPixproAz252.webp",
  },
  {
    id: 4,
    name: "Olympus MJU III 80",
    description:
      "The Olympus MJU III 80 is a (compact) film camera known for its (sleek design) and (ease of use). With (autofocus) and (automatic exposure), it simplifies the photography process, making it a great companion for (capturing spontaneous moments).",
    features: ["(Compact design)", "(Autofocus)", "(Automatic exposure)"],
    film: "35mm film",
    batteries: "Powered by a (CR123A battery).",
    imageUrl: "./public/images/SLR/OlympusMJUIII80.webp",
  },
  {
    id: 5,
    name: "Olympus OM-10",
    description:
      "The Olympus OM-10 is a classic (35mm film SLR) camera known for its (iconic design) and (versatility). With (manual and automatic) shooting modes, it caters to both (beginners) and (experienced photographers). Its (interchangeable lens system) provides (creative flexibility).",
    features: [
      "(35mm film SLR)",
      "(Manual and automatic modes)",
      "(Interchangeable lens system)",
    ],
    film: "35mm film",
    batteries: "Powered by (SR44 or LR44 batteries).",
    imageUrl: "./public/images/SLR/OlympusOM-10.webp",
  },
  {
    id: 6,
    name: "Olympus OM-20",
    description:
      "The Olympus OM-20 is a (35mm film SLR) camera that inherits the (classic design) of the OM series. It offers (manual and automatic) shooting modes, making it suitable for (photographers of all skill levels). The OM-20 provides a (gateway) to the world of (film photography).",
    features: [
      "(35mm film SLR)",
      "(Manual and automatic modes)",
      "(Classic design)",
    ],
    film: "35mm film",
    batteries: "Powered by (SR44 or LR44 batteries).",
    imageUrl: "./public/images/SLR/OlympusOM-20.webp",
  },
]

const pasProducts = [
  {
    id: 7,
    name: "Canon AF35M",
    description:
      "The Canon AF35M, also known as the Sure Shot, is like the 80s rockstar of film cameras. This compact autofocus wonder brings the nostalgia of neon lights and synth beats. With its 38mm f/2.8 lens, automatic focusing, and built-in flash, it's ready to capture your memories in true vintage style. The only backstage pass it needs? Two trusty AA batteries.",
    features: [
      "Automatic focusing",
      "Built-in flash",
      "Auto-exposure",
      "Motorized film advance",
    ],
    film: "35mm film",
    batteries: "Typically requires two AA batteries for power.",
    imageUrl: "./public/images/Canon AF35M.webp",
  },
  {
    id: 8,
    name: "Fujifilm Zoom Date 60",
    description:
      "Enter the Zoom Date 60, the camera that's here to party! With its sleek design and a zoom lens that's ready to dance from 38mm to 60mm, it's the life of the 35mm film celebration. Autofocus, auto-exposure, and a built-in flash make it the ultimate companion for spontaneous moments. It's powered by a lithium battery for camera functions and a separate AA battery, ensuring it's always ready for the photo fiesta.",
    features: [
      "38-60mm zoom lens",
      "Autofocus",
      "Auto-exposure",
      "Built-in flash",
      "Various shooting modes",
    ],
    film: "35mm film",
    batteries:
      "Usually powered by a lithium battery for camera functions and a separate AA battery for the flash.",
    imageUrl: "./public/images/Fujifilm Zoom Date 60 W.webp",
  },
  {
    id: 9,
    name: "Kodak 735",
    description:
      "The Kodak 735 is the laid-back surfer dude of film cameras. Fixed focus, motorized film advance, and a built-in flash—it's all about simplicity. Just load it with some 35mm film, toss in a couple of AA batteries, and let it ride the wave of casual photography vibes.",
    features: [
      "Fixed focus lens",
      "Motorized film advance",
      "Built-in flash",
      "Automatic exposure control",
    ],
    film: "35mm film",
    batteries: "Generally powered by AA batteries for camera functions.",
    imageUrl: "./public/images/Kodak 735.webp",
  },
  {
    id: 10,
    name: "Konica Top AF-300",
    description:
      "Meet the Konica Top AF-300, the James Bond of 35mm cameras. With its sleek design and autofocus charm, it's ready for any undercover mission. Packed with automatic exposure, motorized film advance, and a fixed focal length lens, it's the secret agent of capturing memories. Don't forget to equip it with two AA batteries for the ultimate spy power.",
    features: [
      "Autofocus",
      "Automatic exposure",
      "Motorized film advance",
      "Fixed focal length lens",
    ],
    film: "35mm film",
    batteries: "Requires two AA batteries for power.",
    imageUrl: "./public/images/Konica Top's AF-300.webp",
  },
  {
    id: 11,
    name: "Minolta Riva Af 35 C",
    description:
      "The Minolta Riva AF 35 C is the smooth operator of the film camera world. Born in the late 80s, it boasts autofocus, auto-exposure, and a 35mm f/2.8 lens—perfect for creating timeless, velvety images. Load it up with 35mm film, power it with two AA batteries, and let it serenade your moments with photographic finesse.",
    features: [
      "Autofocus",
      "Auto-exposure",
      "Motorized film advance",
      "Built-in flash",
      "35mm f/2.8 lens",
    ],
    film: "35mm film",
    batteries: "Typically uses two AA batteries for power.",
    imageUrl: "./public/images/Minolta Riva AF 35 C .webp",
  },
  {
    id: 12,
    name: "Nikon L35AF 2",
    description:
      "Say hello to the Nikon L35AF 2, the maestro of sharpness in the film orchestra. With autofocus, auto-exposure, a motorized film advance, and a 35mm f/2.8 lens, it hits all the right notes. Two AA batteries provide the energy for this symphony of photographic excellence.",
    features: [
      "Autofocus",
      "Auto-exposure",
      "Motorized film advance",
      "Built-in flash",
      "35mm f/2.8 lens",
    ],
    film: "35mm film",
    batteries: "Usually powered by two AA batteries.",
    imageUrl: "../../public/images/Nikon L35AF 2.webp",
  },
  {
    id: 13,
    name: "Olympus XA1",
    description:
      "The Olympus XA1 is the minimalist poet of film photography. With its zone focusing, manual exposure control, fixed focus lens, and compact design, it's all about simplicity and purity. No batteries required for its poetic dance with 35mm film, but if you're feeling fancy, add a battery for the optional electronic flash.",
    features: [
      "Zone focusing",
      "Manual exposure control",
      "Fixed focus lens",
      "Compact design",
    ],
    film: "35mm film",
    batteries:
      "The XA1 doesn't require batteries for basic operation; however, a battery is needed for the optional electronic flash.",
    imageUrl: "../../public/images/Olympus XA1.webp",
  },
  {
    id: 14,
    name: "Pentax PC35 AF",
    description:
      "Enter the Pentax PC35 AF, the time-traveler from the 80s with autofocus charm. With features like autofocus, auto-exposure, motorized film advance, and a 35mm f/2.8 lens, it's the DeLorean of film cameras. Just supply it with two AA batteries, load it with 35mm film, and let the time-traveling adventures begin.",
    features: [
      "Autofocus",
      "Auto-exposure",
      "Motorized film advance",
      "Built-in flash",
      "35mm f/2.8 lens",
    ],
    film: "35mm film",
    batteries: "Typically requires two AA batteries for power.",
    imageUrl: "../../public/images/Pentax PC35 AF.webp",
  },
  {
    id: 15,
    name: "Rollei Giro 105",
    description:
      "The Rollei Giro 105 is the laid-back philosopher of the camera world. With its fixed focus lens, manual film advance, basic exposure control, and a minimalist design, it's the Zen master of simplicity. Load it with 35mm film, power it with two AA batteries, and let it capture the essence of the moment in a calm and collected manner.",
    features: [
      "Fixed focus lens",
      "Manual film advance",
      "Basic exposure control",
      "Minimalist design",
    ],
    film: "35mm film",
    batteries: "Usually powered by two AA batteries.",
    imageUrl: "../../public/images/Rollei Giro 105.webp",
  },
]

function getProductData(id) {
  let productSlrData = productsArray.find(products => products.slr.id === id)
  let productPasData = productsArray.find(products => products.pas.id === id)

  if (productPasData === undefined || productSlrData === undefined) {
    console.log("Product data does not exist" + id)
    return undefined
  }
  return productPasData
}

export {pasProducts, slrProducts}
