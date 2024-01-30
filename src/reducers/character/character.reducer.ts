import { Character } from "../../model/character";
import { CharacterQuery } from "../../types/characterQuery";
import {
  CharacterAction,
  CharacterQueryAction,
} from "./character.action.creator";
import { actionTypeNames } from "./character.action.types";

export type CharacterQueryState = CharacterQuery | undefined;
export type CharacterState = Character[] | undefined;

export function characterQueryReducer(
  _state: CharacterQueryState,
  action: CharacterQueryAction
): CharacterQueryState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as CharacterQuery;
  }
}

export function characterReducer(
  _state: CharacterState,
  action: CharacterAction
): CharacterState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Character[];
  }
}
