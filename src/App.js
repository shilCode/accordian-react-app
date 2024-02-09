import './App.css';
import Accordian from './components/accordian/index';
import ImageSlide from './components/image-slider';
import RandomColorGenerator from './components/random-color';
import StarRating from './components/star-rating';


function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian/> */}
      {/* Random Color Generator */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating/> */}
      <ImageSlide url={'https://picsum.photos/v2/list?'} limit={10}/>
    </div>
  );
}

export default App;
