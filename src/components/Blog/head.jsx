import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const head = (props) => {
    return (
        <Jumbotron className="head d-flex justify-content-center align-items-center">
            {props.title ? <p className="display-4 text-light text-center">{props.title}</p> : <p className="display-3 text-light">
                Hello Mu9tafa
            </p>}
        </Jumbotron>
    )
}

export default head
