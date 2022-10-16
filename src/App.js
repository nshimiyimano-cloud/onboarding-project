
import './App.css';
import BottomPointers from './components/bottom.pointers';
import Header from './components/Header';
import HorizontalStepper from './components/horizontal.steper';
import Titles from './components/Titles';
import Form from './components/Form';
import { useSelector } from 'react-redux';


function App() {
  useSelector(state => state);  //to define state to be able understood in app

  const span = document.querySelectorAll(".stepper span");
  span.forEach(el => {
    el.classList.add("circle");

  })
  return (

    <div className="App">
      <div id="Main" className='main rotate'>
        <Header />

        <HorizontalStepper />
        <Titles />

        <Form />

      </div>
      <BottomPointers />
    </div>


  );


}

export default App;
