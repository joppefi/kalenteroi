import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: "default",
        bg: "whitesmoke",
        padding: "1rem",
        justifyContent: "center",
        alignItems: "center",
      },
    }),
  },
});

export default theme;
