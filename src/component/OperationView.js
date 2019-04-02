import React, { Component } from 'react';

export default class OperationView extends Component{

    render(){
        return(
            <div>
                <h4>{this.props.operation.score}</h4>
                <h4>{this.props.operation.type}</h4>
            </div>
        )
    }
}