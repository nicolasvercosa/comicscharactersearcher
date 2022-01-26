
import './biography.css'

export default function Biography(props) {
    return (
        <div className="bio">

            <div><span>Full name: </span>{props.full_name}</div>
            <div><span>Alter egos: </span>{props.alter_egos}</div>
            <div><span>Birthplace: </span>{props.place_of_birth}</div>
            <div><span>Publisher: </span>{props.publisher}</div>
            <div><span>First appearance: </span>{props.first_appearance}</div>


        </div>

    )
}