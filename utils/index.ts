import { FilterProps } from "@/types";

interface TypeMatcher {
  [key: string]: string;
}

export const fetchCards = async (filters: FilterProps) => {
  const { page, pageSize, pokemon, rarity, types } = filters;

  const apiKey = process.env.API_KEY!;

  const url = `https://api.pokemontcg.io/v2/cards?${
    pokemon && `q=name:${pokemon}&`
  }${rarity && `q=rarity:${rarity}&`}${
    types && `q=types:${types}&`
  }&page=${page}&pageSize=${pageSize}`;

  const headers = {
    "X-Api-Key": apiKey,
  };

  try {
    const response = await fetch(url, { headers: headers });
    if (!response.ok) {
      throw new Error("Failed to fetch cards");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const getPokemonType = (type: string) => {
  const typeMatcher: TypeMatcher = {
    Colorless: "type_colorless",
    Darkness: "type_darkness",
    Dragon: "type_dragon",
    Fairy: "type_fairy",
    Fighting: "type_fighting",
    Fire: "type_fire",
    Grass: "type_grass",
    Lightning: "type_lightning",
    Metal: "type_metal",
    Psychic: "type_psychic",
    Water: "type_water",
  };
  return typeMatcher[type];
};
