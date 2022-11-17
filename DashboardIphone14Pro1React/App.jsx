import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone14Pro1 from "./components/IPhone14Pro1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-pro-1)">
          <IPhone14Pro1 iPhone14Pro12Props={iPhone14Pro1Data.iPhone14Pro12Props} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iPhone14Pro12Data = {
    image2: "/img/image-2@2x.png",
    image3: "/img/image-3@2x.png",
    image4: "/img/image-4@2x.png",
    title: "for Chrome",
};

const iPhone14Pro1Data = {
    iPhone14Pro12Props: iPhone14Pro12Data,
};

