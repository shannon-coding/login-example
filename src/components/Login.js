import React from "react"

import { Link } from "gatsby";

import { Grid, Card, CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {BatteryAlertRounded} from "@material-ui/icons/";
import { makeStyles } from '@material-ui/core/styles';

import LoginBox from './LoginBox';

const useStyles = makeStyles(theme => ({
    content: {
        minHeight: '87vh',
    },
    vcentered:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }
  }));

function Login (){
    const classes = useStyles();
    
    return (
        <Grid 
            direction='column'
            justify="center"
            alignItems='center'
            className={classes.content}
            container
            >
            <Grid 
                direction="row"
                justify="center"
                alignItems="center"
                container>
                <BatteryAlertRounded/>
                <Typography component="h4" variant="h5" style={{paddingBottom: "1em"}}>
                    Log-in to your account
                </Typography>
            </Grid>
            <LoginBox />
            <Card style={{marginTop: "1em"}}>
                <CardContent>
                    <Typography>
                        New to us? <Link to="sign-up">Sign up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Login
