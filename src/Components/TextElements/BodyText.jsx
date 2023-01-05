import { Text } from "@chakra-ui/react";
import React from "react";

function BodyText(props) {
  return (
    <Text color="grayText" {...props}>
      {props.children}{" "}
    </Text>
  );
}

export default BodyText;
