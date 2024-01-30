import { ReactNode } from "react";
import { useCharacters } from "../hooks/use.characters";
import { useEpisodes } from "../hooks/use.episodes";
import { useLocation } from "../hooks/use.location";
import { AppContext, AppContextStructure } from "./app.context";

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    characterQueryContext: useCharacters(),
    charactersContext: useCharacters(),
    episodeQueryContext: useEpisodes(),
    episodesContext: useEpisodes(),
    locationQueryContext: useLocation(),
    locationContext: useLocation(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
