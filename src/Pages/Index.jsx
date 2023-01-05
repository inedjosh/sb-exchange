import { Box, Show } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/AppEements/Footer";
import Header from "../Components/AppEements/Home/Header";
import KnowMore from "../Components/AppEements/Home/KnowMore";
import Listings from "../Components/AppEements/Home/Listings";
import Testimonials from "../Components/AppEements/Home/Testimony";
import Trade from "../Components/AppEements/Home/Trade";

function Index(props) {
  return (
    <Box>
      <Header />
      <Show above="lg">
        <Listings />
      </Show>
      <Trade />
      <KnowMore />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default Index;
