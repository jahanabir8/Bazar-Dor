interface Change {
  dir: string,
  pct: number
}

interface Market {
  market: string,
  division: string,
  min: number,
  max: number
}

export default interface ProductType {
  id: string;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  // change: Change;
  change: {
    dir: string,
    pct: number
  };
  markets: Market[];
}