import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/es/Button/Button";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography component={Link} style={{ textDecoration: 'none' }} variant="title" color="inherit" align="left" to="/">
                        Shortener URL
                    </Typography>

                    <div className="Home-grow"/>

                    <Button component={Link} color="inherit" to="/signin">
                        SignIn
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default NavBar;