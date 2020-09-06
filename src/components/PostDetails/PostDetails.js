import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#282c34',
    color: 'lightgray',
    margin: '2%',
    padding: '50px',
    borderRadius: '20px',
    marginBottom: '40px',
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
  },
  comment: {
    borderRadius: '10px'
  },
});


const PostDetails = () => {

  const classes = useStyles();


  const { postId } = useParams()
  const [postDetails, setPostDetails] = useState({});
  const [comment, setComment] = useState([])


  //post data
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
      .then(response => response.json())
      .then(data => setPostDetails(data))
  }, [])

  //comment data
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    fetch(url)
      .then(response => response.json())
      .then(data => setComment(data))
  }, [])


  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            USER ID: {postDetails.userId}
          </Typography>
          <Typography variant="h5" component="h5">
            {postDetails.title}
          </Typography>
          <Typography variant="body2" component="p">
            {postDetails.body}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>

      </Card>

      <Box display="flex" justifyContent="center" m={1} p={1}  >
        <Box p={2} bgcolor="primary.main" color="primary.contrastText" className={classes.comment} >

          <Typography variant="h5" component="h5">
            Comment Section: {comment.length}
          </Typography>
        </Box>
      </Box>
      {
        comment.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
      }
    </div>
  );
};

export default PostDetails;