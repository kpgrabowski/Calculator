import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    calculatorStyle: {
        height: '400px',
        width: '500px',
    },
    buttonStyle: {
        margin: theme.spacing.unit,
        backgroundColor: 'green',
    },
    buttonStyleCharacters: {
        margin: theme.spacing.unit,
        backgroundColor: 'blue',
        color: 'white',
    },
    buttonStyleNull: {
        marginRight: '53px',
        marginTop: '8px',
        backgroundColor: 'green',
    },
    buttonStyleSum: {
        margin: theme.spacing.unit,
        backgroundColor: 'red',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class Calculator extends Component {

        state = {
            score: [],
        };



  handleClear = () => {
    this.setState({
      score: [],
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

  handleSignOfAction = () =>{
        let add = [" + "];
      this.setState({
        score: this.state.score.concat([add])
      })
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
                                className={classes.buttonStyleCharacters}>/</Button>
                    </Grid>
                  {this.returnButtonElement(4)}
                  {this.returnButtonElement(5)}
                  {this.returnButtonElement(6)}
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}>x</Button>
                    </Grid>
                  {this.returnButtonElement(1)}
                  {this.returnButtonElement(2)}
                  {this.returnButtonElement(3)}
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}>-</Button>
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained"
                                fullWidth
                                className={classes.buttonStyleNull}
                                onClick={this.handleButtonNumber(0)}
                        >0</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleSum}
                        >=</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}
                                onClick={this.handleSignOfAction}
                        >+</Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained"
                              className={classes.buttonStyleCharacters}
                              onClick={this.handleClear}
                      >
                          Clear
                      </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Calculator);