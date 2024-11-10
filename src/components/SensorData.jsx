export default function SensorData ({className='SensorData', title, children}) {
    const style = {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: '100%'
    }

    return (
        <div className={className} style={style}>
            <p className='col1'>{title}</p>
            <span className='col2'>{children}</span>
        </div>
    )
}