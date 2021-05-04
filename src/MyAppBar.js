import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        backgroundColor:'#424242',
    },
   
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar className={classes.title} {...props}>
              <Typography
                variant="h5"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
        </AppBar>
    );
};

export default MyAppBar;