import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/pt-sans";
import { theme } from "./theme";
import Index from "./Pages/Index";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Faq from "./Pages/Faq";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Rates from "./Pages/Rates";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
