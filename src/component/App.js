import React from 'react';
import AppBarCalculator from './AppBarCalculator';
import RefreshWebsite from './RefreshWebsite';



class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div>
                <AppBarCalculator/>
                <RefreshWebsite/>
            </div>
        );
    }
}



export default App;
