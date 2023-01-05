import { extendTheme } from "@chakra-ui/react";

const colors = {
  grayText: "#777575",
  btnBg: "linear-gradient(135deg, #8482FF 0%, #7723FE 100%)",
};

const fonts = {
  heading: `'PT Sans', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const theme = extendTheme({ colors, fonts });
