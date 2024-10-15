export default function DataContainer ({className='DataContainer', title, children}) {
    const style = {
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
    }
    
    return (
        <div className={className} style={style}>
            <h2>{title}</h2>
            {children}
            <p class="more-button">More...</p>
        </div>
    )
}