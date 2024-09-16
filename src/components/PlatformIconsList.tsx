import { Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconsList;
