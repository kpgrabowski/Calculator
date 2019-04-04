import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import style from "./OperationView-style";
import Paper from "@material-ui/core/Paper";

class FavoritenView extends Component {


  render(){
    const { classes } = this.props;
    return(
      <div>
        <Paper className={classes.root}
               elevation={22}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>{this.props.favorite.score}</h4>
            <h4>{this.props.favorite.type}</h4>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(style)(FavoritenView);