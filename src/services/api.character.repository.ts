import { Character } from "../model/character";
import { CharacterQuery } from "../types/characterQuery";

export class ApiCharacterRepository {
  async getAllCharacter(path: string): Promise<CharacterQuery> {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async getCharacter(path: string): Promise<Character> {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
