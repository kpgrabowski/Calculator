import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import App from "./App";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class RefreshWebsite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeToRefresh: "",
    };

  }

  handelAlert = () => {
    setTimeout(() => {
        alert("Wpisałeś czas: " + this.state.timeToRefresh);
      },
      this.state.timeToRefresh)
  };

  handleTimeToRefresh = timeToRefresh => event => {
    this.setState({
      [timeToRefresh]: event.target.value
    })
  };


  render() {
    const {classes} = this.props;
    return (
      <div>
        <TextField
          id="timeToRefreshId"
          label="Write time to refresh"
          className={classes.textField}
          value={this.state.timeToRefresh}
          onChange={this.handleTimeToRefresh('timeToRefresh')}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handelAlert}
        >
          Hello Kamil
        </Button>
      </div>
    )
  }


}

RefreshWebsite.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RefreshWebsite);
