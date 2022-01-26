import './work.css';

export default function Work(props) {
    return (
        <div className="work">
            <span>Occupation: </span>
            {props.occupation}
        </div>
    )
}
