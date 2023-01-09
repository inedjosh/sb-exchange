import {
  ListItem,
  UnorderedList,
  Flex,
  Show,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { navs } from "../../model";
import ButtonDiv from "../UIElements/Button";
import { useLocation, Link, useHref } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

function Header(props) {
  const location = useLocation();
  const [isActive, setIsActive] = useState("");

  const history = useHref();

  useEffect(() => {
    if (location) setIsActive(location.pathname);
  }, [location]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      py={["5"]}
      flex={"1"}
    >
      <Show below="lg">
        <Flex
          colorScheme="teal"
          alignSelf={"flex-end"}
          mt={"15px"}
          mr={"30px"}
          ref={btnRef}
          borderRadius={"0"}
          onClick={onOpen}
          justifyContent={"flex-end"}
          w={"100%"}
        >
          <Icon as={HiOutlineMenu} color={"#5B2DFF"} fontSize={"30px"} />
        </Flex>
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
      </Show>

      <Show above="lg">
        <Flex w={"100%"} alignItems={"center"} mb={"30px"}>
          <UnorderedList
            display={"flex"}
            justifyContent="space-around"
            flex={".7"}
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
          </UnorderedList>
          <Flex
            flex=".25"
            justifyContent={"space-between"}
            alignItems="center"
            pr="20px"
          >
            <Link color="#777575" fontWeight="normal" mr="20" to="/signup">
              Create Account
            </Link>
            <ButtonDiv>
              <Link to="/login">Login</Link>
            </ButtonDiv>
          </Flex>
        </Flex>
      </Show>
    </Flex>
  );
}

export default Header;
