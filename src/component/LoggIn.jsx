import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/LoggIn-style'
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

class LoggIn extends Component{

  state ={
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return(
      <div style={{display: "flex", justifyContent: "center",}}>
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
          />
          </div>
          <div>
          <Button variant="contained"
                  color="primary"
                  className={classes.button}
                  component={Link} to="/"
          >
            login
          </Button>
          </div>
          <div>
            <Link to="/createAccount">Create an account </Link>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(LoggIn);