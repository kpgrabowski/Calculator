import React from 'react';
import AppBarCalculator from './appBarCalculator';
import RefreshWebsite from './refreshWebsite';
import Calculator from "./calculator";
import withStyles from "@material-ui/core/es/styles/withStyles";


const styles = {
    positionCalculator: {
        direction: 'column',
        justify: 'center',
        alignItems: 'center',
    },
};



class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBarCalculator/>
                <div className={classes.positionCalculator}>
                    <RefreshWebsite/>
                    <Calculator/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(App);
