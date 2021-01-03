import React,{useRef,forwardRef,useImperativeHandle} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
//import Particles from "react-tsparticles";
import { makeStyles } from '@material-ui/core/styles';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const useStyles = makeStyles((theme) => ({
    landing :{
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        //background : 'url(https://i.imgur.com/sKjSEvN.jpg)',
        height: '100vh',
        position: 'relative',
        zIndex:3,
        display: 'block',
        '@media only screen and (max-width: 640px)' : {
          height: '565px',
      }
    },
    mainText : {
        fontFamily:'Lato',
        textShadow : '1.5px 1.5px #000000 '
    },
    mainContent: {
        position: 'relative',
        paddingLeft:'8%',
        paddingTop:'15%',
        width:'100%',
        zIndex : 6,
        '@media only screen and (max-width: 640px)' : {
            paddingLeft:'5%',
            paddingTop:'60%',
        }
      },
    mainLandButton:{
        textAlign:'center',
        paddingTop:'2%',
        zIndex : 10,
        '@media only screen and (max-width: 640px)' : {
          paddingTop:'10%',
        }
    },
    socialButton:{
        textAlign:'center',
        paddingTop:'1%',
        zIndex : 10,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
        zIndex : 2
     },
    icon:{
        marginTop:"10px",
        color : "white",
    },
    large: {
      width: 140,
      height: '100%',
      '@media only screen and (max-width: 640px)' : {
        width: 120,
        height: '100%',
      }
    },
    avatar:{
      paddingTop:'6%',
      zIndex : 10,
      '@media only screen and (max-width: 640px)' : {
        paddingTop:'22%',
        textAlign:'center',
      }
    }
}));

export const LandImage = forwardRef((props,ref) => {
  const headerRef = useRef(null)
  const classes = useStyles();
  useImperativeHandle(ref,()=>({
    executeScroll(){
        scrollToRef(headerRef);
    }
  }));
    return(
    <Fade in>
    <Paper className = {classes.landing} square ref ={headerRef} style ={{background : props.item.background,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
    } >
    {/*<Particles style={{position : 'absolute',zIndex:8}}
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
            },
          },
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 250
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "image",
              stroke: {
                width: 3,
                color: "#fff"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src:
                  "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.7,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 50,
              color: "#ffffff",
              opacity: 0.6,
              width: 1
            },
            move: {
              enable: true,
              speed: 5,
              direction: "bottom",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 300,
                rotateY: 1200
              }
            }
          },
          detectRetina: true,
        }}
      />*/}
    <div className={classes.overlay} />
        <Grid alignItems="center" direction="column" container>
            <Grid item xs={12} className = {classes.mainContent}>
                <div>
                    <Hidden xsDown>
                        <Fade in direction = "left" timeout={1000}>
                            <Typography component="h2" variant="h2" color="inherit" className = {classes.mainText}>
                               <strong>{props.item.name}</strong>
                            </Typography>
                        </Fade>
                    </Hidden>
                    <Hidden smUp>
                        <Fade in direction = "left" timeout={1000}>
                            <Typography component="h4" variant="h4" color="inherit" className = {classes.mainText}>
                            <strong>{props.item.name}</strong>
                            </Typography>
                        </Fade>
                    </Hidden>
                    <Fade in direction = "right" timeout={1000}>
                        <Typography component="h6" variant="h6" color="inherit" className = {classes.mainText}>
                          <strong>{props.item.description}</strong>
                        </Typography>
                    </Fade>
                </div>
            </Grid>
            <Grid item xs={12} className = {classes.mainLandButton}>
                  {/*<Hidden xsDown>
                  <Slide in direction = "right" timeout={1000}>
                    <Button size ="large" variant = "outlined" color ="inherit"
                    onClick = {()=>{
                      setBackdrop(true);
                      window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sandeepthakur130197@gmail.com&body=Hey,<Type Your Message!>";
                      setTimeout(()=>{setBackdrop(false)},3000);}}>Hire Me</Button>
                  </Slide>
                    </Hidden>
                    <Hidden smUp>
                    <Slide in direction = "right" timeout={1000}>
                      <Button size ="large" variant = "outlined" color ="inherit"
                      onClick = {()=>{
                        setBackdrop(true);
                        window.location.href = "mailto:sandeepthakur130197@gmail.com";
                        setTimeout(()=>{setBackdrop(false)},3000);}}>Hire Me</Button>
                        </Slide>
                      </Hidden>*/}
            </Grid>
        </Grid>
    </Paper>
    </Fade> 
    );
})