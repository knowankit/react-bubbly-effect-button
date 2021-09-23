import React from "react";
import ReactDom from "react-dom";
import ReactBubblyEffectButton from "./react-bubbly-effect-button";

const onClick = () => {
  console.log('Clicked')
}

ReactDom.render(
  <ReactBubblyEffectButton text="Hello World!" color='#fff' bgColor='#26292c' onClick={onClick} />,
  document.getElementById("app")
);
