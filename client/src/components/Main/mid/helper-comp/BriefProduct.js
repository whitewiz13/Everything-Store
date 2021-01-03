import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
    maxWidth: 300,
    maxHeight : 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export const BriefProduct = (props) =>{

  const classes = useStyles()
  const {product} = props;

  return (
    <Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="https://material-ui.com//static/images/cards/contemplative-reptile.jpg"
					title={product.name}/>
				<CardContent>
					<Typography variant="subtitle2" component="p" style={{fontSize:"16px"}}>
						{product.name}
					</Typography>
					<Typography variant="subtitle2" color="textSecondary" component="p">
						{product.description}
					</Typography>
				</CardContent>
			</CardActionArea>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs ={12} style={{textAlign:"left",marginLeft:"5px"}}>
            <Rating name="read-only" value={2} readOnly />
          </Grid>
          <Grid item xs ={12} style={{textAlign:"left"}}>
            <IconButton aria-label="share">
              <ShareIcon  style={{color:'black'}}/>
            </IconButton>
            <IconButton aria-label="see revies">
              <RateReviewIcon  style={{color:'black'}}/>
            </IconButton>
						<IconButton aria-label="add to cart">
              <ShoppingCartIcon  style={{color:'black'}}/>
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
		</Card>
	)
}
