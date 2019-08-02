import React from "react"

import { Grid, Card, CardContent, CardActions, Button } from "@material-ui/core";
import { FormControl, TextField, IconButton, InputAdornment, Typography } from "@material-ui/core";
import {Visibility, VisibilityOff, Email, BatteryAlertRounded} from "@material-ui/icons/";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    vcentered:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }
  }));

function LoginBox (){
    const classes = useStyles();

    const [values, setValues] = React.useState({
        password: '',
        email: '',
        showPassword: false,
      });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    
    return (
        <Card>
            <CardContent>
                <Grid container className={classes.vcentered}>
                    <FormControl style={{width: "100%", paddingBottom: "1em"}}>
                        <TextField
                            id="outlined-adornment-email"
                            variant="outlined"
                            type='email'
                            name="email"
                            label="Email"
                            onChange={handleChange('email')}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Email/>
                                </InputAdornment>
                            ),
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            id="outlined-adornment-password"
                            variant="outlined"
                            type={values.showPassword ? 'text' : 'password'}
                            name="password"
                            label="Password"
                            value={values.password}
                            onChange={handleChange('password')}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                    </FormControl>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Button size="large" color="primary" type="submit">
                        Log In
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default LoginBox
