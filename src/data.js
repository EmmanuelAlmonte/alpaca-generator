const navigation = [
  {
    alt: 'Home',
    href: '/'
  },
  {
    alt: 'Projects',
    href: 'Projects'
  },
  {
    alt: 'Portfolio',
    href: 'Portfolio'
  }
  // {
  //   alt: 'Contact',
  //   href: 'Contact'
  // }
]

const contact = [
  {
    src: '/images/linkedin.svg',
    alt: 'Linkedin Logo',
    href: 'https://www.linkedin.com/in/emmanuel-almonte-6b066b189/'
  },
  {
    src: '/images/github.svg',
    alt: 'Github logo',
    href: 'https://github.com/EmmanuelAlmonte'
  },
  {
    src: '/images/twitter.svg',
    alt: 'Twitter Logo',
    href: 'https://twitter.com/EmmAlmonte'
  }
]
const mainContent = [
  {
    src: './images/profile-pic.jpeg',
    href: '',
    alt: 'Photo of Emmanuel Almonte',
    title: 'Who am I ?',
    description:
      "I graduated from the Community College of Philadelphia with an Associates in Applied Science in December of 2022. I majored in computer information systems/information tech. I'm currently attending Peirce College. I will be looking to get hired by June of 2022. Preferrably a frontend role. I'm currently skilled in HTML/CSS, Vanilla JavaScript, React.js, Redux.",
    style: 'my-photo',
    containerStyle: 'portfolio-content-container '
  },
  // {
  //   src: './images/projects-page.png',
  //   href: './projects-page/vanilla.html',
  //   alt: 'Screenshot of Vanilla Javascript Projects Home Page',
  //   title: 'JavaScript Projects',
  //   description: 'All of my Projects',
  //   style: 'project-images'
  // },
  {
    src: './images/art-gallery.png',
    href: './NftGallery',
    alt: 'Art Gallery Website',
    title: 'NFT Gallery',
    description: 'Under Maintenance',
    style: 'project-images ',
    containerStyle: 'portfolio-content-container '
  },
  {
    src: './images/white-background.jpg',
    href: '#',
    alt: 'Reddit Clone',
    title: 'Reddit Clone',
    description: 'Under Maintenance',
    style: 'project-images',
    containerStyle: 'portfolio-content-container '
  }
]

const previewProjects = [
  {
    href: '../ColorPicker',
    src: './images/color-picker-page.png',
    title: 'Color Picker'
  },
  {
    href: '../Counter',
    src: './images/counter-prev.png',
    title: 'Counter'
  },
  {
    href: '../Menu',
    src: './images/menu-page.png',
    title: 'Menu'
  },
  {
    href: '../Accordian',
    src: './images/accordian-page.png',
    title: 'Accordian'
  }
]

const allProjects = [
  {
    href: '../ColorPicker',
    src: './images/color-picker-page.png',
    title: 'Color Picker'
  },
  {
    href: '../Counter',
    src: './images/counter-prev.png',
    title: 'Counter'
  },
  {
    href: '../Menu',
    src: './images/menu-page.png',
    title: 'Menu'
  },
  {
    href: '../Accordian',
    src: './images/accordian-page.png',
    title: 'Accordian'
  },
  {
    href: '../Tour',
    src: './images/tours-page.png',
    title: 'Tour'
  }
]

const footer = {
  href: '#',
  content: '2022 Emmanuel Almonte'
}

const questions = [
  {
    id: 1,
    title: 'Do I have to allow the use of cookies?',
    info:
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
  },
  {
    id: 2,
    title: 'How do I change my My Page password?',
    info:
      'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.'
  },
  {
    id: 3,
    title: 'What is BankID?',
    info:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.'
  },
  {
    id: 4,
    title: 'Whose birth number can I use?',
    info:
      'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.'
  },
  {
    id: 5,
    title: 'When do I recieve a password ordered by letter?',
    info:
      'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan '
  }
]
const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: '../images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: '../images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: '../images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: '../images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: '../images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: '../images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: '../images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: '../images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: '../images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
]

