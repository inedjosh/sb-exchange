import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonDiv = (props) => {
  return (
    <Button
      borderRadius="30px;"
      border="none;"
      color="white;"
      fontSize={["12px", "14px;"]}
      fontWeight="700;"
      textTransform="capitalize;"
      px={"45px"}
      height={"55px"}
      {...props}
      bg={" linear-gradient(135deg, #8482FF 0%, #7723FE 100%);"}
      _hover={" linear-gradient(135deg, #8482FF 0%, #7723FE 100%);"}
    >
      {" "}
      {props.children}
    </Button>
  );
};

export default ButtonDiv;
