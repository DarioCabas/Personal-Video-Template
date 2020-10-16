import React from 'react'
import Title from './Components/Title'
import Cart from './Components/Card'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import './App.css'


const useStyles = makeStyles({
    gridContainer:{
    paddingLeft: '80px',
    paddingRight:'80px'
    }
})

const App = () =>{

const classes = useStyles();
    return (
        <div>

        <Title title='VIDEOS PERSONALIZADOS'></Title>
        <Grid container justify="center" spacing={5} className={classes.gridContainer}>

            <Grid item xs={6} sm={6} md={4} >
                <Cart sentence1="Carga el archivo con la lista de tus amigos" sentence2="Busca el archivo" button1="Cargar CSV"></Cart>
            </Grid>
            
            <Grid item xs={6} sm={6} md={4} >
                <Cart sentence1="Ahora, genera los videos para cada uno de ellos" sentence2="Dale click en genera" button1="Generar"></Cart>
            </Grid>

            <Grid item xs={6} sm={6} md={4} >
                <Cart sentence1="Ahora haz que todos en la lista de tus amigos lo vean" sentence2="Enviar los videos" button1="Enviar"></Cart>
            </Grid>

        </Grid>
        

        </div>
        
    )



}
export default App

