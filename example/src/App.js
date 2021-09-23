import "./App.css";
import ReactBubblyEffectButton from "react-bubbly-effect-button";
// import "example-component/dist/index.css";

const onClick = () => {
  console.log('Clicked')
}

function App() {
  return <ReactBubblyEffectButton text="Hello World!" color='#fff' bgColor='#ff0081' onClick={onClick} />;
}

export default App;
