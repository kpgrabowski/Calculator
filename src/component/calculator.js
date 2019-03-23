import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";

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


    componentDidMount(){
        console.log(this.num);
    };

    handelButtonNine = () => {
        this.setState({
            score: this.state.score.push(9),
        })
    };

    handelButtonEight = () => {
        this.setState({
            score: this.state.score.push(8),

        });
    };

    num = this.state.score.map((number) =>
            <ListItem key={number.toString()} value={number}/>
    );





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
                            value={this.num}
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>
                            7</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}
                                onClick={this.handelButtonEight}>8</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}
                                onClick={this.handelButtonNine}>9</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}>/</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>4</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>5</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>6</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}>x</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>1</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>2</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyle}>3</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}>-</Button>
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained"
                                fullWidth
                                className={classes.buttonStyleNull}>0</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleSum}>=</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained"
                                className={classes.buttonStyleCharacters}>+</Button>
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