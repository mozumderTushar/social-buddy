import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'#282c34',
      color:'lightgray'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const PostDetails = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const {postId} = useParams()
    const [postdetails, setPostDetails] = useState({});
    const [comment, setComment] = useState([])


    //post data
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setPostDetails(data))
    },[])

    //comment data
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    },[])

   
    return (
<div> 
             <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
        User ID: {postdetails.userId}
        </Typography>
        <Typography variant="h5" component="h2">
        {postdetails.title}
        </Typography>
        <Typography className={classes.pos} >
        ID: {postdetails.id}
        </Typography>
        <Typography variant="body2" component="p">
        {postdetails.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

    </Card>
    <h2>Comments Section</h2>
    {
         comment.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
    }

    </div>   
    );
};

export default PostDetails;