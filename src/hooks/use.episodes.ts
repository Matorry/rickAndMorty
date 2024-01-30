import { useCallback, useMemo, useReducer } from "react";
import { Episode } from "../model/episode";
import * as actions from "../reducers/episode/episode.action.creator";
import {
  episodeQueryReducer,
  episodeReducer,
} from "../reducers/episode/episode.reducer";
import { ApiEpisodeRepository } from "../services/api.episode.repository";
import { EpisodeQuery } from "../types/episodeQuery";

export function useEpisodes() {
  const repo = useMemo(() => new ApiEpisodeRepository(), []);

  const initialState: EpisodeQuery = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  const [episodesQuery, queryDispatch] = useReducer(
    episodeQueryReducer,
    initialState
  );
  const [episodes, episodeDispatch] = useReducer(episodeReducer, []);

  const loadEpisodeQuery = useCallback(
    async (code: string) => {
      try {
        const episodes = await repo.getAllEpisode(code);
        queryDispatch(actions.loadEpisodeQueryActionCreator(episodes));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [repo]
  );

  const loadEpisodes = useCallback(
    async (codes: string[]) => {
      try {
        const promises: Promise<Episode>[] = codes.map((element) =>
          repo.getEpisode(element)
        );
        const episodesData = await Promise.all(promises);
        episodeDispatch(actions.loadEpisodeActionCreator(episodesData));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [repo]
  );

  return {
    episodes,
    episodesQuery,
    loadEpisodeQuery,
    loadEpisodes,
  };
}
