import React, { useState } from 'react';
import './App.css';

function ColorPicker() { 
  const [color, setColor] = useState('white');

  function handleColorChange(event) {
    setColor(event.target.value);
  }
  
  return( <div className ="color-picker-container">
              <h1> Color Picker </h1>
              <div className = "color-display " 
                style = {{backgroundColor: color}} >
                  <p> Selected Color: {color} </p>
              </div>
            <label> Select a color (↓)</label>
            <input 
              type = "color" 
              value = {color} 
              onChange = {handleColorChange}
              
               />
         </div>
        
    );
}

export default ColorPicker;
