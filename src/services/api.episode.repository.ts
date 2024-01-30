import { Episode } from "../model/episode";
import { EpisodeQuery } from "../types/episodeQuery";

export class ApiEpisodeRepository {
  async getAllEpisode(path: string): Promise<EpisodeQuery> {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async getEpisode(path: string): Promise<Episode> {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
