import PDFgenerator from '../components/GenerateReport.jsx';
import '../css/Messages.css';

export default function Messages() {

    return (
        <div>
            <h1 className='nHeading'>Documents</h1>

            <div className="scale-container">



                <PDFgenerator/>


            </div>

        </div>
    )
}