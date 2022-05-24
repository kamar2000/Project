import React, {useReducer } from 'react';
import './App.css';
import { Carousel } from 'bootstrap';
import Slider from './Components/Slider';
import Navbar from './Components/Navbar';
import { Content } from './Components/Content';
import Footer from './Components/Footer';


export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {
  switch (action) {
    case 'increment':
      return state + 1
    default:
      return state
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer, initialState)

  return (
    
      <CountContext.Provider
        value={{countState: count, countDispatch: dispatch }}
      >
        <Navbar />
        <Slider />
        <Content />
        <Footer />
      </CountContext.Provider>
   
  );
}

export default App;
