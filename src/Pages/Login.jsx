import {
  Link,
  Box,
  Flex,
  Image,
  Input,
  Checkbox,
  Show,
} from "@chakra-ui/react";
import React from "react";
import BodyText from "../Components/TextElements/BodyText";
import HeadingText from "../Components/TextElements/HeadingText";
import ButtonDiv from "../Components/UIElements/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Login(props) {
  return (
    <Box p="10">
      <Flex justifyContent={"flex-end"} w="100%">
        <Link
          color="#5326FF"
          fontSize={"13"}
          textDecorationLine={"underline"}
          fontWeight={"500"}
          textAlign="right"
          alignSelf={"flex-end"}
          display="block"
          href="/"
        >
          {" "}
          Go back to homepage
        </Link>
      </Flex>
      <Flex flexDirection={["column", "column", "column", "row"]}>
        <Show above="lg">
          <Box flex=".4" h="90vh" overflow={"hidden"} borderRadius="40">
            <LazyLoadImage
              src="login.png"
              w="100%"
              h="100%"
              objectFit={"cover"}
              alt="login-description"
            />
          </Box>
        </Show>
        <Flex
          flex=".5"
          flexDirection={"column"}
          ml={["0", "0", "0", "10"]}
          mt="5"
          justifyContent={"space-around"}
          p={"0"}
        >
          <Box>
            <HeadingText fontSize="30" fontWeight="bold">
              Welcome Back
            </HeadingText>
            <BodyText fontSize="14" py="5">
              Trade your card with SB exchange 24-hour client support Get
              assistance with your trading account around the clock
            </BodyText>
          </Box>
          <Flex flexDirection={"column"}>
            <Box w="100%">
              <BodyText fontWeight="bold">Email Address</BodyText>
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
            <Box w="100%">
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
                type="password"
              />
            </Box>

            <Flex my="2" justifyContent={"space-between"} alignItems="center">
              <Checkbox defaultChecked>
                <BodyText fontWeight="bold">Remeber me</BodyText>
              </Checkbox>
              <Link
                color="#5326FF"
                fontSize={"13"}
                textDecorationLine={"underline"}
                fontWeight={"500"}
                textAlign="right"
                alignSelf={"flex-end"}
                display="block"
              >
                {" "}
                Forgot Password
              </Link>
            </Flex>
            <Box my="5">
              <ButtonDiv w="100%">Login</ButtonDiv>
              <BodyText fontSize="14" mt="5" textAlign="center">
                Dont have an account?{" "}
                <Link href="/signup" color="#7723FE">
                  Register
                </Link>
              </BodyText>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
