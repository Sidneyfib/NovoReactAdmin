import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';



export const useListStyles = makeStyles({
    actions:{backgroundColor:'#aa2e25',
        color:'white',
    },
    header:{
        backgroundColor:'dark',
        color:'white',
        header:'white',
    },  
    price: { color: 'white',
             background: '#4caf50'    },  
});


export const theme = createMuiTheme({
  palette: {
    type: 'dark', 

    
    // Switching the dark mode on is a single property value change.
  },
});