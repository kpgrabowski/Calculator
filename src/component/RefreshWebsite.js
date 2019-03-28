import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import styles from './RefreshWebsite-style';

class RefreshWebsite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeToRefresh: "",
    };
  }

  handelAlert = () => {
    setTimeout(() => {
        alert("Wpisałeś czas: " + this.state.timeToRefresh + " sec");
      },
      this.state.timeToRefresh*1000)
  };

  handleTimeToRefresh = timeToRefresh => event => {
    this.setState({
      [timeToRefresh]: event.target.value
    })
  };


  render() {
    const { classes } = this.props;
    return (
      <div styles={{ display:"flex"}} className={classes.refreshWebsite} >
        <div>
        <TextField
          id="timeToRefreshId"
          label="Write time to refresh [sec]"
          className={classes.textField}
          value={this.state.timeToRefresh}
          onChange={this.handleTimeToRefresh('timeToRefresh')}
          margin="normal"
        />
        </div>
        <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handelAlert}
        >
         Refresh
        </Button>
        </div>
      </div>
    )
  }
}

RefreshWebsite.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RefreshWebsite);
