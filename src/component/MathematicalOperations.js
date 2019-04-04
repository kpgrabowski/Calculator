import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import styles from './MathematicalOperations-style';
import OperationView from "./OperationView";
import {connect} from "react-redux";
import {compose} from "redux";
import {fbase} from "../firebase";

class MathematicalOperations extends Component {

  constructor(){
    super();
    this.state={
    }
  }


  componentDidMount() {
    this.ref = fbase.syncState('calculator/history', {
      context: this,
      state: 'history'
    });
  };

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  };

  removeOperation = (id) =>{
    this.setState({
      history: this.state.history.filter(operation => id!==operation.id)
    })
  };

  addToFavorite = (id) =>{
   console.log("siemanko   " + id);
  };


  render(){
    const { classes } = this.props;
    let historyList = <h2>You don't have any history</h2>;

    if(Array.isArray(this.state.history)){
      historyList = this.state.history.map(operation => {
        return <OperationView key={operation.id}
                              operation={operation}
                              removeOperation={this.removeOperation}
                              addToFavorite={this.addToFavorite}/>
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
    history: state.listOfHistory
  }
};



export default compose(connect(mapStateToProps, null),
  withStyles(styles))(MathematicalOperations);
