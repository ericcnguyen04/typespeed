export default function Tabs(props:any) {
    return (
        <div className="tabs">
            <h2>
                <a href={props.link}>{props.name}</a>
            </h2>
        </div>
    )
}