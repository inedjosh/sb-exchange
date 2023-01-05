import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { blogs } from "../../../model";
import { truncate } from "../../../utils/truncate";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";

function Blogs(props) {
  const displayMainTitle = truncate(blogs[0].title, 63);
  const displayMainBody = truncate(blogs[0].body, 510);

  return (
    <Box>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        p={["10px", "10px", "20px", "10"]}
        w="100%"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          width={["100%", "95%", "90%", "50%"]}
          h={["200px", "200px", "200px", "400"]}
          borderRadius={"40"}
          overflow="hidden"
          justifyContent={"center"}
        >
          <Image src={blogs[0].img} w={["100%"]} h="100%" objectFit={"cover"} />
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          w={["100%", "100%", "100%", "40%"]}
          py={["25px", "25px", "30px", "5"]}
          px={["10px", "10px", "30px", "5"]}
        >
          <BodyText mt="-5" textTransform="uppercase" fontSize={"15px"}>
            {blogs[0].category} {blogs[0].date}
          </BodyText>
          <HeadingText py="2">{displayMainTitle}</HeadingText>
          <BodyText fontSize="14">{displayMainBody}</BodyText>
          <Link
            color="#5326FF"
            fontSize={"13"}
            textDecorationLine={"underline"}
            fontWeight={"500"}
            href={`blog/${blogs[0].id}`}
          >
            Read More
          </Link>
          <Flex py="2" alignItems={"center"}>
            <Image src={blogs[0].author_img} w="50px" />
            <Flex flexDirection={"column"} pl={"5px"}>
              <HeadingText fontSize={"14px"}> {blogs[0].author}</HeadingText>
              <BodyText fontSize={"12px"}> {blogs[0].position}</BodyText>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        p={["10px", "10px", "10"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        {blogs.slice(1).map((blog) => {
          const displaySecTitle = truncate(blog.title, 40);
          const displaySecBody = truncate(blog.body, 200);
          return (
            <Box p="5" key={blog.id}>
              <Box
                h={["200px", "200px", "250px", "300px"]}
                w={"100%"}
                borderRadius={"20px"}
                overflow={"hidden"}
              >
                <Image
                  src={blog.img}
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Box py="2">
                <BodyText fontSize="13px" textTransform="uppercase">
                  {blog.category} {blog.date}
                </BodyText>
                <HeadingText fontSize="20" py="2">
                  {displaySecTitle}
                </HeadingText>
                <BodyText fontSize="13">{displaySecBody}</BodyText>
                <Link
                  color="#5326FF"
                  fontSize={"13"}
                  textDecorationLine={"underline"}
                  fontWeight={"500"}
                  href={`blog/${blog.id}`}
                >
                  {" "}
                  Read More
                </Link>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Blogs;
