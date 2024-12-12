import jsPDF from 'jspdf';
import React from 'react';
import "../css/gPDF.css";


function PDFgenerator() {
    
    const jspdf = jsPDF('p', 'pt', 'letter')

    const handleSubmit1 = (e) => {
        e.preventDefault()
        const notes = e.target.txt1.value;
        const date = e.target.date.value;
        const frequency = e.target.frequency.value;
        const rating = e.target.number.value;

        const data = {
                callback:function(jspdf) {
                    jspdf.save('patientNotes.pdf')
                },
                margin: [10,10,10,10],
        }

        // Content to include in the PDF
        const content = `
            Patient Notes:
            ${notes || 'N/A'}

            Date: ${date || 'N/A'}
            Frequency: ${frequency || 'N/A'}
            Rating: ${rating || 'N/A'}
        `;
        // Add content to PDF
        jspdf.text(content, 20, 20);

        // Save the PDF
        jspdf.save('patientNotes.pdf');
        //jspdf.html(val,data)
    }

    return(
        <div>
           <h1>hi</h1> 

            <div className="cont">
                <form onSubmit={(e) => handleSubmit1(e)}>
                    <label htmlFor="notes">Notes:</label><br />
                    <textarea 
                        name="txt1" 
                        id="notes" 
                        placeholder="Enter your notes here..." 
                        className=""
                    /><br /><br />

                    {/* Input for Date */}
                    <label htmlFor="date">Date:</label><br />
                    <input 
                        type="date" 
                        name="date" 
                        id="date" 
                        className="" 
                    /><br /><br />

                    {/* Input for Frequency */}
                    <label htmlFor="frequency">Frequency:</label><br />
                    <input 
                        type="number" 
                        name="number" 
                        id="number" 
                        className="" 
                        placeholder="(1-5)"
                    />
                    <select 
                        name="frequency" 
                        id="frequency" 
                        className=""
                    >
                        <option value="">Select Frequency</option>
                        <option value="daily">Day</option>
                        <option value="weekly">Week</option>
                        <option value="monthly">Month</option>
                    </select><br/>
                                
                    <button className='btn'>Generate Notes</button>

                </form>                
            </div>

        </div>
    )

}

export default PDFgenerator;