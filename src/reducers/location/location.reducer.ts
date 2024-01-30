import { Location } from "../../model/location";
import { LocationQuery } from "../../types/locationQuery";
import { actionTypeNames } from "../character/character.action.types";
import { LocationAction, LocationQueryAction } from "./location.action.creator";

export type LocationQueryState = LocationQuery | undefined;
export type LocationState = Location[] | undefined;

export function locationQueryReducer(
  _state: LocationQueryState,
  action: LocationQueryAction
): LocationQueryState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as LocationQuery;
  }
}

export function locationReducer(
  _state: LocationState,
  action: LocationAction
): LocationState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Location[];
  }
}