const alpacaAccessories = [
  { text: 'Hair' },
  { text: 'Ears' },
  { text: 'Eyes' },
  { text: 'Mouth' },
  { text: 'Neck' },
  { text: 'Leg' },
  { text: 'Accessories' },
  { text: 'Backgrounds' }
]
const alpacaStyle = {
  Accessories: [
    {
      partId: 'accessories',
      style: 'custom-alp', 
      text: 'earings',
      src: './images/alpaca/accessories/earings.png',
      alt: 'default accessories'
    },
    {
      partId: 'accessories',
      style: 'custom-alp', 
      text: 'flower',
      src: './images/alpaca/accessories/flower.png',
      alt: 'flower accessories'
    },
    {
      partId: 'accessories',
      style: 'custom-alp', 
      text: 'glasses',
      src: './images/alpaca/accessories/glasses.png',
      alt: 'glasses accessories'
    },
    {
      partId: 'accessories',
      style: 'custom-alp', 
      text: 'headphones',
      src: './images/alpaca/accessories/headphone.png',
      alt: 'headphone accessories'
    }
  ],
  Backgrounds: [
    { text: 'blue50', src: './images/alpaca/backgrounds/blue50.png' },
    { text: 'blue60', src: './images/alpaca/backgrounds/blue60.png' },
    { text: 'blue70', src: './images/alpaca/backgrounds/blue70.png' },
    { text: 'darkblue30', src: './images/alpaca/backgrounds/darkblue30.png' },
    { text: 'darkblue50', src: './images/alpaca/backgrounds/darkblue50.png' },
    { text: 'darkblue70', src: './images/alpaca/backgrounds/darkblue70.png' },
    { text: 'green50', src: './images/alpaca/backgrounds/green50.png' },
    { text: 'green60', src: './images/alpaca/backgrounds/green60.png' },
    { text: 'green70', src: './images/alpaca/backgrounds/green70.png' },
    { text: 'grey40', src: './images/alpaca/backgrounds/grey40.png' },
    { text: 'grey70', src: './images/alpaca/backgrounds/grey70.png' },
    { text: 'grey80', src: './images/alpaca/backgrounds/grey80.png' },
    { text: 'red50', src: './images/alpaca/backgrounds/red50.png' },
    { text: 'red60', src: './images/alpaca/backgrounds/red60.png' },
    { text: 'red70', src: './images/alpaca/backgrounds/red70.png' },
    { text: 'yellow50', src: './images/alpaca/backgrounds/yellow50.png' },
    { text: 'yellow60', src: './images/alpaca/backgrounds/yellow60.png' },
    { text: 'yellow70', src: './images/alpaca/backgrounds/yellow70.png' }
  ],
  Ears: [
    { text: 'default', src: './images/alpaca/ears/default.png' },
    { text: 'forward', src: './images/alpaca/ears/tilt-forward.png' },
    { text: 'backward', src: './images/alpaca/ears/tilt-backward.png' }
  ],
  Eyes: [
    { text: 'default', src: './images/alpaca/eyes/default.png' },
    { text: 'angry', src: './images/alpaca/eyes/angry.png' },
    { text: 'naugthy', src: './images/alpaca/eyes/naugthy.png' },
    { text: 'panda', src: './images/alpaca/eyes/panda.png' },
    { text: 'smart', src: './images/alpaca/eyes/smart.png' },
    { text: 'star', src: './images/alpaca/eyes/star.png' }
  ],
  Hair: [
    { text: 'default', src: './images/alpaca/hair/default.png' },
    { text: 'bang', src: './images/alpaca/hair/bang.png' },
    { text: 'curls', src: './images/alpaca/hair/curls.png' },
    { text: 'elegant', src: './images/alpaca/hair/elegant.png' },
    { text: 'fancy', src: './images/alpaca/hair/fancy.png' },
    { text: 'quiff', src: './images/alpaca/hair/quiff.png' },
    { text: 'short', src: './images/alpaca/hair/short.png' }
  ],
  Leg: [
    { text: 'default', src: './images/alpaca/leg/default.png' },
    { text: 'bubble-tea', src: './images/alpaca/leg/bubble-tea.png' },
    { text: 'cookie', src: './images/alpaca/leg/cookie.png' },
    { text: 'game-console', src: './images/alpaca/leg/game-console.png' },
    { text: 'forward', src: './images/alpaca/leg/tilt-forward.png' },
    { text: 'backward', src: './images/alpaca/leg/tilt-backward.png' }
  ],
  Mouth: [
    { text: 'default', src: './images/alpaca/mouth/default.png' },
    { text: 'astonished', src: './images/alpaca/mouth/astonished.png' },
    { text: 'eating', src: './images/alpaca/mouth/eating.png' },
    { text: 'laugh', src: './images/alpaca/mouth/laugh.png' },
    { text: 'tongue', src: './images/alpaca/mouth/tongue.png' }
  ],
  Neck: [
    { text: 'default', src: './images/alpaca/neck/default.png' },
    { text: 'bend-forward', src: './images/alpaca/neck/bend-forward.png' },
    { text: 'bend-backward', src: './images/alpaca/neck/bend-backward.png' },
    { text: 'thick', src: './images/alpaca/neck/thick.png' }
  ]
}

const data = {
  navigation: navigation,
  mainContent: mainContent,
  footer: footer,
  contact: contact,
  previewProjects: previewProjects,
  allProjects: allProjects,
  questions: questions,
  menu: menu,
  alpacaAccessories: alpacaAccessories,
  alpacaStyle: alpacaStyle
}

export default data
