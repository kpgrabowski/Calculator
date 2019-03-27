import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import styles from './MathematicalOperations-styles';


class MathematicalOperations extends Component{

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.mathematicalOperations}>
                <h3>COMPONENT</h3>
            </div>
        )
    };
}

export default withStyles(styles)(MathematicalOperations);