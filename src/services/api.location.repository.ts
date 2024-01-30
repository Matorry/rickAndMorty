import { Location } from "../model/location";
import { LocationQuery } from "../types/locationQuery";

export class ApiLocationRepository {
  async getAllLocation(path: string): Promise<LocationQuery> {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async getLocation(path: string): Promise<Location> {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
