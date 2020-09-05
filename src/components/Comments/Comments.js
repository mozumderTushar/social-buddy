import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor:'lightgray',
      marginBottom:'2%'
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      width:'70px',
      height:'70px'
    },
  }));

const Comments = (props) => {
    

    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const {postId, id, name, email, body} = props.comment
    const [image, setImage] = useState({})

     //Image data
     useEffect(() => {
        const url = `https://randomuser.me/api/?results=100`
        fetch(url)
        .then(response => response.json())
        .then(data => setImage(data.results[0].picture.medium))
    },[])


    return (
        <div>

<Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={image} alt=""/>
          </Avatar>
        }
     
        title={name}
        subheader={email}
      />
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
        </div>
    );
};

export default Comments;