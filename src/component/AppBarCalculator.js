import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textAlign: 'center',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navBar: {
        backgroundColor: '#FF8C00',
    },
};

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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppBarCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarCalculator);