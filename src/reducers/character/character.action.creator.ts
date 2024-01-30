import { Character } from "../../model/character";
import { CharacterQuery } from "../../types/characterQuery";
import { actionTypeNames } from "./character.action.types";

type Keys = keyof typeof actionTypeNames;

export type CharacterQueryAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: CharacterQuery;
};

export type CharacterAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: Character[];
};

export const loadCharacterQueryActionCreator = (
  data: CharacterQuery
): CharacterQueryAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const loadCharacterActionCreator = (
  data: Character[]
): CharacterAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};
