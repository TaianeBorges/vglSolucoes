import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { orange } from '@material-ui/core/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
// }});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.primary,
    palette:{
      primary: orange,
    },
   
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}> Prevenção e identificação 
          de lentidão, problemas na Memória e HD.</Paper>
        </Grid>
        
        <Grid item xs={8}>
          <Paper className={classes.paper}>Atualizações, instalações e troca de peças necessárias</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Diagnostico e Solução imediáta </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
