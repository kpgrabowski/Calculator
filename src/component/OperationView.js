import React, { Component } from 'react';

export default class OperationView extends Component{

    render(){
        return(
            <div>
                <h4>{this.props.history.id}</h4>
                <h4>{this.props.history.scoreHistory}</h4>
                <h4>{this.props.history.typeHistory}</h4>
            </div>
        )
    }
}