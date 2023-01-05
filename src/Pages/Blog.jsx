import { Box } from "@chakra-ui/react";
import React from "react";
import BlogHeading from "../Components/AppEements/Heading";
import Blogs from "../Components/AppEements/Blog/Blogs";
import WeAreReliable from "../Components/AppEements/Blog/WeAreReliable";
import Footer from "../Components/AppEements/Footer";
import NewsLetter from "../Components/AppEements/NewsLetter";

function Blog(props) {
  return (
    <Box>
      <BlogHeading />
      <Blogs />
      <WeAreReliable />
      <NewsLetter />

      <Footer />
    </Box>
  );
}

export default Blog;
