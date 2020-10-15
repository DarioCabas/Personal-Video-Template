import React from 'react'
import Title from './Components/Title'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import './App.css'



const App = () =>{

    return (
        <div>
        <Title></Title>


        <Grid item xs={12}>
        <Grid container justify="center" spacing='10' >
          {[0, 1].map((value) => (
            <Grid key={value} item>
                     <Card>
                        <Button variant="contained" color="primary">Generar Videos</Button>
                     </Card>
            </Grid>
          ))}
        </Grid>
        </Grid>
      
           <Button variant="outlined" color="primary" >Hola</Button>
    

        </div>
        
    )



}
export default App

