// Write your Color component here
import { useState } from "react";

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
}

const Picker = (props) => {
  const [selectedColor, setSelectedColor] = useState("")
  return <>
    <div id="navbar">
      <div>Currently selected: </div>
      <div className={selectedColor}>{selectedColor}</div>
    </div>
    <div id="colors-list">
      <Color color="yellow" setSelectedColor={setSelectedColor} />
      <Color color="red" setSelectedColor={setSelectedColor} />
      <Color color="blue" setSelectedColor={setSelectedColor} />
    </div>
  </>
}


const App = () => {
  return (
    <div id="container">
      
      <Picker />
    </div>
  );
};

export default App;
