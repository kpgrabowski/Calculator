import React, {Component} from 'react';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from '../styles/Calculator-style';
import {compose} from "redux";
import {connect} from "react-redux";
import uuid from 'uuid';
import { fbase } from '../firebase';

class Calculator extends Component {

  constructor(props){
    super(props);

    this.state = {
      score: [],
      type: '',
    };
  };



  componentDidMount() {
    this.ref = fbase.syncState('calculator/history', {
      context: this,
      state: 'history'
    });
  };

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  };


  handleClear = () => {
    this.setState({
      score: [],
    })
  };

  handleSave = (operation) => {
      this.props.addToHistory(operation);
      this.setState({
        history: Array.isArray(this.state.history) ?
          [...this.state.history, operation]:
          [operation]
      })
  };


  handleButtonNumber = (num) => {
      return () => {
        this.setState({
          score: this.state.score.concat(num),
        })
      };
    };

  returnButtonElement = (element) => {
    const {classes} = this.props;
    return  <Grid item xs={3}>
      <Button variant="contained"
              className={classes.buttonStyle}
              onClick={this.handleButtonNumber(element)}>
        {element}</Button>
    </Grid>;
  };

    createToString = () => {
     return this.state.score.join('');
    };

  handleDot = () =>{
    let dot = ['.'];

    this.setState({
      score: this.state.score.concat(dot),
    })
  };

  handleSignOfActionDivide = () =>{
    let divide = [" / "];
    this.setState({
      score: this.state.score.concat([divide]),
      type: 'DIVIDE'
    })
  };

  handleSignOfActionDrubbing = () =>{
    let drubbing = [" * "];
    this.setState({
      score: this.state.score.concat([drubbing]),
      type: 'DRUBBING'
    })
  };

  handleSignOfActionMinus = () =>{
    let minus = [" - "];
    this.setState({
      score: this.state.score.concat([minus]),
      type: 'MINUS'
    })
  };

  handleSignOfActionAdd = () =>{
        let add = [" + "];
      this.setState({
        score: this.state.score.concat([add]),
        type: 'ADD'
      })
    };

  handleSum = () => {

    switch (this.state.type){
      case 'ADD':
        const num1 = this.state.score.join('').split(" + ");
        this.setState({
          score: [( num1.reduce((prev, cur) => {
            return Number(prev) + Number(cur);}))]
        });
        break;
      case 'MINUS':
        const num2 = this.state.score.join('').split(" - ");
        this.setState({
          score: [( num2.reduce((prev, cur) => {
            return Number(prev) - Number(cur);}))]
        });
        break;
      case 'DRUBBING':
        const num3 = this.state.score.join('').split(" * ");
        this.setState({
          score: [( num3.reduce((prev, cur) => {
            return Number(prev) * Number(cur);}))]
        });
        break;
      case 'DIVIDE':
        const num4 = this.state.score.join('').split(" / ");
        this.setState({
          score: [( num4.reduce((prev, cur) => {
            return Number(prev) / Number(cur);}))]
        });
        break;
      default:
        console.log("Error");
    }
  };


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.calculatorStyle}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            disabled
                            id="filled-disabled"
                            label="Display"
                            value={this.createToString()}
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                  {this.returnButtonElement(7)}
                  {this.returnButtonElement(8)}
                  {this.returnButtonElement(9)}
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}
                                onClick={this.handleSignOfActionDivide}
                        >/</Button>
                    </Grid>
                  {this.returnButtonElement(4)}
                  {this.returnButtonElement(5)}
                  {this.returnButtonElement(6)}
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}
                                onClick={this.handleSignOfActionDrubbing}
                        >x</Button>
                    </Grid>
                  {this.returnButtonElement(1)}
                  {this.returnButtonElement(2)}
                  {this.returnButtonElement(3)}
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}
                                onClick={this.handleSignOfActionMinus}
                        >-</Button>
                    </Grid>
                  {this.returnButtonElement(0)}
                  <Grid item xs={3}>
                    <Button variant="contained"
                            className={classes.buttonStyle}
                            onClick={this.handleDot}
                    >.</Button>
                  </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleSum}
                                onClick={this.handleSum}
                        >=</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}
                                onClick={this.handleSignOfActionAdd}
                        >+</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained"
                              className={classes.buttonStyleCharacters}
                              onClick={this.handleClear}
                      >
                          Clear
                      </Button>
                    </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained"
                            className={classes.buttonStyleCharacters}
                            onClick={()=> {this.handleSave({
                              id:uuid.v4(),
                              score: this.createToString(),
                              type: this.state.type,
                            })}}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addToHistory: (payload) => dispatch({type:'ADD_TO_HISTORY', payload}),
  }
};

const mapStateToProps = state => {
  return {
    history: state.listOfHistory
  }
};

Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles))(Calculator);
