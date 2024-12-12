import jsPDF from 'jspdf';
import React from 'react';
import "../css/gPDF.css";


function PDFgenerator() {
    
    const jspdf = jsPDF('p', 'pt', 'letter')

    const handleSubmit1 = (e) => {
        e.preventDefault()
        const dnotes = e.target.dnotes.value;
        const pain = e.target.pain.value;
        const snotes = e.target.snotes.value;
        const onotes = e.target.onotes.value;
        const anotes = e.target.anotes.value;
        const plan = e.target.plan.value;
        const timePeriod = e.target.timePeriod.value;
        const pnotes = e.target.pnotes.value;
        // Content to include in the PDF
        const content = `
            Date:___/____/______         Start of Care:___/____/______

            Therapist: Dr. John Johnson
            Patient Name: Jane Doe           Date of Birth: 


            Diagnosis: 
            ${dnotes || 'N/A'}


            Subjective  Pain / Location:  ${pain || 'N/A'} / 10
            ${snotes || 'N/A'}

            # of Treatments: ______      Cancellations:  ________         No Shows: _______


            Objective Findings: 
            ${onotes || 'N/A'}


            Assessment & Goals:
            ${anotes || 'N/A'}


            Plan:  ${plan || 'N/A'}         Time Period: ${timePeriod || 'N/A'}
            ${pnotes || 'N/A'}


            Therapist Signature: __________________     Date: ___/____/_____


        `;
        // Add content to PDF
        jspdf.text(content, 20, 20);

        // Save the PDF
        jspdf.save('SOAP_document.pdf');
        //jspdf.html(val,data)
    }

    return(
        <div className='doc'>


            <div className="cont">
                <div className="formInputs">
                    <h2> SOAP Notes </h2><br></br>
                    <form onSubmit={(e) => handleSubmit1(e)}>
                        {/* Diagnosis */}
                        <label htmlFor="diagnosis">Diagnosis:</label><br />
                        <textarea name="dnotes" id="dnotes" placeholder="Enter diagnosis" /><br /><br />

                        {/* Pain Level */}
                        <label htmlFor="pain">Pain Level (1-10):</label><br />
                        <input type="number" name="pain" id="pain" min="0" max="10" /><br /><br />

                        {/* Subjective Notes */}
                        <label htmlFor="snotes">Subjective Notes:</label><br />
                        <textarea name="snotes" id="snotes" placeholder="Enter subjective notes" /><br /><br />

                        {/* Objective Findings */}
                        <label htmlFor="onotes">Objective Findings:</label><br />
                        <textarea name="onotes" id="onotes" placeholder="Enter objective findings" /><br /><br />

                        {/* Assessment Notes */}
                        <label htmlFor="anotes">Assessment & Goals:</label><br />
                        <textarea name="anotes" id="anotes" placeholder="Enter assessment and goals" /><br /><br />

                        {/* Plan */}
                        <label>Plan:</label><br />
                        <div className="formOps">
                            <input type="radio" name="plan" value="Continue" id="continue" />
                            <label htmlFor="continue">Continue Treatment</label><br />
                        </div>
                        <div className="formOps">
                            <input type="radio" name="plan" value="Discharge" id="discharge" />
                            <label htmlFor="discharge">Discharge</label><br /><br />                            
                        </div>


                        {/* Time Period */}
                        <label htmlFor="timePeriod">Time Period:</label><br />
                        <input type="text" name="timePeriod" id="timePeriod" placeholder="e.g., 1 week, 2 weeks" /><br /><br />

                        {/* Plan Notes */}
                        <label htmlFor="pnotes">Plan Notes:</label><br />
                        <textarea name="pnotes" id="pnotes" placeholder="Enter additional plan notes" /><br /><br />
                        <br/>
                                    
                        <button className='btn1'>Generate Notes</button>

                    </form>                       
                </div>
             
            </div>

        </div>
    )

}

export default PDFgenerator;