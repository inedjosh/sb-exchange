import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import HeadingText from "../TextElements/HeadingText";
import ButtonDiv from "../UIElements/Button";

function NewsLetter(props) {
  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      bg="#f5f5f5"
      py="10"
      flexDirection={"column"}
    >
      <HeadingText mb="10">Subscribe to our newsletter </HeadingText>
      <Flex
        bg={["#f5f5f5", "#f5f5f5", "#E7E7E7"]}
        py="3"
        px="4"
        borderRadius={"40"}
        w={["90%", "90%", "70%", "40%"]}
        flexDirection={["column", "column", "row"]}
      >
        <Input
          bg="#E7E7E7"
          outline={"#E7E7E7"}
          border="#E7E7E7 !important"
          appearance={"#E7E7E7"}
          placeholder="join the wait list for the app"
        />
        <ButtonDiv mt={["20px", "20px", "0"]}>Submit</ButtonDiv>
      </Flex>
    </Flex>
  );
}

export default NewsLetter;
