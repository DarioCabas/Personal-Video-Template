import React from 'react'
import Title from './Components/Title'
import Card from './Components/Card'
import Grid from '@material-ui/core/Grid'
import './App.css'


const App = () =>{

    return (
        <div>

        <Title title='VIDEOS PERSONALIZADOS'></Title>
        <Grid container justify="center" spacing={5}>

            <Grid item xs={10} sm={6} md={4} >
                <Card></Card>
            </Grid>
            
            <Grid item xs = {10} sm = {6} md = {4} >
                <Card></Card>
            </Grid>

            <Grid item xs = {10} sm = {6} md = {4} >
                <Card></Card>
            </Grid>

        </Grid>
        

        </div>
        
    )



}
export default App

