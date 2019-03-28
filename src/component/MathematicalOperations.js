import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import styles from './MathematicalOperations-style';

class MathematicalOperations extends Component {

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.operationComponent}>
        <h2>COMPONENT</h2>
      </div>
    )
  }
}

export default withStyles(styles)(MathematicalOperations);