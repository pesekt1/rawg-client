import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {game.parent_platforms.map((pp) => (
          <Text key={pp.platform.id}>{pp.platform.name}</Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
