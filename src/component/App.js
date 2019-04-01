import React from 'react';
import AppBarCalculator from './AppBarCalculator';
import RefreshWebsite from './RefreshWebsite';
import Calculator from "./Calculator";
import MathematicalOperations from "./MathematicalOperations";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <AppBarCalculator/>
                <div>
                    <Grid container>
                        <Grid item xs={2}>
                            <RefreshWebsite/>
                        </Grid>
                        <Grid item xs={4}>
                            <Calculator/>
                        </Grid>
                        <Grid item xs={6}>
                            <MathematicalOperations/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
