import React from 'react'
import "../css/modal.css"


export const Modal = () => {
  return (
  <div className='modalContainer'>
    <div className='modal'>
        <form>
            <div className='form-opt'>
                <label htmlFor='Pname'>Patient Full Name</label>
                <input name='Pname' />
            </div>
            <div className='form-opt'>
                <label htmlFor='Pnumber'>Patient Phone Number</label>
                <input name='Pnumber' />
            </div>
            <div className='form-opt'>
                <label htmlFor='Pstatus'>Status</label>
                <select name='Pstats'>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <button type="Psubmit" className='Pbtn'>Add Patient</button>
        </form>

    </div>

  </div>
  )
}
