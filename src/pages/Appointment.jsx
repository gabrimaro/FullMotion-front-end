import React, { useState } from 'react';
import '../css/appointments.css';

export default function  Appointments() {

    const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthofYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const currentDate = new Date()

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
    const [selectDate, setselectDate] = useState(currentDate)
    const [showEventPopup, setEventPopup] = useState(false)
    const [events, setEvents] = useState([])
    const[eventTime, setEventTime] = useState({hours: '00', minutes: '00'})
    const [eventText, setEventText] = useState('')
    const [editEvent, setEditEvent] = useState(null)



    const daysinMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay()

    const prevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1))
        setCurrentYear((prevYear => currentMonth === 0 ? prevYear - 1 : prevYear))
    }
    const nextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1))
        setCurrentYear((prevYear => currentMonth === 11 ? prevYear + 1 : prevYear))
    }

    const handleDayClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day)
        const today = new Date()

        if (clickedDate >= today || isSameDay(clickedDate, today)) {
            setselectDate(clickedDate)
            setEventPopup(true)
            setEventTime({hours: '00', minutes: '00'})
            setEventText("")
            setEditEvent(null)
        }
        else {
            displ
        }
    }

    const isSameDay = (date1, date2) => {
        return(
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate() 
        )
    }

    const handleEventSubmit = () =>  {
        const newEvent = { 
            id: editEvent ? editEvent.id : Date.now(), //usings the date as a unique identifier to avoid duplications or losing track of appt
            date: selectDate,
            time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`, //takes hours and pads it with leading 0s so theres 2 chars
            text: eventText,     
        }

        let updatedEvents = [...events]
        if(editEvent){
            updatedEvents = updatedEvents.map((event) => 
                event.id === editEvent.id ? newEvent : event,
            ) 
        }
        else {
            updatedEvents.push(newEvent)
        }

        updatedEvents.sort((a, b) => 
            new Date(a.date) - new Date(b.date)) //sorts the dates of the appts
        


        setEvents(updatedEvents)
        setEventTime({hours: '00', minutes: '00'})
        setEventText("")
        setEventPopup(false)
        setEditEvent(null)
    }


    const handleEditEvents = (appt) => {
        setselectDate(new Date(appt.date))
        setEventTime({
            hours: appt.time.split(":")[0],
            minutes: appt.time.split(':')[1],
        })
        setEventText(appt.text)
        setEditEvent(appt)
        setEventPopup(true)
    }

    const handleDeleteEvent = (apptId) => {
        const updatedEvents = events.filter((event) => event.id !== apptId)

        setEvents(updatedEvents)
    }

    const handleTimeChange = (e) => {
        const {name, value} = e.target

        setEventTime((prevTime) => ({...prevTime, [name]: value.padStart(2, '0')}))
    }

    return (
        <div className='container'>
            <div className="calendarContainer">
                <div className="calendar">
                    <h1 className="heading">Calendar</h1>

                    <div className="navigateDate">
                        <h2 className="month">{monthofYear[currentMonth]}</h2>
                        <h2 className="year">{currentYear}</h2>
                        <div className="btns">
                            <i className="bx bx-chevron-left" onClick={prevMonth}></i>
                            <i className="bx bx-chevron-right" onClick={nextMonth}></i>
                        </div>
                    </div>

                    <div className="weekdays">
                        {weekDay.map((day) => <span key={day}>{day}</span>)}
                    </div>
                    <div className="days">
                        {[...Array(firstDayofMonth).keys()].map((_, index) => (
                            <span key={`empty-${index}`} />
                    ))}
                        {[...Array(daysinMonth).keys()].map((day) => (
                            <span 
                            key={day + 1} 
                            className={
                                day + 1 === currentDate.getDate() && 
                                currentMonth === currentDate.getMonth() &&
                                currentYear === currentDate.getFullYear() 
                                ? "currentDay" : " "
                            }
                            onClick={() => handleDayClick(day + 1)}
                            >
                                {day + 1}</span>
                        ))}
                        
                        
                    </div>  
                </div>
                <div className="appointments">
                <h1 className='apptHeader'>Appointments</h1>
                    {showEventPopup && (
                        <div className="event-popup">
                            
                            <div className="time-input">
                                <div className="event-popup-time">Time</div>
                                <input 
                                    type="number" 
                                    name="hours" 
                                    min={0} 
                                    max={24} 
                                    className='hours' 
                                    value={eventTime.hours}
                                    onChange={handleTimeChange}/>
                                <input 
                                    type="number" 
                                    name="minutes" 
                                    min={0} 
                                    max={24} 
                                    className='minutes' 
                                    value={eventTime.minutes}
                                    onChange={handleTimeChange}/>
                            </div>

                            <textarea 
                                placeholder='Enter Apppointment Details (Max 100 Characters)' 
                                value={eventText} onChange={(e)=> {
                                    if(e.target.value.length <= 100) {
                                        setEventText(e.target.value)
                                    }
                                }}>    
                            </textarea>
                            <button className='event-popup-btn' onClick={handleEventSubmit}>
                                {editEvent ? "Update" : "Add Appointment"}
                            </button>
                            <button className='close-event-popup' onClick={() => setEventPopup(false)}>
                                <i className="bx bx-x"></i>
                            </button>
                        </div>
                    )}
                    {
                    events.map((event, index) => (
                        <div className="event" key={index}> 
                            <div className="event-date-wrapper">
                                <div className="event-date"> 
                                    {`${monthofYear[event.date.getMonth()]} 
                                    ${event.date.getDate()}, 
                                    ${event.date.getFullYear()}`} 
                                </div>
                                <div className="event-time"> {event.time}</div>
                            </div>
                            <div className="event-text"> {event.text}</div>
                            <div className="event-btns">
                                <i className="bx bxs-edit-alt" onClick={() => handleEditEvents(event)}></i>
                                <i className="bx bxs-message-alt-x" onClick={() => handleDeleteEvent(event.id)}></i>
                            </div>
                        </div>                        
                    ))}

                </div>

            </div>
        </div>
        
    );

}

