import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './AppBarCalculator-style';

const MyLink = props => <Link to="/loggIn" {...props} />;


function AppBarCalculator(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.navBar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.grow}>
                        CALCULATOR
                    </Typography>
                    <div>
                    <Button color="inherit"
                            component={MyLink}
                    >
                      Login</Button>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppBarCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarCalculator);