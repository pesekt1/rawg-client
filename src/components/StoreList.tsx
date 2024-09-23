import {
  Heading,
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useStores, { Store } from "../hooks/useStores";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectStore: (store: Store) => void;
  selectedStore: Store | null;
}

const StoreList = ({ onSelectStore, selectedStore }: Props) => {
  const { data: stores, error, isLoading } = useStores();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading>Stores</Heading>
      <List>
        {stores.map((store) => (
          <ListItem key={store.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(store.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onSelectStore(store)}
                key={store.id}
                colorScheme={
                  store.id === selectedStore?.id ? "yellow" : "white"
                }
              >
                {store.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StoreList;
