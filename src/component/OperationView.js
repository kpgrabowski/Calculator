import React, { Component } from 'react';

export default class OperationView extends Component{

    render(){
        return(
            <div>
                <h4>{this.props.operation.id}</h4>
                <h4>{this.props.operation.scoreHistory}</h4>
                <h4>{this.props.operation.typeHistory}</h4>
            </div>
        )
    }
}