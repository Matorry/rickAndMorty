import { useCallback, useMemo, useReducer } from "react";
import { Location } from "../model/location";
import * as actions from "../reducers/location/location.action.creator";
import {
  locationQueryReducer,
  locationReducer,
} from "../reducers/location/location.reducer";
import { ApiLocationRepository } from "../services/api.location.repository";
import { LocationQuery } from "../types/locationQuery";

export function useLocation() {
  const repo = useMemo(() => new ApiLocationRepository(), []);

  const initialState: LocationQuery = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  const [locationQuery, queryDispatch] = useReducer(
    locationQueryReducer,
    initialState
  );
  const [locations, locationDispatch] = useReducer(locationReducer, []);

  const loadLocationQuery = useCallback(
    async (code: string) => {
      try {
        const locations = await repo.getAllLocation(code);
        queryDispatch(actions.loadLocationQueryActionCreator(locations));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [repo]
  );

  const loadLocation = useCallback(
    async (codes: string[]) => {
      try {
        const promises: Promise<Location>[] = codes.map((element) =>
          repo.getLocation(element)
        );
        const locationData = await Promise.all(promises);
        locationDispatch(actions.loadLocationActionCreator(locationData));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [repo]
  );

  return {
    locations,
    locationQuery,
    loadLocationQuery,
    loadLocation,
  };
}
