import React from 'react'
import Title from './Components/Title'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import './App.css'

const App = () =>{

    return (
        <div>
        <Title></Title>

        <Card>
            <Button>Subir</Button>
        </Card>
        
        <Card>
            <Button>Generar Videos</Button>
        </Card>


      
            <Button size="small" color="blue">Hola</Button>
    

        </div>
        
    )



}
export default App

