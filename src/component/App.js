import React, { Component } from 'react';
import AppBarCalculator from './AppBarCalculator';
import RefreshWebsite from './RefreshWebsite';
import Calculator from "./Calculator";
import MathematicalOperations from "./MathematicalOperations";
import Grid from "@material-ui/core/Grid";
import LoggIn from "./LoggIn";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        }
    }

    changeLoggedIn =(newValue) => this.setState({
        loggedIn: newValue
    });

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                <LoggIn
                  changeLoggedIn={this.changeLoggedIn}
                />
                }
                {this.state.loggedIn &&
            <div>
                <AppBarCalculator/>
                <div>
                    <Grid container>
                        <Grid item xs={4}>
                            <RefreshWebsite/>
                        </Grid>
                        <Grid item xs={3}>
                            <Calculator/>
                        </Grid>
                        <Grid item xs={5}>
                            <MathematicalOperations/>
                        </Grid>
                    </Grid>
                </div>
            </div>
              }
            </div>
        );
    }
}

export default App;
