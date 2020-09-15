
import {Card} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const {postId} = useParams()
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setComment(data)
            })
    },[])
    return (
        <div>
            {
                comment.map(comment =>
                    
                        <Card>
                            <Card.Body>
                                <Card.Title>Name: {comment.name}</Card.Title>
                                <Card.Text>
                                  {comment.body}
                               </Card.Text>
                            </Card.Body>
                        </Card>

                    )
            }
        </div>
    );
};

export default Comment;