export const cards = {
  "1": {
    img: "/assets/1.png",
    title: "Strategy based on Smart Money concepts",
    description:
      "Discover an automated trading strategy that is based on the principles of Smart Money. Our robots use advanced algorithms that analyze and operate based on intelligent market movements, giving you a unique competitive advantage.",
  },
  "2": {
    img: "/assets/2.png",
    title: "Automated Take Profit",
    description:
      "With our trading robots, you will not have to worry about making trade closing decisions. The Take Profit feature is built in automatically, allowing you to set your profit goals and let the robot take care of the rest, thus maximizing your results.",
  },
  "3": {
    img: "/assets/3.png",
    title: "Automated Stop Loss and Trailing Stop",
    description:
      "Risk management is essential in trading, which is why our robots include automatic Stop Loss and Trailing Stop functions. This allows you to protect your trades against adverse market movements and ensure profits while minimizing losses, all in a fully automated manner.",
  },
  "4": {
    img: "/assets/4.png",
    title: "No need setfiles",
    description:
      "With our robots, you don't need to make complicated manual adjustments. Everything is designed to work automatically and efficiently. From risk management to trade execution, our products are optimized to give you consistent results without the need for human intervention.",
  },
};


export type RobotType = 'emerald' | 'diamond' | 'zafiro'

export interface Robot {
  title: string
  iconUrl: string
  description: any
  priceWithDiscount: number
  color: string
  bgUrl: string
  type: RobotType
}

export const robots: any = {
  "1": {
    bgUrl: "/assets/bg-diamond.jpg",
    iconUrl: "/assets/diamond.png",
    color: "#00E2F5",
    priceWithDiscount: 935,
    title: "Diamond-V5",
    description: {
      "monthly profit": "5-8%",
      ratio: "1:3",
      "risk management": "customizable",
      "news filters": "yes",
      "daily operations": "1 per day",
      "challenge winrate": "55%",
    },
    type: "diamond"
  },
  "2": {
    bgUrl: "/assets/bg-emerald.jpg",
    iconUrl: "/assets/emerald.png",
    color: "#01D300",
    priceWithDiscount: 2215,
    title: "Emerald-V5",
    description: {
      "monthly profit": "8-12%",
      ratio: "1:6",
      "risk management": "customizable",
      "news filters": "yes",
      "daily operations": "1 per day",
      "challenge winrate": "75%",
    },
    type: "emerald"
  },
  "3": {
    bgUrl: "/assets/bg-zafiro.jpg",
    iconUrl: "/assets/zafiro.png",
    color: "#E807DF",
    priceWithDiscount: 2975,
    title: "Zafiro-V5",
    description: {
      "monthly profit": "12-21%",
      ratio: "1:12",
      "risk management": "customizable",
      "news filters": "yes",
      "daily operations": "1 per day",
      "challenge winrate": "95%",
    },
    type: "zafiro"
  },
};

export const coinbaseLinks = {
  emerald: "https://commerce.coinbase.com/checkout/132066b6-b37b-47c0-9b80-d4ebf95d831f",
  diamond: "https://commerce.coinbase.com/checkout/d17e7eeb-0a2d-498a-ac11-36eefad9f95f",
  zafiro: "https://commerce.coinbase.com/checkout/771bf0bf-afbb-489c-9bd9-95a8d4806409"
}
