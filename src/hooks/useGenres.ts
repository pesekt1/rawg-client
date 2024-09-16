import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get<GenresResponse>("/genres")
      .then((response) => setGenres(response.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
