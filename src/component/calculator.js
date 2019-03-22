import React, { Component } from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";

const styles =  {
  calculatorStyle: {
    backgroundColor: 'red',
  },
};

class Calculator extends Component{
    constructor(props){
        super(props);

        this.state= {
        };
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={ classes.calculatorStyle }>
                <h3>Jestem tutaj</h3>
            </div>
        )
    }
}

Calculator.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Calculator);