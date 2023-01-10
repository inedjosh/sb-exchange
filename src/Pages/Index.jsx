import { Box, Icon, Show, Link } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/AppEements/Footer";
import Header from "../Components/AppEements/Home/Header";
import KnowMore from "../Components/AppEements/Home/KnowMore";
import Listings from "../Components/AppEements/Home/Listings";
import Testimonials from "../Components/AppEements/Home/Testimony";
import Trade from "../Components/AppEements/Home/Trade";
import { IoLogoWhatsapp } from "react-icons/io";

function Index(props) {
  return (
    <Box>
      <Header />
      <Show above="lg">
        <Listings />
      </Show>
      <Box position={"absolute"} zIndex={10}>
        <Link target="_blank" href="https://wa.link/fxslvr">
          <Icon
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            as={IoLogoWhatsapp}
            w={["80px"]}
            h={["80px"]}
            color={"#25D366"}
            position={"fixed"}
            bottom={"40px"}
            right={"15px"}
          />
        </Link>
      </Box>
      <Trade />
      <KnowMore />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default Index;
