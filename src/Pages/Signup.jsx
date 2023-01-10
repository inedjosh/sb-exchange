import { Box, Flex, Image, Input, Checkbox, Show } from "@chakra-ui/react";
import React from "react";
import BodyText from "../Components/TextElements/BodyText";
import HeadingText from "../Components/TextElements/HeadingText";
import ButtonDiv from "../Components/UIElements/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Signup(props) {
  return (
    <Box p={["10px", "10px", "20px", "10"]}>
      <Flex justifyContent={"flex-end"} w="100%">
        <Link
          to="/"
          style={{
            color: "#7723FE",
            textDecoration: "underline",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {" "}
          Go back to homepage
        </Link>
      </Flex>
      <Flex flexDirection={["column", "column", "column", "row"]}>
        <Show above="lg">
          <Box flex=".4" h="90vh" overflow={"hidden"} borderRadius="40">
            <LazyLoadImage
              src="reg.png"
              w="100%"
              h="100%"
              objectFit={"cover"}
              alt="registration-image"
            />
          </Box>
        </Show>
        <Flex
          flex=".5"
          flexDirection={"column"}
          ml={["0", "0", "0", "10"]}
          mt="5"
          p={"15px"}
        >
          <HeadingText fontSize="30" fontWeight="bold">
            Get started
          </HeadingText>
          <BodyText fontSize="14" py="5">
            Trade your card with SB exchange 24-hour client support Get
            assistance with your trading account around the clock
          </BodyText>
          <Flex flexDirection={["column"]}>
            <Box w="100%">
              <BodyText fontWeight="bold">Full name</BodyText>
              <Input
                bg="#f5f5f5"
                borderColor={"#f5f5f5"}
                outline="#f5f5f5"
                appearance={"#f5f5f5"}
                borderRadius={"30"}
                height="12"
                my="3"
                placeholder="inedu joshua"
              />
            </Box>
            <Flex
              justifyContent={"space-between"}
              flexDirection={["column", "column", "row"]}
              my="5"
            >
              <Box w={["100%", "100%", "47%"]}>
                <BodyText fontWeight="bold">Email</BodyText>
                <Input
                  bg="#f5f5f5"
                  borderColor={"#f5f5f5"}
                  outline="#f5f5f5"
                  appearance={"#f5f5f5"}
                  borderRadius={"30"}
                  height="12"
                  my="3"
                  placeholder="email@email.com"
                  type="email"
                />
              </Box>
              <Box w={["100%", "100%", "47%"]}>
                <BodyText fontWeight="bold">Phone number</BodyText>
                <Input
                  bg="#f5f5f5"
                  borderColor={"#f5f5f5"}
                  outline="#f5f5f5"
                  appearance={"#f5f5f5"}
                  borderRadius={"30"}
                  height="12"
                  my="3"
                  placeholder="09064372891"
                  type="number"
                />
              </Box>
            </Flex>
            <Box w={["100%", "100%", "100%"]}>
              <BodyText fontWeight="bold">Password</BodyText>
              <Input
                bg="#f5f5f5"
                borderColor={"#f5f5f5"}
                outline="#f5f5f5"
                appearance={"#f5f5f5"}
                borderRadius={"30"}
                height="12"
                my="3"
                placeholder="inedu joshua"
                type={"password"}
              />
            </Box>
            <Flex my="2">
              <Checkbox defaultChecked>
                <BodyText fontWeight="bold">Remeber me</BodyText>
              </Checkbox>
            </Flex>
            <Box my="5">
              <ButtonDiv w="100%">Create Account</ButtonDiv>
              <BodyText fontSize="14" mt="5" textAlign="center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ color: "#7723FE", textDecoration: "underline" }}
                >
                  Login
                </Link>
              </BodyText>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Signup;
