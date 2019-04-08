import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/LoggIn-style'
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import {firebaseApp} from "../firebase";

class LoggIn extends Component{

  constructor(props){
    super(props);

    this.state ={
      name: '',
      password: '',
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  authenticate = (event) => {
    event.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.name, this.state.password)
      .then(() => {
        this.props.changeLoggedIn(true);
      })
      .catch(() => {
        console.log("Ups....");
      })
  };

  render() {
    const { classes } = this.props;
    return(
      <div style={{display: "flex", justifyContent: "center",}}>
        <div>
              <Paper className={classes.root}
               elevation={22}>
                <div>
                    <Typography variant="h6"
                      component="h3">
            Sign In
          </Typography>
          </div>
          <div>
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          </div>
          <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('password')}
            value={this.state.password}
          />
          </div>
          <div>
          <Button variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.authenticate}
          >
            login
          </Button>
          </div>
          <div>
            <Link
              to="/createAccount">
              Create an account </Link>
          </div>
        </Paper>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(LoggIn);