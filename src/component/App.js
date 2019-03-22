import React from 'react';
import AppBarCalculator from './appBarCalculator';
import RefreshWebsite from './refreshWebsite';
import Calculator from "./calculator";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div >
                <AppBarCalculator/>
                <div style={{
                  display:"flex",
                  justifyContent:"center",
                }}>
                <div  style={{
                  display:"flex",
                  flexDirection: "column",
                }} >
                    <div   >
                    <RefreshWebsite/>
                    </div>
                    <div style={{
                      display:"flex",
                    }}>
                    <Calculator/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
