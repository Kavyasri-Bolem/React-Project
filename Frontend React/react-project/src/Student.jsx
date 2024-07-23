import propTypes from 'prop-types'

function Student(props){

    return(
        <div className="card">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
    )
}

Student.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    isStudent:propTypes.bool,
}

Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student