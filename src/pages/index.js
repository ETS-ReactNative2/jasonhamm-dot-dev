import * as React from "react";
import ContactForm from "../components/ContactForm/Index";
import Landing from "../components/Landing/Index";
import Projects from "../components/Projects/Index";
import About from "../components/About/Index";
import Tools from "../components/Tools/Index";
import { IndexContainer } from "../components/Index.styled";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Home" />
      <Landing></Landing>
      {/* // TODO: temporarily disable projects until projects are ready */}
      {/* <Projects></Projects> */}
      <IndexContainer>
        <About></About>
        <Tools></Tools>
        <ContactForm></ContactForm>
      </IndexContainer>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
