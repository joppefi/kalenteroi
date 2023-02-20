import type { AppProps } from "next/app";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        margin="auto"
        w={{ sm: "full", md: "lg" }}
        backgroundColor="white"
        borderRadius="md"
        dropShadow="outline"
        p={4}
        alignItems="center"
        justifyContent="center"
      >
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
  );
}
