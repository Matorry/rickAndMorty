import { Character } from "../model/character";
import { Info } from "../model/info";

export type CharacterQuery = {
  info: Info;
  results: Character[];
};
