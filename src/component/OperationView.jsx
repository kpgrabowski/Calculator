import React, { Component } from 'react';
import style from '../styles/OperationView-style'
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import {Button} from "@material-ui/core";

class OperationView extends Component{

    render(){
      const { classes } = this.props;
        return(
            <div>
              <Paper className={classes.root}
                     elevation={22}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>{this.props.operation.score}</h4>
                <h4>{this.props.operation.type}</h4>
                  <Button variant="contained"
                          color="secondary"
                          className={classes.button}
                          onClick={()=> this.props.removeOperation(this.props.operation.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="contained"
                          color="primary"
                          className={classes.button}
                          onClick={()=> this.props.addToFavorite(
                            {id:this.props.operation.id,
                            score:this.props.operation.score,
                            type:this.props.operation.type}
                            )}
                  >
                    Add to favorite
                  </Button>
                </div>
              </Paper>
            </div>
        )
    }
}

export default withStyles(style)(OperationView);