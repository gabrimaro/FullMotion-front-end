import Notification from "./Notification"

export default function NotifCenter ({className='NotifCenter'}) {
    const style = {
        display: "flex",
        flexDirection: "column",
        width: '500px'
    }

    return (
        <div className={className} style={style}>
            <h2>Notifications</h2>
            <Notification time='9:00 am'>text</Notification>
        </div>
    )
}