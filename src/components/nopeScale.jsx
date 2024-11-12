import {
    Chart as ChartJS,
    Legend,
    LinearScale, //y axis
    LineElement,
    PointElement,
    TimeScale,
    Tooltip
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';
import '../css/appointments.css';
import '../css/liveScale.css';

ChartJS.register(
    LineElement,
    TimeScale, //time scale
    LinearScale, //y axis
    PointElement,
    Tooltip,
    Legend
);

export const Scale = ({}) => {

    const data = {
        labels: ['2024-11-10','2024-11-11', '2024-11-12','2024-11-13'],
        datasets: [
            {
                label: '369',
                data: [3, 6, 9, 3.69],
                backgroundColor: 'aqua',
                borderColor: 'black',
                
            }
        ]
    };

    const options = {

        scales:{
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            },
            y: {
                beginAtZero: true
            }
        }
        
    }


    return (

        <div className="appointments">

            <div className="scale">

                <div className="graph">
                    <Line
                        data = {data}
                        options = {options}>

                    </Line>
                </div>

            </div>
            

        </div>
        

    );

};