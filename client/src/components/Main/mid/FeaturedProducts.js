import React, {useRef,forwardRef,useImperativeHandle} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BriefProduct} from './helper-comp/BriefProduct';
import { makeStyles } from '@material-ui/core/styles';

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop-60);
} 

const useStyle =  makeStyles((theme) => ({
	mainAbout:{
  	margin : '20px 20px 20px 20px',
    padding : '10px 10px 10px 10px',
    postition :'relative',
    '@media only screen and (max-width: 640px)' : {
    	marginTop : '10px',
      padding : '5px 5px 15px 5px',
      margin : '0 0 0 0',
      borderRadius:'0px',
      borderTop:'none',
    },
  },
  subAbout:{
  	margin : '20px 20px 20px 20px',
        padding : '20px 20px 20px 20px',
        fontFamily : 'Roboto',
        minHeight : '380px',
        '@media only screen and (max-width: 640px)' : {
            marginTop : '10px',
            margin : '0 0 0 0',
            minHeight : '180px',
        },
    },
    subAboutPic:{
        margin : '20px 20px 20px 20px',
        padding : '10px 10px 10px 10px',
        height : '410px',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background : 'url(https://picsum.photos/id/1025/1920/1080)',
        backgroundPosition: 'center top',
        position: 'relative',
        zIndex:3,
        display: 'block',
        '@media only screen and (max-width: 640px)' : {
            margin : '0 0 0 0',
            height : '200px',
        },
    },
}));

const products = [
    {
        name: "LAPTOP",
        description : "NICE SMALL THINGY",
        price : 1000
    },
    {
        name: "PC",
        description : "NICE SMALL PC THINGY",
        price : 3000
    },
    {
        name: "BIG PC",
        description : "NICE BIG PC THINGY",
        price : 5000
    },
    {
        name: "RTX 1080",
        description : "NICE GRAPHICS THINGY",
        price : 8000
    },
    {
        name: "LAPTOP",
        description : "NICE SMALL THINGY",
        price : 1000
    },
    {
        name: "PC",
        description : "NICE SMALL PC THINGY",
        price : 3000
    },
    {
        name: "BIG PC",
        description : "NICE BIG PC THINGY",
        price : 5000
    },
    {
        name: "RTX 1080",
        description : "NICE GRAPHICS THINGY",
        price : 8000
    },
]

export const FeaturedProducts =forwardRef((props,ref) =>{
    const aboutRef = useRef(null);
    const classes = useStyle();

    useImperativeHandle(ref,()=>({
        executeScroll(){
            scrollToRef(aboutRef);
        }
    }));
    
    return(
        <React.Fragment>
            <Paper className = {classes.mainAbout} variant="outlined" ref={aboutRef}>
                <Typography component = "h4" variant="h4" style = {{textAlign:'center'}}>
                    <strong>Featured Products</strong>
                </Typography>
                <Grid container spacing={3} justify="center" wrap="wrap" style={{marginTop:'5px'}}>
                    {products.map((product)=>(
                    <Grid item key={product.description} lg={3} xs ={6}>
                        <BriefProduct product = {product}/>
                    </Grid>
                    ))}
                </Grid>
            </Paper>
        </React.Fragment>
    )
})