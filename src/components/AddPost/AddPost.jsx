import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddPost = (props) => {

    const [isLoading, setIsLoading] = useState(false)

    const addPostHandler = async (e) => {
        e.preventDefault();
        // props.history.replace("/Blog");
        let title = e.target.title.value.trim();
        let body = e.target.body.value.trim();
        setIsLoading(true)
        if(titleValid.isValid && bodyValid.isValid) {
            const res = await sendSubmit({title, body});
            console.log(res);
        }
        setIsLoading(false)
    }

    const sendSubmit = (post) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(post);
            },2000)
        })
    }

    const [titleValid, setTitleValid] = useState({
        touched: false,
        isValid: false,
        errMsg: "",
    });

    const checkTitleValidation = (e) => {
        let val = e.target.value.trim();
        let valids = { ...titleValid };
        valids.touched = true;
        if (val.length === 0) {
            valids.isValid = false
            valids.errMsg = "Title is Required";
        } else if (val.split(" ").length < 3) {
            valids.isValid = false
            valids.errMsg = "Must be More than 3 Words";
        } else if (val.split(" ").length > 10) {
            valids.isValid = false
            valids.errMsg = "Must be Less than 10 Words";
        } else {
            valids.isValid = true;
            valids.errMsg = "";
        }
        setTitleValid(valids);
    }
    const [bodyValid, setBodyValid] = useState({
        touched: false,
        isValid: false,
        errMsg: "",
    });

    const checkBodyValidation = (e) => {
        let val = e.target.value.trim();
        let valids = { ...bodyValid };
        valids.touched = true;
        if (val.length === 0) {
            valids.isValid = false
            valids.errMsg = "Body is Required";
        } else if (val.split(" ").length < 10) {
            valids.isValid = false
            valids.errMsg = "Must be More than 3 Words";
        } else if (val.split(" ").length > 500) {
            valids.isValid = false
            valids.errMsg = "Must be Less than 500 Words";
        } else {
            valids.isValid = true;
            valids.errMsg = "";
        }
        setBodyValid(valids);
    }


    return (
        <Container>
            <Row>
                <Col md={6} lg={4} className="mx-auto card py-4 my-5 bg-dark text-light shadow-lg">
                    <p className="text-center mb-2 text-light h3">Add Post</p>
                    <Form onSubmit={addPostHandler}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control type="text" placeholder="post title" 
                                name="title"
                                onBlur={checkTitleValidation}
                                className={
                                    titleValid.touched && titleValid.isValid ?
                                    "border border-success" :
                                    titleValid.touched && !titleValid.isValid ?
                                    "border border-danger" :""
                                }
                            />
                            {titleValid.errMsg ? (<small className="text-danger p-1">
                                {titleValid.errMsg}
                            </small>) : ""}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Post Description</Form.Label>
                            <Form.Control as="textarea" rows={5} name="body" 
                            onBlur={checkBodyValidation}
                            className={
                                bodyValid.touched && bodyValid.isValid ?
                                "border border-success" :
                                bodyValid.touched && !bodyValid.isValid ?
                                "border border-danger" :""
                            }
                        />
                        {bodyValid.errMsg ? (<small className="text-danger p-1">
                            {bodyValid.errMsg}
                        </small>) : ""}
                    </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                        >
                            {isLoading ? "Loading..." : "Add New Post"}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(AddPost)
