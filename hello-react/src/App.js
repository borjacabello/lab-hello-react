import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Items from './components/Items';
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/image6.png"

function App() {

  const itemImages = {
    declarative: image3,
    components: image4,
    singleway: image5,
    jsx: image6
  }

  const mainStyles= {
      backgroundColor: "darkgrey",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around",
      height: "60%",
      width: "100%"
  }

  return (
    <div id="container">
      <div style={mainStyles}>
        <Header logoImage={image1} menuImage={image2}/>
        <Intro />
      </div>
      
      <Items images={itemImages}/>
    </div>
  );
}

export default App;
