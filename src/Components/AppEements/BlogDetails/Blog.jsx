import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { blogs } from "../../../model";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";

function Blog({ blog }) {
  const lists = [
    {
      id: 2,
      name: "Design",
    },
    {
      id: 3,
      name: "Performance",
    },
    {
      id: 4,
      name: "display",
    },
    {
      id: 5,
      name: "Photo",
    },
    {
      id: 6,
      name: "Video",
    },
    {
      id: 7,
      name: "Other fetaures",
    },
  ];

  return (
    <Box p={["20px", "20px", "20px", "20"]}>
      <BodyText textTransform="uppercase">
        {blog.category} {blog.date}
      </BodyText>
      <HeadingText py="8">{blog.title}</HeadingText>
      <Box h="400" w="100%" overflow={"hidden"} borderRadius="40">
        <Image h="100%" objectFit={"cover"} w="100%" src={blog.img} />
      </Box>
      <Flex flexDirection={["column", "column", "row"]} py="10">
        <Box flex=".2">
          <HeadingText py="2" fontSize="16">
            --- INTRO
          </HeadingText>
          {lists.map((list) => (
            <BodyText key={list.id} fontSize="15" pl="3" py="2">
              {list.name}
            </BodyText>
          ))}
        </Box>
        <Flex flexDirection={"column"} flex=".8">
          <Flex alignItems={"center"} py="4">
            <Image src={blog.author_img} w="14" />
            <Box ml="2">
              <HeadingText fontSize="18">{blog.author}</HeadingText>
              <BodyText fontSize="13">{blog.position}</BodyText>
            </Box>
          </Flex>
          <Flex flexDirection={"column"} py="2">
            <HeadingText pr={["0", "0", "0", "20"]}>{blog.title}</HeadingText>
            <BodyText pr={["0", "0", "0", "20"]}>{blog.body}</BodyText>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Blog;
