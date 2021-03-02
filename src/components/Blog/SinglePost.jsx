import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Head from './head'


export class SinglePost extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        const fetchSinglePost = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.id)
            this.setState({post:data});
        }
        if(this.props.match.params.id) {
            fetchSinglePost();
        }
    }

    renderPost = () => {
        if (this.state.post) {
            return (
                <>
                <Head title={this.state.post.title}/>
                    <Container>
                        <Row>
                            <Col className="my-5">
                                <p className="h3 text-dark">{this.state.post.body}</p>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        } else {
            return (
            <div className="loader">
                <Spinner animation="border" variant="primary" size='lg' />
            </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderPost()}
            </>
        )
    }
}

export default withRouter(SinglePost)
