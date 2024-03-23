import './App.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './sliderData';

function App() {
 return(
  <div>
    <h1>Image Slider with React.js</h1>
    <br></br>
    <ImageSlider slides ={SliderData}/>
  </div>

 ) 
    

}

export default App;
