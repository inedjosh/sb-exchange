import {
  Box,
  Image,
  UnorderedList,
  ListItem,
  Hide,
  Input,
  Show,
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { navs } from "../../../model";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";
import ButtonDiv from "../../UIElements/Button";
import { Link, useLocation, useHref } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Header(props) {
  const [isActive, setIsActive] = useState("");
  const location = useLocation();

  // const [isOpen, setIsOpen] = useState(false);

  const history = useHref();

  useEffect(() => {
    if (location) setIsActive(location.pathname);
  }, [location]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      display={["null", "flex"]}
      flex="1"
      justifyContent="space-between"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Flex
        flex={["1", "1", "1", ".45"]}
        justifyContent={["flex-start", "flex-start", "flex-start", "flex-end"]}
        alignItems={["flex-start", "flex-end"]}
        flexDirection={["column", "column", "column", "row"]}
        bg={["linear-gradient(180deg, #8066FF 0%, #7B41FE 100%)"]}
      >
        <Show below="lg">
          <Box></Box>

          <Box
            colorScheme="teal"
            alignSelf={"flex-end"}
            mt={"15px"}
            mr={"30px"}
            ref={btnRef}
            borderRadius={"0"}
            onClick={onOpen}
          >
            <Icon as={HiOutlineMenu} color={"#fff"} fontSize={"30px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody>
                <UnorderedList
                  display={["flex"]}
                  justifyContent="space-around"
                  w="100%"
                  alignItems="center"
                  py="5"
                  flexDirection={"column"}
                >
                  {navs.map((nav) => (
                    <ListItem
                      key={nav.id}
                      color={isActive === nav.link ? "#5B2DFF" : "#777575"}
                      textDecoration={isActive === nav.link ? "underline" : ""}
                      fontWeight="normal"
                      listStyleType={"none"}
                      _hover={{ color: "#5B2DFF" }}
                      transition="150ms ease"
                      cursor="pointer"
                      py={"20px"}
                    >
                      <Link fontSize={"17px"} to={nav.link}>
                        {nav.name}
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </DrawerBody>

              <DrawerFooter>
                <Flex w={"100%"} justifyContent={"center"}>
                  <ButtonDiv px={"30px"}>
                    <Link to="/login">Login</Link>
                  </ButtonDiv>
                  <Button
                    ml={"15px"}
                    border={"1px solid #8482FF"}
                    bg={"#fff"}
                    px={"30px"}
                    color={"#8482FF"}
                    borderRadius={"30px"}
                    py={"25px"}
                  >
                    <Link color={"#8482FF"} to="/signup">
                      Signup
                    </Link>
                  </Button>
                </Flex>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"15px"}
            mt={"25px"}
          >
            <HeadingText
              fontSize="50px"
              textAlign={"center"}
              fontWeight="400"
              mt="20px"
              color={"#fff"}
            >
              Swap crypto and your gift cards easily
            </HeadingText>
            <BodyText
              py="4"
              fontSize={["13px", "13px", "14px"]}
              textAlign={"center"}
              color={"#fff"}
              px={["20px", "20px", "100px"]}
            >
              Trade your bitcoins and get paid to your bank account instantly.
              No stress Why settle for less when you can have more, sign up
              today and enjoy the sweetest rates
            </BodyText>
          </Flex>
        </Show>
        <Box
          width={["100%", null, "80%"]}
          display={"flex"}
          justifyContent={"flex-end"}
          mt={["15px", "10px", "0"]}
        >
          <Image
            src="hero-img.png"
            w={["85%", null, null, "90%"]}
            alignSelf="flex-end"
            display="flex"
          />
        </Box>
      </Flex>
      <Flex
        flex=".55"
        flexDirection={"column"}
        bg={"#fff"}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        <Show above="lg">
          <Box w="100%">
            <UnorderedList
              display={["flex"]}
              justifyContent="space-around"
              w="100%"
              alignItems="center"
              py="5"
            >
              {navs.map((nav) => (
                <ListItem
                  key={nav.id}
                  color={isActive === nav.link ? "#5B2DFF" : "#777575"}
                  textDecoration={isActive === nav.link ? "underline" : ""}
                  fontWeight="normal"
                  listStyleType={"none"}
                  _hover={{ color: "#5B2DFF" }}
                  transition="150ms ease"
                  cursor="pointer"
                >
                  <Link to={nav.link}>{nav.name}</Link>
                </ListItem>
              ))}

              <ButtonDiv
                bg={" linear-gradient(135deg, #8482FF 0%, #7723FE 100%);"}
              >
                <Link to="/login">Login</Link>
              </ButtonDiv>
            </UnorderedList>
          </Box>
        </Show>
        <Flex
          p={"10"}
          g={"#fff"}
          flexDirection={"column"}
          justifyContent={["center", "center", "center", "flex-start"]}
          alignItems={["center", "center", "center", "flex-start"]}
          bg={"#fff"}
          w={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent="flex-start"
            border="1px"
            borderColor="gray.200"
            width={"fit-content"}
            px={["40px", "5"]}
            py={["7px", "1"]}
            borderRadius={"20"}
            my={["15px"]}
          >
            <BodyText>App coming soon🥳</BodyText>
          </Box>
          <Hide below="lg">
            <HeadingText fontSize="70" fontWeight="400" pr="20">
              Swap crypto and your gift cards easily
            </HeadingText>
            <BodyText py="4" pr="20" fontSize={["13px", "13px", "14px"]}>
              Trade your bitcoins and get paid to your bank account instantly.
              No stress Why settle for less when you can have more, sign up
              today and enjoy the sweetest rates
            </BodyText>
          </Hide>
          <Flex
            bg={["#fff", "#fff", "#F5F5F5"]}
            p="2"
            flexDirection={["column", "column", "row"]}
            borderRadius={["40px", "40"]}
            w={["95vw", "80%"]}
          >
            <Input
              bg="#F5F5F5"
              outline={"#f5f5f5"}
              border="#F5F5F5"
              appearance={"#f5f5f5"}
              placeholder="leo@email.com"
              w={["100%", null]}
              borderRadius={"40px"}
            />
            <ButtonDiv
              mt={["10px", null, "0"]}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Join waitlist
            </ButtonDiv>
          </Flex>
          <Flex mt="5">
            <Box>
              <HeadingText fontSize={["40px"]} fontWeight={["normal"]}>
                10M+
              </HeadingText>
              <BodyText fontSize="12 ">Successful exchanges</BodyText>
            </Box>
            <Box ml="10">
              <HeadingText fontSize={["40px"]} fontWeight={["normal"]}>
                160+
              </HeadingText>
              <BodyText fontSize="12">Token swaps</BodyText>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
