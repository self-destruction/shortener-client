import React, { Component } from 'react';
import './HomePage.css';
import NavBar from "./components/NavBar";
import Typography from "@material-ui/core/es/Typography/Typography";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            hash: ""
        };
    }

    // setUsername = username => {
    //     this.setState({username});
    // };
    //
    // setHash = hash => {
    //     this.setState({hash});
    // };

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Typography variant="h2" style={{marginTop: 60}} color="inherit" align="center">
                    Тут будет информация о сайте
                </Typography>
            </React.Fragment>
        );
    }
}

export default HomePage;
