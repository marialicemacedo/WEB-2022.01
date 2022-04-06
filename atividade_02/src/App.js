
import './App.css';
import { Hero } from './Hero';
import { Enemy } from './Enemy';
import {World} from './World';
import {Arena} from './Arena';
import lux from './lux.jpg';
import React, { Component } from "react";
import vi from './vi.jpg';
import lulu from './lulu.jpg';
import tristana from './tristana.jpg';
import viego from './viego.jpg';
import morgana from './morgana.jpg';


function App() {
  return (
    <div className="App">
     <World>
       <Arena arena='Arena 01'>
       <Hero nome="Lux" img = {lux}> 
      </Hero>

      <Enemy name="Violet" img ={vi}>
      </Enemy>

       </Arena>
         <Arena arena= 'Arena 02'>
         <Hero nome="Lulu" img = {lulu}> 
      </Hero>

      <Enemy name="Tristana" img ={tristana}>
      </Enemy>
         </Arena>

         <Arena arena ='Arena 03'>
         <Hero nome="Viego" img = {viego}> 
      </Hero>
      <Enemy name="Morgana" img ={morgana}>
      </Enemy>

         </Arena>
      </World> 
    </div>
  );
}

export default App;
