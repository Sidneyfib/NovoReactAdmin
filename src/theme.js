import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    price: { color: 'white',
             background: '#4caf50'    },

    header:{ color: 'white',
             backgroundColor: 'blue',},

   
});


export const useListStyles = makeStyles({
    actions:{
        backgroundColor:'black',
    },
    header:{
        backgroundColor:'black',
    },    
});