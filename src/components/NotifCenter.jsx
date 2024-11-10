import Notification from "./Notification"

export default function NotifCenter ({className='NotifCenter'}) {
    const style = {
        display: "flex",
        flexDirection: "column"
    }

    return (
        <div className={className} style={style}>
            <h2>Notifications</h2>
            <div className="notif-scroll" style={style}>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
                <Notification time='9:00 am'>text</Notification>
            </div>
        </div>
    )
}