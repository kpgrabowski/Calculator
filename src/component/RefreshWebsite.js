import React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import styles from './RefreshWebsite-style';
import {fbase} from "../firebase";
import FavoritenView from "./FavoritenView";

class RefreshWebsite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.ref = fbase.syncState('calculator/listOfFavorite', {
      context: this,
      state: 'listOfFavorite'
    });
  };

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  };


  render() {
    const { classes } = this.props;
    let favirite = <h4>You don't have any element in this List </h4>;

    if(Array.isArray(this.state.listOfFavorite)){
      favirite = this.state.listOfFavorite.map(favorite => {
        return <FavoritenView key={favorite.id}
                              favorite={favorite}
        />
      })
    }


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
