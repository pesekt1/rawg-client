import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={10}
    >
      {error && <p>{error}</p>}

      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
