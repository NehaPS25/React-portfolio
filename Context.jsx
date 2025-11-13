import React, { createContext, useRef } from "react";

// ✅ Create context and export it
export const newcontext = createContext();

export const NewProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);  

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <newcontext.Provider value={{ homeRef, aboutRef, contactRef, scrollTo, projectRef }}>
      {children}
    </newcontext.Provider>
  );
};
