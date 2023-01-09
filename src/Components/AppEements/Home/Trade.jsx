import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Link, Flex, AspectRatio } from "@chakra-ui/react";
import React, { useState } from "react";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";
import Button from "../../UIElements/Button";
import AppSlider from "../../UIElements/Slider";

const Trade = () => {
  const [trade, setTrade] = useState("giftCards");

  console.log(trade);

  const cards = [
    {
      id: 1,
      img: "xbox.png",
      name: "xbox",
    },
    {
      id: 2,
      img: "steam.png",
      name: "steam",
    },
    {
      id: 3,
      img: "nike.png",
      name: "nike",
    },
    {
      id: 4,
      img: "play.png",
      name: "google",
    },
    {
      id: 5,
      img: "play.png",
      name: "google",
    },
    {
      id: 6,
      img: "steam.png",
      name: "steam",
    },
    {
      id: 7,
      img: "steam.png",
      name: "steam",
    },
  ];

  return (
    <Flex flexDirection={"column"} mt={["20px", null, "20"]}>
      <Box>
        <HeadingText textAlign="center" px={["60px", "50px", null]}>
          Trade a card now with Sb exchange
        </HeadingText>
        <BodyText
          textAlign={"center"}
          px={["20px", null, "130px", "300px"]}
          pt={[null, null, "10px"]}
          fontSize={["13px", "13px", "14px"]}
          mt={["20px", "10px", "0"]}
        >
          Trade your card with SB exchange 24-hour client support Get assistance
          with your trading account around the clock
        </BodyText>
        <Flex
          justifyContent={["center", "center", "flex-start"]}
          alignItems={["center", "center", "flex-start"]}
        >
          <Flex
            bg="#f5f5f5"
            width={"fit-content"}
            p={["2", "3"]}
            px={"20px"}
            ml={["10px", "10px", "10"]}
            alignItems={"center"}
            borderRadius="40"
            mt="10"
          >
            <Button>Gift Cards</Button>
            <BodyText
              style={{ marginLeft: 10 }}
              color={"#777575"}
              fontWeight={"700"}
            >
              Cryptocurrencies{" "}
            </BodyText>
          </Flex>
        </Flex>
        <Flex mt="30" alignItems={"center"}>
          <AppSlider items={cards} />
        </Flex>
      </Box>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
        mt={"50px"}
      >
        <HeadingText mt="10">How to trade with us?</HeadingText>
        <BodyText
          textAlign="center"
          my={["3"]}
          w={["80%", "80%", "70%", "50%"]}
          fontSize={["12px", "12px", "15px"]}
        >
          How to trade with us? Steps
          <BodyText>
            1. Register on the website Create an account with necessary info.
          </BodyText>
          <BodyText>
            2. Select gift cards or crypto assets. Login and click what you want
            to trade.
          </BodyText>
          <BodyText>
            3. Get instant equal payment Once you submit trade, you will receive
            instant payment sent to your wallet or your bank account .{" "}
            <BodyText fontWeight={"500"}>
              N:B There’s no limit on the gift card you can trade with us (
              single unit or bulk). Instant payment is ascertained
            </BodyText>
          </BodyText>
        </BodyText>
        <Flex
          w="100%"
          h={["250px", "450px"]}
          justifyContent={"center"}
          flexDirection="column"
          alignItems={"center"}
        >
          <Box
            w={["90%", "90%", "90%", "60%"]}
            height={["100%"]}
            mt="20px"
            ratio={1}
            borderRadius={"10px"}
            overflow={"hidden"}
          >
            <AspectRatio height={"100%"} w={"100%"} ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/X8XHYP5jTw0"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
          <Flex mt="7">
            <BodyText fontSize={["12px", "12px", "14px"]} mr={"3px"}>
              Still not clear?{" "}
            </BodyText>
            <Link
              color={"#7B41FE"}
              textDecoration={"underline"}
              fontWeight={"500"}
              fontSize={["12px", "12px", "14px"]}
            >
              {" "}
              Reach out to our team to learn more
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Trade;
