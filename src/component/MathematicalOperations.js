import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import styles from './MathematicalOperations-style';

class MathematicalOperations extends Component {

  render(){
    const { classes } = this.props;
    let historyList = <h2>You don't have any history</h2>;


    return(
      <div className={classes.operationComponent}>
        <h1>YOUR HISTORY:</h1>
        { historyList }
      </div>
    )
  }
}

export default withStyles(styles)(MathematicalOperations);