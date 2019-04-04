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
    };
  }




  render() {
    const { classes } = this.props;
    let favirite = <h4>You don't have any element in this List </h4>;

    return (
      <div className={classes.refreshWebsite} >
        <h2>You Favorite:</h2>
        {favirite}
      </div>
    )
  }
}

RefreshWebsite.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RefreshWebsite);
