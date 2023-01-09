import {
  Box,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import HeadingText from "../TextElements/HeadingText";
import BodyText from "../TextElements/BodyText";

const Footer = () => {
  const navOne = [
    {
      id: 1,
      link: "/",
      name: " Jonco street karu city college \n FCT Abuja",
    },
  ];
  const navTwo = [
    {
      id: 1,
      link: "tel:+2348107764537",
      name: " Phone: +234 810 776 4537 ",
    },
    {
      id: 2,
      link: "mailto:Sbexchange202211@gmail.com",
      name: " Email: Sbexchange202211@gmail.com",
    },
  ];
  const socials = [
    // {
    //   id: 1,
    //   link: "/",
    //   name: "Facebook",
    //   icon: FaFacebookF,
    // },
    // {
    //   id: 2,
    //   link: "/",
    //   name: "Twitter",
    //   icon: IoLogoTwitter,
    // },
    {
      id: 3,
      link: "/https://www.instagram.com/sb_agency_/",
      name: "Instagram",
      icon: AiOutlineInstagram,
    },
  ];

  return (
    <Flex
      flexDirection="column"
      p={["30px 20px", "30px 20px", "20"]}
      bg="linear-gradient(180deg, #5F30FF 0%, #5B2DFF 100%);"
    >
      <Flex flexDirection={["column", "column", "row"]}>
        <Box flex={[".4", ".4", ".3", ".3"]} mt={"-15px"}>
          <HeadingText color="#fff">SB exchange</HeadingText>
          {/* <Image src={"sb-logo.jpeg"} /> */}
          <BodyText color="#fff" py={["10px"]} fontSize={"13"}>
            SB Exchange Trade your bitcoins and get paid to your bank account
            instantly. No stress Why settle for less when you can have more,
            sign up today and enjoy the sweetest rates Terms of use Privacy
            policies
          </BodyText>
        </Box>
        <Flex
          flex={[".6", ".6", ".7", ".7"]}
          flexDirection={["column", "column", "row"]}
          justifyContent="space-around"
        >
          <Box py={["10px", "10px", "0"]} px={["0", "0", "30px"]}>
            <HeadingText color="#F9EC7D" fontSize="18">
              Contact
            </HeadingText>
            <UnorderedList>
              {navTwo.map((item) => (
                <ListItem
                  key={item.id}
                  py="1"
                  listStyleType={"none"}
                  ml="-4"
                  pl="0"
                  fontSize={"14"}
                >
                  <Link color="#fff" href={item.link}>
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box py={["10px", "10px", "0"]} px={["0", "0", "30px"]}>
            <HeadingText color="#F9EC7D" fontSize="18">
              Address
            </HeadingText>
            <UnorderedList>
              {navOne.map((item) => (
                <ListItem
                  key={item.id}
                  py="1"
                  listStyleType={"none"}
                  ml="-4"
                  pl="0"
                  fontSize={"14"}
                >
                  <Link color="#fff" href={item.link}>
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box py={["10px", "10px", "0"]}>
            <HeadingText color="#F9EC7D" fontSize="18">
              Social
            </HeadingText>
            <UnorderedList>
              {socials.map((item) => (
                <ListItem
                  key={item.id}
                  py="1"
                  listStyleType={"none"}
                  pl="0"
                  fontSize={"14"}
                  ml="-4"
                >
                  <Icon as={item.icon} color="#fff" mr="2" />
                  <Link color="#fff" href={item.link}>
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
      <Flex
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        mt={["20px", "20px", "20px", "20"]}
        justifyContent={"space-between"}
        py={["10px", "0"]}
      >
        <BodyText fontSize={12} color="#fff">
          {" "}
          Copyright © 2022
        </BodyText>
        <Flex
          flexDirection={["column", "column", "row"]}
          flex={[".3", ".3", ".5", ".3"]}
          justifyContent={"space-between"}
          py={["10px", "0", "0"]}
        >
          <Link py={["10px", "0", "0"]} fontSize={12} color="#fff">
            Terms & Condition
          </Link>
          <Link py={["10px", "0", "0"]} fontSize={12} color="#fff">
            {" "}
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
