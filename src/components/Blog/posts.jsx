import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Post from './post';

export class posts extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        const fetchData = async () => {
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
                this.setState({ posts: data })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

        // fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => {
        //     this.setState({posts:res})
        //     console.log(this.state.posts)
        // })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 className="h3 text-primary border-bottom pb-4 mb-5">Latest Posts</h2>
                    </Col>
                </Row>
                <Row>
                    {this.state.posts.length === 0 ? <div className="loader">
                        <Spinner animation="border" variant="secondary" size='lg' />
                    </div> :
                        this.state.posts.map(item => {
                            return (
                                <Col md={6} lg={4} key={item.id}>
                                    <Post
                                        item={item}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default withRouter(posts)
