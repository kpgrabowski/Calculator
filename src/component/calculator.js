import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    calculatorStyle: {
        height: '400px',
        width: '500px',
    },
    buttonStyle: {
        margin: theme.spacing.unit,
    },
    buttonStyleNull: {
        margin: theme.spacing.unit,
        // weight: '50px',
    }
});

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.calculatorStyle}>
                <Grid container>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>7</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>8</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>9</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>/</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>4</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>5</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>6</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>x</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>1</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>2</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>3</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>-</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" className={classes.buttonStyleNull}>0</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>=</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" className={classes.buttonStyle}>+</Button>
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