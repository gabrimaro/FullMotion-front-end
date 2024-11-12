
//FILE NOT BEING USED
//Combined to Scale.jsx 


import React, { useState } from 'react';
import "../css/Threshold.css";


export const ThresholdContainer = () => {
  // State variables to store high and low threshold values
  const [highThreshold, setHighThreshold] = useState('');
  const [lowThreshold, setLowThreshold] = useState('');

  // Event handler for high threshold input change
  const handleHighThresholdChange = (e) => {
    // Update the highThreshold state with the new value
    setHighThreshold(e.target.value);
  };

  // Event handler for low threshold input change
  const handleLowThresholdChange = (e) => {
    // Update the lowThreshold state with the new value
    setLowThreshold(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Show an alert with the current threshold values
    alert(`High Threshold: ${highThreshold}, Low Threshold: ${lowThreshold}`);
  };

  return (
    <div className='container'>
      <h3>Threshold Input</h3>
      {/* Form that handles the threshold inputs */}
      <form onSubmit={handleSubmit}>
        {/* Group for the high threshold input */}
        <div className='inputGroup'>
          <label className='label'>High Threshold:</label>
          <input
            type="number" // Only allow numbers for the threshold
            value={highThreshold} // Bind input to the highThreshold state
            onChange={handleHighThresholdChange} // Update state on input change
            className='input'
            placeholder="Enter high threshold"
          />
        </div>

        {/* Group for the low threshold input */}
        <div className='inputGroup'>
          <label className='label'>Low Threshold:</label>
          <input
            type="number" // Only allow numbers for the threshold
            value={lowThreshold} // Bind input to the lowThreshold state
            onChange={handleLowThresholdChange} // Update state on input change
            className='input'
            placeholder="Enter low threshold"
          />
        </div>

        {/* Submit button to trigger the form submission */}
        <button type="submit" className='submitButton'>Submit</button>
      </form>
    </div>
  );
};


export default ThresholdContainer;
