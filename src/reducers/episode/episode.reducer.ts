import { Episode } from "../../model/episode";
import { EpisodeQuery } from "../../types/episodeQuery";
import { actionTypeNames } from "../character/character.action.types";
import { EpisodeAction, EpisodeQueryAction } from "./episode.action.creator";

export type EpisodeQueryState = EpisodeQuery | undefined;
export type EpisodeState = Episode[] | undefined;

export function episodeQueryReducer(
  _state: EpisodeQueryState,
  action: EpisodeQueryAction
): EpisodeQueryState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as EpisodeQuery;
  }
}

export function episodeReducer(
  _state: EpisodeState,
  action: EpisodeAction
): EpisodeState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Episode[];
  }
}
