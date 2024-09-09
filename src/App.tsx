import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav"
             "aside main"`,
        base: `"nav" "main"`,
      }}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
