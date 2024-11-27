import { ArcElement, Chart as ChartJS, DoughnutController, Legend, Title, Tooltip } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import "../css/Gauge.css";
import "../css/Threshold.css";

// Register required Chart.js components
ChartJS.register(DoughnutController, ArcElement, Title, Tooltip, Legend);


export const Gauge = ({isRunning, elapsedTime, isPaused}) => {
    
    const [latestNumber, setLatestNumber] = useState(0); // Track the latest random number
    const chartRef = useRef(null); // <-- Added: Reference to store the chart instance

    useEffect(() => {
      const intervalId = setInterval(() => {
        const newNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
        setLatestNumber(newNumber); // Update the displayed number
  
        // <-- Added: Update only needleValue2 dynamically without reloading the chart
        if (chartRef.current) {
          chartRef.current.data.datasets[0].needleValue2 = newNumber;
          chartRef.current.update(); // Triggers a re-render for the updated needle
        }
      }, 1000); // Update every 1 second
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    //-------------------------------------------------------------------------------
    const options = {
      responsive: true,
    };
    
    //-----------------------------------------------------Code for Random Number-------------------------------------------------------------------------
    /*

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
            setLatestNumber(newNumber); // Update the displayed number
        }, 1000); // Update every 1 second
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
        }, []);
    //-------------------------------------------------------------------------------
    const options = {
        responsive: true,
    };
    */
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
              cutout: '60%',
              needleValue1: -80, //starting needle (-80 = 0 degrees)
              needleValue2: latestNumber, //needle following range (max is 75 = 155 degrees)

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
                ctx.font = 'bold 70px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'left';
                ctx.fillText(`${needleValue}°`, xCenter + 50, yCenter); 
                ctx.restore();
            }
        }
        
            

        const gaugeLabels = {
            id: 'gaugeLabels',
            afterDatasetsDraw(chart, args, plugins) {
                const { ctx, chartArea: {left, right}} = chart;  
                const yCenter = chart.getDatasetMeta(0).data[0].y;  

                ctx.font = 'bold 35px sans-serif';
                ctx.fillStyle = 'green'; //will also need to automate this based on results
                ctx.textAlign = 'left';
               // ctx.textBaseline = 'middle';
                ctx.fillText('Good', right - 170, yCenter + 140); //can automate this to chnage based on results 

            }
        }
    


        // Config setup
        const config = {
            type: 'doughnut',
            data,
            options: {
                responsive: true,
                aspectRatio: 1.8, //size around chart
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    } 
                }
            
            },
            plugins: [gaugeNeedle1, gaugeNeedle2, gaugeLabels, guageFlowMeter]
        };
        
    
        // Render chart
    const chartInstance = new ChartJS(document.getElementById("myChart"), config);
    chartRef.current = chartInstance; // <-- Added: Store the chart instance in ref

    // Cleanup
    return () => chartInstance.destroy();
  }, []);
      



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

            <div className="chartCard">    {/*******New CHart******************/}
                <div className="chartBox">
                <canvas id="myChart"></canvas>
                </div>
            </div>
            hellow


            
            <div className='graph-container'>   

                <ul>
                    <li>
                        <div className="graph">  {/*******Previous CHart******************/}
      
                        </div>
                    </li>

                    <li>
                                                        {/*******Current Number******************/}
                        {latestNumber !== null && ( 
                        <div className="latestNumber" style={getNumberStyle()}>
                            <h3> {latestNumber}</h3>
                        </div>
                        )}
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
