import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Input,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/AppEements/Footer";
import Header from "../Components/AppEements/Heading";
import BodyText from "../Components/TextElements/BodyText";
import HeadingText from "../Components/TextElements/HeadingText";
import { faqs } from "../model";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import ButtonDiv from "../Components/UIElements/Button";
import WhiteSpace from "../Components/AppEements/WhiteSpace";

function Faq(props) {
  return (
    <Box>
      <Header />
      <Flex
        px={["20px", "20px", "40px", "200px"]}
        py={["20px", "20px", "40px", "20"]}
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        width="100%"
      >
        <HeadingText fontSize="18" fontWeight="300" py="4">
          FAQ's
        </HeadingText>
        <HeadingText
          fontSize={["40px", "40px", "50px", "60"]}
          color="#777575"
          py="2"
          textAlign={"center"}
        >
          Frequently Asked Questions
        </HeadingText>
        <BodyText py="2" color="black" fontWeight="bold" fontSize="17">
          Have questions? we are here to help
        </BodyText>

        <Box w={["100%", "100%", "80%", "50%"]} my="10">
          <Input
            bg="#f5f5f5"
            borderColor={"#f5f5f5"}
            outline="#f5f5f5"
            appearance={"#f5f5f5"}
            borderRadius={"30"}
            height="12"
          />
        </Box>
        <Box w="100%">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box py="7" flex="1" textAlign="left">
                          <HeadingText fontSize="16" fontWeight="bold">
                            {faq.question}
                          </HeadingText>
                        </Box>
                        {isExpanded ? (
                          <AiOutlineMinusCircle fontSize="20px" color="black" />
                        ) : (
                          <AiOutlinePlusCircle fontSize="20px" color="black" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{faq.body}</AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>

      <Flex
        justifyContent={"center"}
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        my="20"
      >
        <Flex
          bg="#f5f5f5"
          w={["90%", "90%", "80%", "70%"]}
          px={["10px", "10px", "10px", "20"]}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={["20px", "20px", "20px", "5"]}
          borderRadius={"20"}
          flexDirection={["column", "column", "column", "row"]}
        >
          <Image src="img5.png" w="20" objectFit={"cover"} />

          <Flex
            flexDirection={"column"}
            ml={["0", "0", "0", "10"]}
            my={["30px", "30px", "20px"]}
          >
            <HeadingText
              fontSize="16"
              textAlign={["center", "center", "center", "left"]}
            >
              Do you still have a question?
            </HeadingText>
            <BodyText
              textAlign={["center", "center", "center", "left"]}
              pr={["0", "0", "0", "20"]}
              fontSize="13"
            >
              <BodyText> You can contact us via </BodyText>
              <BodyText>
                {" "}
                Instagram:{" "}
                <Link href="/https://www.instagram.com/sb_agency_/">
                  sb_agency_
                </Link>
              </BodyText>
              <BodyText>
                {" "}
                Email:
                <Link href="mailto:Sbexchange202211@gmail.com">
                  Sbexchange202211@gmail.com
                </Link>
              </BodyText>
              <BodyText>
                {" "}
                Phone number:
                <Link href="tel:+234 810 776 4537">+234 810 776 4537</Link>
              </BodyText>
            </BodyText>
          </Flex>
          <ButtonDiv fontSize="15" px="20">
            Get in touch
          </ButtonDiv>
        </Flex>
      </Flex>
      <WhiteSpace />
      <Footer />
    </Box>
  );
}

export default Faq;
