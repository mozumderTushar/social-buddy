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
      maxWidth: 345,
      display:"inline-block",
      height: 350,
      marginLeft:"8%",
      marginBottom:"3%",
    },
    
  });

const AllPosts = (props) => {
    const {id,title,body} = props.post

    const classes = useStyles();
    return (
        
           <Card  className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {id}
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