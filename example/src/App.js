import "./App.css";
import ReactBubblyEffectButton from "react-bubbly-effect-button";

const onClick = () => {
  console.log('Clicked')
}

function App() {
  return <div className='container'>
  <ReactBubblyEffectButton text="Click here" color='#fff' bgColor='#ff0081' onClick={onClick} />
  </div>;
}

export default App;
