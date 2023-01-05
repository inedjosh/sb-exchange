import { Box } from "@chakra-ui/react";
import React from "react";
import BlogHeading from "../Components/AppEements/Heading";
import Blog from "../Components/AppEements/BlogDetails/Blog";
import Footer from "../Components/AppEements/Footer";
import WhiteSpace from "../Components/AppEements/WhiteSpace";
import { useParams } from "react-router-dom";
import { blogs } from "../model";

function BlogDetails(props) {
  const { id } = useParams();
  console.log(id);

  const blog = blogs.find((blog) => blog.id.toString() === id.toString());

  return (
    <Box>
      <BlogHeading />
      <Blog blog={blog} />
      <WhiteSpace />
      <Footer />
    </Box>
  );
}

export default BlogDetails;
