import { Image, Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/AppEements/Footer";
import Header from "../Components/AppEements/Heading";
import WhiteSpace from "../Components/AppEements/WhiteSpace";
import BodyText from "../Components/TextElements/BodyText";
import HeadingText from "../Components/TextElements/HeadingText";
import ButtonDiv from "../Components/UIElements/Button";

function Rates(props) {
  return (
    <Box>
      <Header />
      <Flex justifyContent={"center"} alignItems="center">
        <Box
          width={["90%", "90%", "90%", "70%"]}
          h={["150px"]}
          overflow={"hidden"}
          borderRadius={"20"}
        >
          <Image src="rate.png" h={"100%"} w={"100%"} objectFit={"cover"} />
        </Box>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box my="30px" w={["90%", "90%", "90%", "60%"]}>
          <HeadingText fontSize={["20px", "30"]}>Check rates for?</HeadingText>
          <Flex
            border={["1px solid #ccc"]}
            w={["100%", "100%", "70%", "50%"]}
            justifyContent={"space-between"}
            alignItems="center"
            px="3"
            py={["2"]}
            borderRadius={"40"}
            mt="20px"
          >
            <ButtonDiv
              w={["fit-content", null, null]}
              px={["13px", "13px", null]}
            >
              Gift cards
            </ButtonDiv>
            <BodyText>Bitcoin</BodyText>
            <BodyText>USDT</BodyText>
            <BodyText>Ethereum</BodyText>
          </Flex>
          <BodyText color="#5DD662" fontSize="14" fontWeigth="bold" mt="5">
            NB: You are now calculating for gift card (Notice Icon)
          </BodyText>
        </Box>
        <Flex
          flexDirection={"column"}
          w={["100%", "100%", "90%", "60%"]}
          alignItems={["center"]}
          mt="-5"
        >
          <Box w="90%">
            <BodyText fontWeight="bold" pl="7">
              Select gift card
            </BodyText>
            <Input
              bg="#f5f5f5"
              borderColor={"#f5f5f5"}
              outline="#f5f5f5"
              appearance={"#f5f5f5"}
              borderRadius={"30"}
              height="12"
              my="3"
              //   placeholder="inedu joshua"
              w="100%"
            />
          </Box>
          <Box w="90%" my="2">
            <BodyText fontWeight="bold" pl="7">
              Set the country
            </BodyText>
            <Input
              bg="#f5f5f5"
              borderColor={"#f5f5f5"}
              outline="#f5f5f5"
              appearance={"#f5f5f5"}
              borderRadius={"30"}
              height="12"
              my="3"
              //   placeholder="inedu joshua"
              w="100%"
            />
          </Box>
          <Box w="90%" my="2">
            <BodyText fontWeight="bold" pl="7">
              Select reciept
            </BodyText>
            <Input
              bg="#f5f5f5"
              borderColor={"#f5f5f5"}
              outline="#f5f5f5"
              appearance={"#f5f5f5"}
              borderRadius={"30"}
              height="12"
              my="3"
              //   placeholder="inedu joshua"
              w="100%"
            />
          </Box>
          <Box w="90%" my="2">
            <BodyText fontWeight="bold" pl="7">
              Select card range
            </BodyText>
            <Input
              bg="#f5f5f5"
              borderColor={"#f5f5f5"}
              outline="#f5f5f5"
              appearance={"#f5f5f5"}
              borderRadius={"30"}
              height="12"
              my="3"
              //   placeholder="inedu joshua"
              w="100%"
            />
          </Box>
          <Flex my={"40px"}>
            <ButtonDiv px={["40px", "40px", "80px", "8"]}>Calculate</ButtonDiv>
            <ButtonDiv
              px={["40px", "40px", "80px", "8"]}
              bg="rgba(210, 198, 255, 0.63)"
              color="#fff"
              ml="5"
            >
              $809.00
            </ButtonDiv>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        bg={"#f5f5f5"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={["0", "0", "50px", "250px"]}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Flex flexDirection={"column"}>
          <HeadingText py={"10px"}>Read? Start swapping</HeadingText>
          <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
            <ButtonDiv
              px={["40px", null, null]}
              w={["fit-content", null, null]}
              mt={["20px", "20px", 0]}
            >
              Let's go
            </ButtonDiv>
            <BodyText width={"300px"} fontSize={"13px"} ml={["0", "0", "20px"]}>
              Trade your card with SB exchange 24-hour client support Get
              assistance with your trading account around the clock
            </BodyText>
          </Flex>
        </Flex>
        <Box width={"220px"} mt={["20px", "20px", "20px", 0]}>
          <Image src="girls.png" width={"100%"} objectFit={"cover"} />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}

export default Rates;
