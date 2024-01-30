import { useCallback, useMemo, useReducer } from "react";
import { Character } from "../model/character";
import * as actions from "../reducers/character/character.action.creator";
import {
  characterQueryReducer,
  characterReducer,
} from "../reducers/character/character.reducer";
import { ApiCharacterRepository } from "../services/api.character.repository";
import { CharacterQuery } from "../types/characterQuery";

export function useCharacters() {
  const repo = useMemo(() => new ApiCharacterRepository(), []);

  const initialState: CharacterQuery = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  const [charactersQuery, queryDispatch] = useReducer(
    characterQueryReducer,
    initialState
  );

  const [characters, characterDispach] = useReducer(characterReducer, []);

  const loadCharacterQuery = useCallback(
    async (code: string) => {
      try {
        const characters = await repo.getAllCharacter(code);
        queryDispatch(actions.loadCharacterQueryActionCreator(characters));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [repo]
  );

  const loadCharacters = useCallback(
    async (codes: string[]) => {
      try {
        const promises: Promise<Character>[] = codes.map((element) =>
          repo.getCharacter(element)
        );
        const charactersData = await Promise.all(promises);
        characterDispach(actions.loadCharacterActionCreator(charactersData));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [repo]
  );

  return {
    characters,
    charactersQuery,
    loadCharacterQuery,
    loadCharacters,
  };
}
