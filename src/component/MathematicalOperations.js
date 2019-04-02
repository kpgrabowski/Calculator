import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import styles from './MathematicalOperations-style';
import OperationView from "./OperationView";
import {connect} from "react-redux";
import {compose} from "redux";

class MathematicalOperations extends Component {

  render(){
    const { classes } = this.props;
    let historyList = <h2>You don't have any history</h2>;

    if(Array.isArray(this.props.history)){
      historyList = this.props.history.map(operation => {
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

const mapStateToProps = state => {
  return {
    history: state.history
  }
};



export default compose(connect(mapStateToProps, null),
  withStyles(styles))(MathematicalOperations);
