import Profile1 from '../public/banners/profile.png'
import CostImage from '../public/icons/payment2.png'
import DeliveryImage from '../public/icons/delivery2.png'
import CurrencyImage from '../public/icons/currency2.png'

import VisionRank from '../public/icons/vision-rank.png'
import VisionGraph from '../public/icons/vision-graph.png'
import VisionHand from '../public/icons/vison-hand.png'
import VisionNetwork from '../public/icons/vision-network.png'

import ExtraNewsImage from '../public/banners/b2b-business.png'
import ExtraNewsImage2 from '../public/banners/africa-business.png'

import NewsImage from '../public/banners/new1.jpg'
import NewsImage2 from '../public/banners/new2.jpg'

import PremiumImage from '../public/icons/premimu.png'
import FunsImage from '../public/icons/funs.png'
import PaymentImage from '../public/icons/payment-security.svg'

export const features = [
  {
    icon: PaymentImage,
    title: "Payment security",
    description: "FCA Regulated, Your Money Secured by the Bank of England",
    link: "/#safe-payment",
    imageSize: {
      height: 256,
      width: 256
    }
  },
  {
    icon: CostImage,
    title: "Low cost",
    description: "Secure Savings: 5x Lower FX Rates Than Traditional Banks",
    link: "/#business",
  },
  {
    icon: DeliveryImage,
    title: "Quick delivery",
    description: "Get your money where it needs to be as quickly as possible",
    link: "/#safe-transfer",
  },
  {
    icon: CurrencyImage,
    title: "Multiple currencies",
    description: "Instantly Send, Receive, and Exchange in 65 Currencies around the world",
    link: "/#multiple-currency",
  },
  {
    icon: PremiumImage,
    title: "Premium service",
    description: "Get Exceptional Quality Service with a Dedicated Account Manager",
    link: "/#vip",
  },
  {
    icon: FunsImage,
    title: "Quick access to funds",
    description: "Enjoy Instant Access to Your Funds, Anytime, Anywhere with Our Debit Card",
    link: "/#funds",
  },
];

export const market = [
  {
    name: `Transactions`,
    value: '4m',

  },
  {
    name: 'Funds transferred',
    value: '$7Bn',

  },
  {
    name: 'Customers ',
    value: '26k+',

  },
  {
    name: 'Markets',
    value: '115k+',

  },
]

export const teamMember = [
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
  {
    image: Profile1,
    title: "Ivan Zhiznevsky",
    description: "co-founder and chef executive officer"
  },
]


export const betaPricingPackageInfo = {
  sectionName: "PricingPackage",
  title: "Our services",
  description: "revolutionize the landscape of global money transfer and outperform the competition by a large margin",
}

export const betaPricingPackageTiers = [
  {
    name: "BlocFx",
    id: "tier-blocFx",
    href: "#",
    title: "Bloc Fx",
    description: "",
    mostPopular: true,
  },
  {
    name: "TraditionalBank",
    id: "tier-traditionalBank",
    href: "#",
    title: "Traditional bank",
    description: "",
    mostPopular: false,
  }
]

