import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import './SeePost.css'
import Comment from '../Comments/Comment';
const SeePost = () => {
    const {postId}= useParams()
    const [seePost, setSeePost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setSeePost(data))
    },[])
    return (
       
            
            <Container >
                <Row>
                    <Col sm={12}>
                        <Card className='cardStyle'>
                            <CardContent>

                                <Typography variant="h5" component="h2">
                                    Title: {seePost.title}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    Description: {seePost.body}
                                    <br />

                                </Typography> <br/> <hr/>
                           
                        </CardContent>
                        <Container>
                            <Row>
                                <Col className='tbold'sm={4}>Like</Col>
                                <Col className='tbold'sm={4}>Comment</Col>
                                <Col className='tbold'sm={4}>Share</Col>
                            </Row>
                        </Container> <br/>
                            <Comment></Comment>
                        </Card>
                    </Col>
                </Row>
            </Container>
       
    );
};

export default SeePost;