import { Box, Flex, Image, Text, Hide } from "@chakra-ui/react";
import React from "react";
import BodyText from "../../TextElements/BodyText";
import HeadingText from "../../TextElements/HeadingText";
import Button from "../../UIElements/Button";
import TestimonyCard from "../../UIElements/TestimonyCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      name: "Kunle Abejoye",
      testimony:
        "Payment at SB exchange is swift and fast. The services is the best ",
      img: "img1.png",
    },
    {
      id: 2,
      name: "Ade Adigun",
      testimony:
        "Trading with SB exchange was an awesome experience. They are 100% legit",
      img: "img2.png",
    },
  ];

  return (
    <Flex
      mt="14"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
      position={"relative"}
    >
      <HeadingText
        my={["15px", "10"]}
        textAlign="center"
        px={["30px", "30px", "10px", "0"]}
      >
        What people are saying about us
      </HeadingText>
      <BodyText
        textAlign="center"
        w={["90%", "90%", "80%", "50%"]}
        fontSize={["13px", "13px", "14px"]}
      >
        Reviews from customers who trust our product and process
      </BodyText>
      <Flex
        mt="10"
        bg="linear-gradient(0deg, #FFFFFF 4.47%, rgba(255, 255, 255, 0.46) 30.14%, rgba(255, 255, 255, 0) 44.27%), url(Group 48095496.png);"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={["100vw", "100vw", "100vw", "90vw"]}
          h={"400px"}
        >
          <Hide below="lg">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper"
              autoplay={{ delay: 1000 }}
              speed={15000}
              loop
            >
              <Flex>
                {testimonies.map((item) => (
                  <SwiperSlide>
                    <TestimonyCard>
                      <Flex
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        h={"100%"}
                        py={"10px"}
                        alignItems={"space-between"}
                      >
                        <Flex flexDirection={"column"} w={"100%"}>
                          <Image
                            src={item.img}
                            w={"100%"}
                            objectFit={"cover"}
                          />
                          <Text mt={"10px"}>{item.testimony}</Text>
                        </Flex>
                        <Box
                          mt={"20px"}
                          bg={"#6B3AFB"}
                          w={"fit-content"}
                          px={"20px"}
                          py={"5px"}
                          borderRadius={"20px"}
                        >
                          {" "}
                          {item.name}
                        </Box>
                      </Flex>
                    </TestimonyCard>
                  </SwiperSlide>
                ))}
              </Flex>
            </Swiper>
          </Hide>
          <Hide above="lg">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={-10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper"
              autoplay={{ delay: 1000 }}
              speed={15000}
              loop
            >
              <Flex>
                {testimonies.map((item) => (
                  <SwiperSlide>
                    <TestimonyCard>
                      <Flex
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        px={"10px"}
                        py={"20px"}
                      >
                        <Image src={item.img} />
                        <Text>{item.testimony}</Text>
                        <Box
                          mt={"20px"}
                          bg={"#6B3AFB"}
                          w={"fit-content"}
                          px={"20px"}
                          py={"5px"}
                          borderRadius={"20px"}
                        >
                          {" "}
                          {item.name}
                        </Box>
                      </Flex>
                    </TestimonyCard>
                  </SwiperSlide>
                ))}
              </Flex>
            </Swiper>
          </Hide>
        </Box>
      </Flex>
      <Flex
        bg="#f5f5f5"
        p="10"
        w="100%"
        justifyContent={"center"}
        alignItems="center"
        flexDirection="column"
        position={"relative"}
      >
        <Image
          src="hand1.png"
          position={"absolute"}
          left={["-100px", "-100px", "-120px", "0px"]}
          top={"0"}
          w={["250px"]}
        />

        <Image
          src="dots.png"
          position={"absolute"}
          inset={"0"}
          h={"100%"}
          w={"100vw"}
          zIndex={"20px"}
        />
        <HeadingText
          mb="5"
          textAlign={["center"]}
          fontSize={["45px"]}
          mt={["100px"]}
          px={["30px", "30px", "0"]}
        >
          Start trading with us today
        </HeadingText>
        <Button>Get me started</Button>

        <Hide below="lg">
          <Image
            src="hand2.png"
            position={"absolute"}
            right={["0px"]}
            top={"0"}
            w={["200px"]}
          />
        </Hide>
        <Hide above="lg">
          <Image
            src="hand2mobile.png"
            position={"absolute"}
            right={["0px"]}
            top={"0"}
            w={["120px"]}
          />
        </Hide>
      </Flex>
    </Flex>
  );
};

export default Testimonials;
