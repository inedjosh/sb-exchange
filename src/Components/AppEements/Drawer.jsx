import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Drawer({ isOpen }) {
  return (
    <Box
      position={"fixed"}
      top="0"
      bottom={"0"}
      // right={"0"}
      h={"110vh"}
      w={"70%"}
      bg={"#fff"}
    >
      <Flex justifyContent={"flex-end"}>
        <Icon as={AiOutlineCloseCircle} fontSize={"30px"} p={"20px"} />
      </Flex>
    </Box>
  );
}

export default Drawer;
