import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from "./NavBar";
import Typography from "@material-ui/core/es/Typography/Typography";
import {NavLink} from "react-router-dom";
import LockIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/es/Button/Button";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/es/Paper/Paper";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import withStyles from "@material-ui/core/styles/withStyles";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import axios from 'axios';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    button: {
        marginTop: theme.spacing.unit * 3
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        marginTop: theme.spacing.unit * 2
    },
    text: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    form: {
        margin: theme.spacing.unit * 2,
    },
});

class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            sent: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    async handleSubmit () {
        this.setState({ sent: true });

        const { email, password } = this.state.user;

        // console.log('OK Submit');

        // setTimeout(() => { console.log(this.state) }, 1);
        try {
            const response = await axios.post('http://127.0.0.1:8080/api/v1/users/login', { email, password });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
        this.setState({ sent: false });
    };

    render() {
        const { classes } = this.props;
        const { email, password } = this.state.user;
        const { sent } = this.state;

        return (
            <React.Fragment>
                <NavBar />
                <React.Fragment>
                    <CssBaseline />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography variant="h4" gutterBottom marked="center" align="center">
                                Sign In
                            </Typography>
                            <Typography variant="body2" align="center">
                                {'Not a member yet? '}
                                <NavLink to="/signup" variant="underline">
                                    Sign Up here
                                </NavLink>
                            </Typography>
                            <ValidatorForm
                                ref="form"
                                onSubmit={this.handleSubmit}
                                className={classes.form}
                            >
                                <TextValidator
                                    label="Email"
                                    disabled={sent}
                                    onChange={this.handleChange}
                                    name="email"
                                    // type="email"
                                    fullWidth
                                    size="large"
                                    validators={['required', 'isEmail', 'maxStringLength:100']}
                                    errorMessages={['this field is required', 'email is not valid', 'maximum email length - 100']}
                                    value={email}
                                    className={classes.text}
                                />
                                <TextValidator
                                    label="Password"
                                    disabled={sent}
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                    fullWidth
                                    size="large"
                                    validators={['required', 'minStringLength:5', 'maxStringLength:60']}
                                    errorMessages={['this field is required','minimum password length - 5', 'maximum password length - 60']}
                                    value={password}
                                    className={classes.text}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={sent}
                                    fullWidth
                                    color="primary"
                                    className={classes.button}
                                >
                                    {sent ? 'In progress…' : 'Sign In'}
                                </Button>
                            </ValidatorForm>
                        </Paper>
                    </main>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

SigninPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SigninPage);