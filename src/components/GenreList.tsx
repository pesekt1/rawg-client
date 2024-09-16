import { Heading, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      <Heading>Genres</Heading>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </>
  );
};

export default GenreList;
