import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import defaultjpg from '../../assets/images/default.jpg'
const Post = (props) => {

    return (
        <>
            <Card style={{ width: '18rem' }} className="mb-5 mx-auto">
                <Card.Img variant="top" src={defaultjpg} />
                <Card.Body>
                    <Card.Title>
                        {props.item.title}
                    </Card.Title>
                    <Card.Text>
                        {props.item.body}
                    </Card.Text>
                    <Link to={`/posts/${props.item.id}`} className="btn btn-primary">Open Post</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Post
