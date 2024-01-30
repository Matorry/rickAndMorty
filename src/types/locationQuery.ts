import { Info } from "../model/info";
import { Location } from "../model/location";

export type LocationQuery = {
  info: Info;
  results: Location[];
};
