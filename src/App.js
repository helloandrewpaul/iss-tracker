import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route exact path="/">
        <Homepage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
