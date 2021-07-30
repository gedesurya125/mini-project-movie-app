import { Button } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Footer />
    </div>
  );
};

export default HomePage;
