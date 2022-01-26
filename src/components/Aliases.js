import './aliases.css'

export default function Aliases(props) {
    return (
        <div className="aliases">
            <span>Aliases:</span>
            {props.names.map((i) => <li key={i}>{i}</li>)}
        </div>
    )
}