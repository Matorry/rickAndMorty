import { Location } from "../../model/location";
import { LocationQuery } from "../../types/locationQuery";
import { actionTypeNames } from "./location.action.types";

type Keys = keyof typeof actionTypeNames;

export type LocationQueryAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: LocationQuery;
};

export type LocationAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: Location[];
};

export const loadLocationQueryActionCreator = (
  data: LocationQuery
): LocationQueryAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const loadLocationActionCreator = (data: Location[]): LocationAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};
