import { createContext } from "react";
import { useCharacters } from "../hooks/use.characters";
import { useEpisodes } from "../hooks/use.episodes";
import { useLocation } from "../hooks/use.location";

export type AppContextStructure = {
  characterQueryContext: ReturnType<typeof useCharacters>;
  charactersContext: ReturnType<typeof useCharacters>;
  episodeQueryContext: ReturnType<typeof useEpisodes>;
  episodesContext: ReturnType<typeof useEpisodes>;
  locationQueryContext: ReturnType<typeof useLocation>;
  locationContext: ReturnType<typeof useLocation>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
