export type RobotType = "emerald" | "diamond" | "zafiro";

export interface Robot {
  title: string;
  iconUrl: string;
  description: any;
  priceWithDiscount: number;
  color: string;
  bgUrl: string;
  type: RobotType;
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
    type: "diamond",
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
    type: "emerald",
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
    type: "zafiro",
  },
};
