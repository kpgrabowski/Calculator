import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import styles from './MathematicalOperations-style';
import OperationView from "./OperationView";

class MathematicalOperations extends Component {

  render(){
    const { classes } = this.props;
    let historyList = <h2>You don't have any history</h2>;

    if(Array.isArray(this.state.history)){
      historyList = this.state.history.map(operation => {
        return <OperationView key={operation.id} operation={operation} />
      })
    }

    return(
      <div className={classes.operationComponent}>
        <h1>YOUR HISTORY:</h1>
        { historyList }
      </div>
    )
  }
}

export default withStyles(styles)(MathematicalOperations);