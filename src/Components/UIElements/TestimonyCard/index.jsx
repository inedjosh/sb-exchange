import { Box } from "@chakra-ui/react";
import React from "react";
import BodyText from "../../TextElements/BodyText";
import Button from "../Button";
import "./styles.css";

const TestimonyCard = (props) => {
  return (
    <Box
      bg={"linear-gradient(180deg, #7C47FE 0%, #5326FF 100%);"}
      w={["100%", "80%", "90%"]}
      h={["320px", "320px", "320px", "300px"]}
      p={["2px", "2px", "10px"]}
      borderRadius={"20px"}
      ml={["30px", "-20px"]}
      mr={["0", "-20px"]}
    >
      {props.children}
    </Box>
  );
};

export default TestimonyCard;
