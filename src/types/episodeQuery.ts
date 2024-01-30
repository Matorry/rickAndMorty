import { Episode } from "../model/episode";
import { Info } from "../model/info";

export type EpisodeQuery = {
  info: Info;
  results: Episode[];
};