export const betaPricingPackageSections = [
  {
    name: "No fuss banking",
    features: [
      {
        name: "100 % online on boarding",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "Rarely",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Interview or a branch visit",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "No",
        tiers_hint_traditional: "Yes",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "EU / UK address and/or VAT registration needed",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "No",
        tiers_hint_traditional: "Yes",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Fast (1day) account opening",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "Never",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
    ],
  },

  {
    name: "Account features",
    features: [
      {
        name: "Multicurrency accounts (support og 65+ currencies)",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "Rarely",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Minimum deposit / balance *",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "No",
        tiers_hint_traditional: "Often",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Fast (1day) account opening",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "No",
        tiers_hint_traditional: "Rarely",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Seamless high-volume cross-border payments",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "Never",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Favourable and transparent exchange rates",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "No",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
    ],
  },

  {
    name: "Customers support",
    features: [
      {
        name: "Specialised international trade support",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "No",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "SME Friendly suport",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "No",
        tiers_hint_display: { Starter: false, Advanced: true }
      }
    ],
  },

  {
    name: "Security & privacy",
    features: [
      {
        name: "High standards of privacy, security, and fraud protection protocols",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "Yes",
        tiers_hint_display: { Starter: false, Advanced: true }
      },
      {
        name: "Fast and technology driven compliance procedures that understand your business",
        tiers: { BlocFx: true, TraditionalBank: false },
        tiers_hint_blocFx: "Yes",
        tiers_hint_traditional: "No",
        tiers_hint_display: { Starter: false, Advanced: true }
      }
    ],
  },


]


export const applyingStep = [
  {
    step: 1,
    title: "REGISTER",
    description: "Simply complete the quick form with your contact information"
  },
  {
    step: 2,
    title: "DEDICATED MANAGER",
    description: "Expect a call to initiate the verification and onboarding process from your dedicated account manager"
  },
  {
    step: 3,
    title: "READY TO GO!",
    description: "Your account will be up and running within just 5 working days"
  },
]

export const safeStep = [
  {
    description: "Our Comprehensive end to end Verification Process Keeps Your Money Secure"
  },
  {
    description: "Rigorous Fraud Protection: We Follow KYC and AML Regulations to Safeguard Your Funds from Fraud"
  },
  {
    description: "Safeguarding Your Funds: Your Money Securely Stored in the Bank of England for Enhanced Security"
  },
]


export const services = [{

  title: 'SERVICES',
  item: [
    {
      title: 'Fast pay',
      link: '/#fastPay'
    },
    {
      title: 'VIP',
      link: '/#vip'
    },
  ]

}]

export const legal = [{

  title: 'LEGAL',
  item: [
    {
      title: 'Terms & conditions',
      link: ''
    }
  ]

}]

export const company = [{

  title: 'COMPANY',
  item: [
    {
      title: 'About BlocFX',
      link: '/aboutUs'
    },
    {
      title: 'News & Insight',
      link: '/news'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ]

}]

export const welcomeBlock = {
  block1: "BlocFx is your reliable partner in 115+ countries, ensuring seamless global money transfers.",
  block2: "We are committed to delivering secure, cost-effective, and swift financial transac- tions accessible to all.",
  block3: "With the guidance of our expert , we enhance your financial journey",
  block4: "We provide tailored solutions and strategic advice to elevate your financial experience to new heights."
}

export const visionFeature = {
  featureOne: {
    image: VisionRank,
    title: 'CUSTOMER DEDICATION',
    des: 'Building One on One Relationships is Key'
  },
  featureTwo: {
    image: VisionGraph,
    title: 'EFFICIENCY',
    des: 'Continuously seeking cost effective solutions to benefit customers growth and stability'
  },
  featureThree: {
    image: VisionHand,
    title: 'SEAMLESS ONBOARDING',
    des: 'Setting Ethical, Straightforward and Swift Industry Standards'
  },
  featureFour: {
    image: VisionNetwork,
    title: 'EMPOWER INVESTMENTS & COMMUNITIES',
    des: 'Reduce Cross-Border Investment Costs, fostering national growth; Invest in communities through local offices, ensuring accessibility and strong connections.'
  },
}

export const extraNewsBlock = [
  {
    image: ExtraNewsImage,
    title: 'What are the different methods for cross border payments ?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim cursus erat vel luctus. Sed ultricies hendrerit arcu in suscipit.',
    data: '2023-11-21'
  },
  {
    image: ExtraNewsImage2,
    title: 'What are the different methods for cross border payments ?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim cursus erat vel luctus. Sed ultricies hendrerit arcu in suscipit.',
    data: '2023-11-21'
  },
]

export const newsBlock = [
  {
    image: NewsImage,
    title: 'What are the different methods for cross border payments ?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim cursus erat vel luctus. Sed ultricies hendrerit arcu in suscipit.',
    data: '2023-11-21'
  },
  {
    image: NewsImage2,
    title: 'What are the different methods for cross border payments ?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim cursus erat vel luctus. Sed ultricies hendrerit arcu in suscipit.',
    data: '2023-11-21'
  },
]