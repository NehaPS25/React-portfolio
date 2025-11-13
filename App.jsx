import React from "react";
import { NewProvider } from "./Component/Context";
import Section from "./Component/Section";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <NewProvider>
      <Navbar />
      <Section/>
    </NewProvider>
  );
};

export default App;
