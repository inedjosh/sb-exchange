import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import BodyText from "../TextElements/BodyText";
import HeadingText from "../TextElements/HeadingText";

import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class AppSlider extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent={"flex"}
        alignItems={"center"}
        height={"250px"}
        width={"100%"}
        color={"#fff"}
        margin={"20px 5px"}
        fontSize={"20px"}
        mt={"50px"}
      >
        <Carousel
          enableAutoPlay={true}
          enableSwipe={true}
          breakPoints={breakPoints}
        >
          {this.props.items.map((card) => (
            <Box
              w={["80vw", "80vw", "fit-content"]}
              borderRadius="20"
              key={card.id}
              ml={["0 ", "0", "20px"]}
            >
              <Image src={card.img} alt={card.name} w={["100%"]} />
              <Flex
                mt={"15px"}
                px={["10px", null]}
                justifyContent={"space-between"}
              >
                <HeadingText
                  textTransform="uppercase"
                  color={"#777575"}
                  fontWeight={"300"}
                  fontSize={["16x", "16px", "18px"]}
                  p={"2px"}
                >
                  {card.name}
                </HeadingText>
                <Flex
                  bg="rgba(191, 173, 255, .3)"
                  borderRadius={"10"}
                  width={"fit-content"}
                  px="3"
                  py="1"
                  alignItems={"center"}
                >
                  <BodyText
                    color="#5326FF"
                    pl="1"
                    fontWeight={"500"}
                    fontSize={["15px", "15px", "17px"]}
                    p={"2px"}
                  >
                    Swap
                  </BodyText>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Carousel>
      </Box>
    );
  }
}

export default AppSlider;
