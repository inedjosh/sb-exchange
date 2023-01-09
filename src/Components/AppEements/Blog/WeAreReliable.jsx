import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WeAreReliable(props) {
  return (
    <Flex justifyContent={"center"} alignItems="center" mb="20">
      <Flex
        position="relative"
        justifyContent={"center"}
        alignItems="center"
        width={["90%", "90%", "90%", "80%"]}
        overflow="hidden"
        borderRadius={"54px"}
      >
        <Box width={"100%"} h={["300px"]}>
          <LazyLoadImage
            src="lady-office.png"
            width={"100%"}
            h={"100%"}
            objectFit={"cover"}
            alt={"lady-office"}
          />
        </Box>
        <Box
          position="absolute"
          bg="linear-gradient(0deg, rgba(0, 0, 0, 0.87) -8.51%, rgba(0, 0, 0, 0) 102.75%);"
          inset="0"
          zIndex="10"
        ></Box>
        <Box
          position={"absolute"}
          zIndex="20"
          left="15%"
          top={["10%", "10%", "30%"]}
        >
          <HeadingText color="#FFCC1A">We are reliable</HeadingText>
          <BodyText
            mt="3"
            color="#fff"
            width={["80%", "80%", "60%", "40%"]}
            fontSize="13"
          >
            Who we are? We are a reliable and trusted exchange agency. Creating
            a safe space to trade your crypto assets and gift cards (btc, eth
            ,amazon, steam wallet and soon). Instant payment is ascertained
            after conformation of trade
          </BodyText>
        </Box>
      </Flex>
    </Flex>
  );
}

export default WeAreReliable;
