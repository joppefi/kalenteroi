import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      margin="auto"
      w="lg"
      backgroundColor="white"
      borderRadius="md"
      dropShadow="outline"
      p={4}
    >
      <Heading size="md" w="full" textAlign="center">
        Kalenteroi
      </Heading>
    </Box>
  );
};

export default Home;
