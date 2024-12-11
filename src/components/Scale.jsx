import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import "../css/liveScale.css";
import "../css/Threshold.css";


// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export const Scale = ({isRunning, elapsedTime, isPaused}) => {

//-----------------------------------------------------Code for chart-------------------------------------------------------------------------
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Sensor Data',
        data: [],
        borderColor: 'rgb(0, 0, 192)',
        fill: true,
      },
    ],
  });

  const [latestNumber, setLatestNumber] = useState(0); // Track the latest random number

  const [status, setStatus] = useState('stopped'); // status: 'started', 'paused', or 'stopped' from buttons on patient profile
  const [intervalId, setIntervalId] = useState(null); // store interval id for clearing


  useEffect(() => {
    if (isRunning && !intervalId) {
      const newIntervalId = setInterval(() => {

        setData((prevData) => {

          const newData = Math.floor(Math.random() * 100); // REPLACE WITH SENSOR DATA

          setLatestNumber(newData); //number to show

          const updatedLabels = [...prevData.labels, elapsedTime].slice(-15); // only shows the last 10 labels
          const updatedData = [...prevData.datasets[0].data, newData].slice(-15); // only shows the last 10 data points

          return {
            labels: updatedLabels,
            datasets: [
              {
                ...prevData.datasets[0],
                data: updatedData,
              },
            ],
          };
        });
      }, 1000); // Update every 1 second

      //----------------------------------------------------------------Code for Start/Pause/Stop----------------------------------------
      setIntervalId(newIntervalId);
    } else if (!isRunning && isPaused) {
      clearInterval(intervalId); // Clear interval when paused
      setIntervalId(null);
    } else if (!isRunning && !isPaused) {
      clearInterval(intervalId); // Clear interval when stopped
      setIntervalId(null);
      setData({ labels: [], datasets: [{ label: 'Sensor Data', data: [], borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.2)', fill: true }] });
      setLatestNumber(0); // Reset latest number when stopped
    }

    // Clean up the interval when the component unmounts
    return ()  => {
      if (intervalId) clearInterval(intervalId); // Cleanup on unmount
    };
  }, [isRunning, isPaused]);
  //--------------------------------------------------------------------------------------------------------------------------------------------------
  const options = {
    responsive: true,
    plugins: {

      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        type: 'category',
        display: false, //turned off, not really pretty (x axis is basically a counter)

      },
      y: {
        min: 0,
        max: 100,

      },
    },
    
  };

  //-----------------------------------------------------Code for Threshold-------------------------------------------------------------------------
  const [highThreshold, setHighThreshold] = useState('');
  const [lowThreshold, setLowThreshold] = useState('');


  // event handler for high/low threshold input change
  const handleHighThresholdChange = (e) => {
    setHighThreshold(e.target.value);
  };
  const handleLowThresholdChange = (e) => {
    setLowThreshold(e.target.value);
  };

  // event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // display alert of threshold values
    //alert(`High Threshold: ${highThreshold}, Low Threshold: ${lowThreshold}`);
  };



  // determine if the latest number is within the threshold range
  const getNumberStyle = () => {
    const high = parseFloat(highThreshold);
    const low = parseFloat(lowThreshold);
    
    if (latestNumber === null) return {}; // if there's no number yet
    
    if (high && low) {
      // check if data is outside the thresholds
      if (latestNumber > high ) {
        return { color: 'red' }; // turn red if outside threshold
      }
      if (latestNumber < low) {
        return { color: 'red' }; // turn red if outside threshold
      }
      return { color: 'green' }; // green otherwise
    }
    return {}; // default styling when thresholds aren't set yet
  };


  return (

    <div className="div">



      <div className='graph-container'>
        <ul>
          <li>
            <div className="linegraph">
              <Line 
                data={data} 
                options={options} 
                />             
            </div>          
          </li>

          <li>
            <div className="numholder">
              {latestNumber !== null && (
                <div className="latestNumber" style={getNumberStyle()}>
                  <h3> {latestNumber}</h3>
                </div>
              )}          
            </div>          
          </li>

          
          <li>
            <div className='ThresholdContainer'>
              <h3>Threshold Input</h3>

              <form onSubmit={handleSubmit}>

                <div className='inputGroup'>
                  <input
                    type="number" // only take in numbers 
                    value={highThreshold} // Bind input to the highThreshold state
                    onChange={handleHighThresholdChange} // update state on input change
                    className='input'
                    placeholder="Enter high threshold"
                  />
                </div>

                <div className='inputGroup'>
                  <input
                    type="number" // only take in numbers 
                    value={lowThreshold} // Bind input to the lowThreshold state
                    onChange={handleLowThresholdChange} // update state on input change
                    className='input'
                    placeholder="Enter low threshold"
                  />
                </div>
              </form>
            
            </div>
          </li>


        </ul>

      </div>

    </div>

    

  );
};

export default Scale;
