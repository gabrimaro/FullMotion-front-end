export default function Notification ({className='Notification', time='00:00 am', children}) {
    const style = {
        display: "flex",
        flexDirection: "column",
        width: '100%'
    }

    return (
        <div className={className} style={style}>
            <p className="time">{time}</p>
            <span className="notif-text">{children}</span>
        </div>
    )
}