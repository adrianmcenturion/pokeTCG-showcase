import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchPokemonProps {
  pokemon: string;
  setPokemon: (pokemon: string) => void;
}

export interface FilterProps {
  pokemon?: string;
  page?: number;
  pageSize?: number;
  rarity?: string;
  types?: string;
  totalCount?: number;
  // supertype: string
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

// CARDS DATA

export interface RootCardData {
  data: CardData[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface CardData {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  rules?: string[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: Set;
  number: string;
  artist?: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities?: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

export interface Legalities {
  unlimited: string;
  expanded: string;
}

export interface Images {
  symbol: string;
  logo: string;
}

export interface Legalities2 {
  unlimited: string;
  expanded: string;
}

export interface Images2 {
  small: string;
  large: string;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

export interface Prices {
  holofoil: Holofoil;
}

export interface Holofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}
