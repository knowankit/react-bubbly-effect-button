import React from "react";
import ReactDom from "react-dom";
import ReactBubblyEffectButton from "./react-bubbly-effect-button";

const onClick = () => {
  console.log("Clicked");
};

ReactDom.render(<ReactBubblyEffectButton />, document.getElementById("app"));
