import { Episode } from "../../model/episode";
import { EpisodeQuery } from "../../types/episodeQuery";
import { actionTypeNames } from "./episode.action.types";

type Keys = keyof typeof actionTypeNames;

export type EpisodeQueryAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: EpisodeQuery;
};

export type EpisodeAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: Episode[];
};

export const loadEpisodeQueryActionCreator = (
  data: EpisodeQuery
): EpisodeQueryAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const loadEpisodeActionCreator = (data: Episode[]): EpisodeAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};
