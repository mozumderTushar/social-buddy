import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    display: "inline-block",
    height: 340,
    margin: "3%",
  },

});

const AllPosts = (props) => {
  const { userId, id, title, body } = props.post

  const classes = useStyles();
  return (

    //display all post
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="p" component="p">
            USER ID: {userId}
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            ID: {id}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`posts/${id}`}><Button size="small" variant="contained" color="primary">
          See More
            </Button></Link>
      </CardActions>
    </Card>

  );
};

export default AllPosts;