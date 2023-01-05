import { Heading, Box, Image, Flex, Hide } from "@chakra-ui/react";
import React from "react";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";

const KnowMore = () => {
  return (
    <Box
      mt={["70px", "70px", "30px", "32"]}
      px={["20px", "32"]}
      position={"relative"}
    >
      <Image
        src="dots.png"
        position={"absolute"}
        inset={"0"}
        h={"100%"}
        w={"100%"}
      />
      <HeadingText
        my={["15px", "10"]}
        textAlign="center"
        px={["20px", "20px", "30px", "0"]}
      >
        want to know more about who we are?
      </HeadingText>
      <Flex
        bg="linear-gradient(180deg, #7C47FE 0%, #5326FF 100%);"
        borderRadius={"20"}
        overflow="hidden"
        justifyContent="center"
        alignItems={"center"}
        h={["fit-content", "fit-content", "fit-content", "350"]}
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Box w="450" flex={".4"}>
          <Image
            src="lady-with-phone.png"
            w="100%"
            h="350"
            // mb="-20"
            objectFit={"contain"}
          />
        </Box>
        <Flex
          flex={".55"}
          flexDirection={["column", "column", "column", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Hide below="lg">
            <Box width={"100px"}>
              <Image src="divider.png" objectFit={"cover"} />
            </Box>
          </Hide>
          <Hide above="lg">
            <Box
              width={["280px"]}
              mt={["35px"]}
              alignSelf={[null, null, "center"]}
              ml={"55px"}
            >
              <Image src="divider-mobile.png" objectFit={"cover"} />
            </Box>
          </Hide>
          <Box>
            <Flex
              color="#fff"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={["15px", "0", "0"]}
              p={["0", "0", "20px", null]}
            >
              <HeadingText>We are reliable</HeadingText>
              <BodyText
                textAlign={["center"]}
                color="#fff"
                mt="5"
                fontSize={["12px", "12px", "14px"]}
                py={["5px", "5px", "3px", 0]}
                px={["25px", "25px", "40px"]}
              >
                Who we are? We are a reliable and trusted exchange agency.
                Creating a safe space to trade your crypto assets and gift cards
                (btc, eth ,amazon, steam wallet and soon). Instant payment is
                ascertained after conformation of trade
              </BodyText>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default KnowMore;
