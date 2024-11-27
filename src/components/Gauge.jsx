import { ArcElement, Chart as ChartJS, DoughnutController, Legend, Title, Tooltip } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import "../css/Gauge.css";
import "../css/Threshold.css";

ChartJS.register(DoughnutController, ArcElement, Title, Tooltip, Legend);


export const Gauge = ({isRunning, isPaused}) => {
    
    const [latestNumber, setLatestNumber] = useState(-80); // track of random number - will need to replace with simulated data
    const chartRef = useRef(null); 
    const intervalRef = useRef(null); // Added useRef to store the interval ID

    const [intervalId, setIntervalId] = useState(null); // store interval id for clearing

    useEffect(() => {
        if (isRunning && !intervalId) { // Check if the gauge should be running and not paused
            const newIntervalId = setInterval(() => {
                setLatestNumber((prevNumber) => {
                    // Gradually increase the number between -80 and 75
                    const addNum = Math.floor(Math.random() * 5);
                    const newNumber = Math.min(prevNumber + addNum, 75); // Ensure the number does not exceed 75
                    

                return newNumber;
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
            setLatestNumber(-80); // Reset latest number when stopped
        }

        // Cleanup the interval when the component unmounts
        return () => {
            if (intervalId) clearInterval(intervalRef.current);
        };
    }, [isRunning, isPaused]); // Added dependency array to control re-running based on these props

    
    // --------------------------------------------------Code for updating only needle
    
    //-----------------------------------------------------Code for chart-------------------------------------------------------------------------

    useEffect(() => {
        // Data setup
        const data = {
          labels: ["start", "terrible", "Bad", "Okay", "Good"],
          datasets: [
            {
              label: "ROM Gauge",
              data: [5, 30, 45, 45, 30], //normal range of arm is 0-5 - 150 degrees
              backgroundColor: [
                "rgba(0, 0, 0, 0.2)", //start fully extended -5 - 0 degrees
                "rgba(255, 26, 104, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(0, 0, 0, 1)", //start fully extended -5 - 0 degrees
                "rgba(255, 26, 104, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
              circumference: 185,
              rotation: 175,
              cutout: '50%',
              needleValue1: -80, //starting needle (-80 = 0 degrees) need to raplce with start *************
              needleValue2: latestNumber, //needle following range (max is 75 = 155 degrees) need to replace**********************

            },
          ],
        };

        const gaugeNeedle1 = {  //initializing needed
            id: 'gaugeNeedle1',
            afterDatasetsDraw(chart, args, plugins) { 
                const {ctx, data } = chart;

                ctx.save();
                const xCenter = chart.getDatasetMeta(0).data[0].x
                const yCenter = chart.getDatasetMeta(0).data[0].y
                const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
                const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;

                const widthSlice = ( outerRadius - innerRadius ) / 2;
                const radius = 8;

                const angle = Math.PI / 180;

                const needleValue1 = data.datasets[0].needleValue1;
                const dataTotal = data.datasets[0].data.reduce((a, b) => 
                    a + b, 0);
                const circumference = ((chart.getDatasetMeta(0).data[0].circumference / 
                    Math.PI) / data.datasets[0].data[0]) * needleValue1;


                ctx.translate(xCenter, yCenter)
                ctx.rotate(Math.PI * (circumference + 1.5))

                ctx.beginPath();
                ctx.strokeStyle = 'black';
                ctx.fillStyle = 'black';
                ctx.lineWidth = 1;
                ctx.moveTo(0 - radius, 0);
                ctx.lineTo(0, 0 - innerRadius - widthSlice);
                ctx.lineTo(0 + radius, 0);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, angle * 360, false);
                ctx.fill();

                ctx.restore();


            }
        }

        const gaugeNeedle2 = {
            id: 'gaugeNeedle2',
            afterDatasetsDraw(chart) { 
                const {ctx, data } = chart;

                ctx.save();
                const xCenter = chart.getDatasetMeta(0).data[0].x
                const yCenter = chart.getDatasetMeta(0).data[0].y
                const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
                const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;

                const widthSlice = ( outerRadius - innerRadius ) / 2;
                const radius = 8;

                const angle = Math.PI / 180;

                const needleValue2 = data.datasets[0].needleValue2;
                const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);

                const circumference = ((chart.getDatasetMeta(0).data[0].circumference / 
                    Math.PI) / data.datasets[0].data[0]) * needleValue2;


                ctx.translate(xCenter, yCenter)
                ctx.rotate(Math.PI * (circumference + 1.5))

                ctx.beginPath();
                ctx.strokeStyle = 'black';
                ctx.fillStyle = 'black';
                ctx.lineWidth = 1;
                ctx.moveTo(0 - radius, 0);
                ctx.lineTo(0, 0 - innerRadius - widthSlice);
                ctx.lineTo(0 + radius, 0);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, Math.PI * 2, false); // ctx.arc(0, 0, radius, 0, angle * 360, false);
                ctx.fill();

                ctx.restore();


            },//
        }; //
        
        const guageFlowMeter = {
            id: 'guageFlowMeter',
            afterDatasetsDraw(chart, arg, plugins) {
                const { ctx, data} = chart;
                ctx.save();

                const needleValue = (data.datasets[0].needleValue2 - data.datasets[0].needleValue1);  //this will need to calculate the difference between the needles (needle 2 - needle 1(starting needle))
                const xCenter = chart.getDatasetMeta(0).data[0].x;
                const yCenter = chart.getDatasetMeta(0).data[0].y;

                ctx.save();
                ctx.font = 'bold 50px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'left';
                ctx.fillText(`${needleValue}°`, xCenter + 50, yCenter); 
                ctx.restore();
            }
        }
        
            



        const recordedLabels = {
            id: 'recordedLabels',
            afterDatasetsDraw(chart) {
                const { ctx, chartArea: { left, right } } = chart;
                const yCenter = chart.getDatasetMeta(0).data[0].y;
                const xCenter = chart.getDatasetMeta(0).data[0].x;
        
                // Function to map input value to degrees
                function mapToDegrees(value) {
                    const minInput = -80;
                    const maxInput = 75;
                    const minOutput = 0;
                    const maxOutput = 155;
                    return ((value - minInput) / (maxInput - minInput)) * (maxOutput - minOutput) + minOutput;
                }
        
                // Map the values to degrees
                const extensionDegree = mapToDegrees(data.datasets[0].needleValue1);
                const flexionDegree = mapToDegrees(data.datasets[0].needleValue2);
        
                // Draw the labels
                ctx.font = 'bold 15px sans-serif';
                ctx.fillStyle = 'green'; // Customize this as needed
                ctx.textAlign = 'left';
                ctx.fillText(`Extension: ${extensionDegree.toFixed(1)}°`, xCenter - 250, yCenter - 20);
                ctx.fillText(`Flexion: ${flexionDegree.toFixed(1)}°`, xCenter - 250, yCenter + 20);
            }           
        }
    


        // Config setup
        const config = {
            type: 'doughnut',
            data,
            options: {
                responsive: true,
                aspectRatio: 3, //size around chart
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    } 
                },

            
            },
            plugins: [gaugeNeedle1, gaugeNeedle2, recordedLabels, guageFlowMeter]
        };
        
    
        // Render chart
        const myChart = new ChartJS(document.getElementById("myChart"), config);

    // Cleanup
    return () => myChart.destroy();
  }, [latestNumber, isRunning, isPaused]);
      



  //-----------------------------------------------------Code for Threshold-------------------------------------------------------------------------
  const [highThreshold, setHighThreshold] = useState('');
  const [lowThreshold, setLowThreshold] = useState('');


  const handleHighThresholdChange = (e) => {
    setHighThreshold(e.target.value);
  };
  const handleLowThresholdChange = (e) => {
    setLowThreshold(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

  };


  const getNumberStyle = () => {
    const high = parseFloat(highThreshold);
    const low = parseFloat(lowThreshold);
    
    if (latestNumber === null) return {}; 
    
    if (high && low) {
      if (latestNumber > high ) {
        return { color: 'red' };
      }
      if (latestNumber < low) {
        return { color: 'red' }; 
      }
      return { color: 'green' }; 
    }
    return {}; 
  };


    return (
        <div className="gauge">
            
            <div className='graph-container'>   

                <ul>
                    <li>
                        <div className="graph">  {/*******Previous CHart******************/}
                            <div className="chartCard">    {/*******New CHart******************/}
                                <div className="chartBox">
                                <canvas id="myChart" ></canvas>
                                </div>
                            </div>      
                        </div>
                    </li>

            
                    
                    <li>
                        <div className='ThresholdContainer'> {/*******Threshold Container******************/}
                            <h3>Threshold Input</h3>
                            <form onSubmit={handleSubmit}>

                                <div className='inputGroup'>
                                <input
                                    type="number" 
                                    value={highThreshold} 
                                    onChange={handleHighThresholdChange} 
                                    className='input'
                                    placeholder="Enter high threshold"
                                />
                                </div>


                                <div className='inputGroup'>
                                <input
                                    type="number" 
                                    value={lowThreshold} 
                                    onChange={handleLowThresholdChange} 
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


export default Gauge;
