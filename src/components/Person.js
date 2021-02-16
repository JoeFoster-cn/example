import Pet from './Pet';

const Person = (props) => {
    return(
        <div>
            <h2>{props.name}: {props.age}</h2>
            <Pet petName = {props.pet} />
        </div>
    )
}

export default Person;