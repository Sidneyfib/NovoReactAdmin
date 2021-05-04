import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      // Your theme goes here
      // Write the following code to have an orange app bar. We'll explain it later in this article.
      secondary: {
        main: "#ff9800", // Not far from orange
      },
    }
  })
);





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