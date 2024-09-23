import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { Store } from "./useStores";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedStore: Store | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        stores: selectedStore?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedStore?.id]
  );
export default useGames;
