import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import './Post.css'
import {  Link } from 'react-router-dom';
const Post = (props) => {
    const { title, body, id } = props.post;
    
    
   
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card className='card'>
                            <CardContent>

                                <Typography variant="h5" component="h2">
                                    Title: {title}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    Description: {body}
                                    <br />

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`/post/${id}`}><Button className='btn' size="small">Learn More </Button></Link>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Post;