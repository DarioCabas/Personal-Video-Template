import React , {useState} from 'react'
import Title from './Components/Title'
import Cart from './Components/Card'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import './App.css'


const useStyles = makeStyles({
    gridContainer:{
    paddingLeft: '80px',
    paddingRight:'80px'
    }
})




const send = () => {

  console.log('HOLA TODO BIEN 3');

}


const App = () => {


const classes = useStyles();

const [selectedFile, setSelectedFile] = useState(); 
const [message, setMessage] = useState();

const handleInputChange = (event)=> {
            setSelectedFile( event.target.files[0])
    }

 const submit = ()=>{
        const data = new FormData() 
        data.append('csv_file', selectedFile)
        data.append('campaign', 'tester1')
        console.warn(selectedFile);
        let url = "http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/upload/";

        axios({
            method:'POST',
            url:url,
            header:{
                "Content-Type": "multipart/form-data" 
            },
            data:data,
        }
        ).then(//function(response)
            
            response => {
                const estado = response.data.status
                const pk = response.data.pk
                setMessage(response.data.message)
                if (estado === 200){
                    generate(pk)
                }

                console.log(estado)
            }
          //  console.log(response)
        
        
        ).catch(function(response){
            
            console.log(response)

        });
    }

const generate = (e) => {

  const data = new FormData() 
  data.append('pk', e)
  console.warn(e);
  let url = "http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/create/";

  axios({
            method:'POST',
            url:url,
            header:{
                "Content-Type": "multipart/form-data" 
            },
            data:data,
        }
        ).then(//function(response)
            
            response => {
                const estado = response.data.status
                setMessage(response.data.message)
               // if (estado === 200)

                console.log(estado)
            }
          //  console.log(response)
        
        
        ).catch(function(response){
            
            console.log(response)

        });

}

  return (
    <>
    <Title title='VIDEOS PERSONALIZADOS'></Title>
    <Grid container justify="center" spacing={5} className={classes.gridContainer}>

            <Grid item xs={6} sm={6} md={4} >
                <Cart sentence1="Carga el archivo con la lista de tus amigos" sentence2="Busca el archivo" button1="Cargar CSV" onClick={handleInputChange} modo={1} ></Cart>
            </Grid>
            
            <Grid item xs={6} sm={6} md={4} >
                <Cart sentence1="Ahora, genera los videos para cada uno de ellos" sentence2="Dale click en genera" button1="Generar" onClick={submit} modo={0}></Cart>
            </Grid>

            <Grid item xs={6} sm={6} md={4} >
                <Cart sentence1="Ahora haz que todos en la lista de tus amigos lo vean" sentence2="Enviar los videos" button1="Enviar" onClick={send} modo={0}></Cart>
            </Grid>
            <div>
              <p>{message}</p>
            </div>
        </Grid>

        

 </>
  );
}

export default App;

