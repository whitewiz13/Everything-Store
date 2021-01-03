import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Slide from '@material-ui/core/Slide';
import Drawer from '@material-ui/core/Drawer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles,fade} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      fontFamily : 'Lato'
    },
    drawerPaper: {
        width: '60%',
    },
    appBar:{
        background: 'transparent',
        boxShadow:'none',
        color : 'white',
        height:'60px',
        transition: theme.transitions.create(['background-color'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
          }),
        '@media only screen and (max-width: 640px)' : {
            height:'54px',
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
    appBarScrolled : {
        backgroundColor: 'white',
        color : 'black',
        transition: theme.transitions.create(['background-color'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
          })
    },
    menuButton: {
        marginRight: '-5px',
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '70%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '50%',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '100ch',
        },
      },
}));

export const Header = (props)=>{
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0});
    //const trigger2 = useScrollTrigger();
    const trigger2 = false;
    const classes = useStyles();

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    
    const handleListItemClick = (event, index) => {
        setDrawerOpen(false);
        if(index === 0){
            props.scrollTo("About");
        }else if(index === 1){
            props.scrollTo("Edu");
        }else if(index === 2){
            props.scrollTo("Skill");
        }else if(index === 3){
            props.scrollTo("Products");
        }else if(index===4){
            //props.setBackDrop(true);
            //window.location.href = "https://blog.sandeepthakur.co"
            props.scrollTo("Blog");
        }else{
            props.scrollTo("Contact");
        }
    };

    return(
        <div>
            <Slide appear={false} direction="down" in={!trigger2}>
                <AppBar position="fixed"  className={`${classes.appBar} ${
                    trigger === false ? '' : classes.appBarScrolled
                    }`} >
                    <Toolbar variant = 'dense' style={{marginTop:'5px'}}>
                        <Slide in timeout={800}>
                            <Typography variant="h5" className={classes.title}>
                                <strong>TES</strong>
                            </Typography>
                        </Slide>
                        <Slide in timeout={800}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search the store…"
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}/>
                        </div>
                        </Slide>
                        <Hidden xsDown>
                            <Slide in direction = "down" timeout={600}>
                                <div>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("About")}}>Home</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Products")}}>Products</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Skill")}}>Search</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Blog")}}>Blog</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Contact")}}>FAQ</Button>
                                </div>
                            </Slide>
                        </Hidden>
                        <Hidden smUp>
                            <Slide in direction = "down" timeout={600}>
                                <div>
                                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                        onClick={handleDrawerOpen}>
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                            </Slide>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Slide>
            
            <Drawer
                anchor="bottom"
                open={drawerOpen}
                onClose = {()=>{setDrawerOpen(false)}}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ExpandMoreIcon style={{ fontSize: 20 ,color:'black'}}/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 0)}>
                        <ListItemText primary="About Me" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 1)} >
                        <ListItemText primary="Education" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemText primary="Skills" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemText primary="Projects" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 4)}>
                        <ListItemText primary="Blog" style={{color:'black'}}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 5)}>
                        <ListItemText primary="Contact" style={{color:'black'}}/>
                    </ListItem>
              </List>
            </Drawer>
        </div>)
}