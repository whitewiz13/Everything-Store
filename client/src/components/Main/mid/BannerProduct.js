import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const BannerProduct = ()=>{
    
    return(
        <React.Fragment>
            <Paper>
                <Typography component = "h4" variant="h4" style = {{textAlign:'center'}}>
                    <strong>Featured Products</strong>
                </Typography>
            </Paper>
        </React.Fragment>)
}