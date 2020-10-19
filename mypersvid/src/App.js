import React, { useState, useEffect } from 'react'
import Title from './Components/Title'
import Cart from './Components/Card'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import './App.css'
import CircularProgress from '@material-ui/core/CircularProgress';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    
  },

  gridContainer: {
    paddingLeft: '80px',
    paddingRight: '80px'
  }
}

));





const App = () => {


  const classes = useStyles();

  const [selectedFile, setSelectedFile] = useState();
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();
  const [message3, setMessage3] = useState();
  const [activeCharge, setActiveCharge] = useState(false);
  const [activeGenerate, setActiveGenerate] = useState(true);
  const [activeSend, setActiveSend] = useState(true);
  const [error, setError] = useState(0);
  const [charging, setCharging] = useState(0);
  const [listening, setListening] = useState(0);
  const [temp, setTemp] = useState(0);
  const [pkCampaign, setPkCampaign ] = useState();


  useEffect(() => {
    setInterval(() => {
      setTemp((prevTemp) => prevTemp + 1)
    }, 20000);
  }, [])

  useEffect(() => {
    if (listening === 1) {
      console.log('listening');
      let url = "http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/create/";

      axios({
        method: 'GET',
        url: url,
      }
      ).then(//function(response)

        response => {
          const estado = response.data
          setMessage2(response.data.message)
          console.log(response.status);
          console.log(response.data.message);
          if (estado.status === 200) {

            setListening(0);
            setActiveSend(false);
            setActiveCharge(true);

          }

          console.log(estado)
        }
        //  console.log(response)


      ).catch(function (response) {

        console.log(response)

      });

    }
  }, [temp])

  const chargingbar = (event) => {
    if (charging === 1) {
      return (
        <div className={classes.root}>
          <div  >
            <CircularProgress />

          </div>
          <div>
            <p style={{ color: error === 0 ? 'blue' : 'red' }}
            >{message}</p>
          </div>
          <div>
            <p style={{ color: error === 0 ? 'blue' : 'red' }}
            >{message2}</p>
          </div>
          <div>
            <p style={{ color: error === 0 ? 'blue' : 'red'}}
            >{message3}</p>
          </div>
        </div>
      )
    }
  }



  const handleInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setActiveGenerate(false);
  }

  const submit = () => {
    setActiveCharge(true);
    setActiveGenerate(true);
    setCharging(1);
    const data = new FormData()
    data.append('csv_file', selectedFile)
    data.append('campaign', 'tester1')
    console.warn(selectedFile);
    let url = "http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/upload/";

    axios({
      method: 'POST',
      url: url,
      header: {
        "Content-Type": "multipart/form-data"
      },
      data: data,
    }
    ).then(//function(response)

      response => {
        const estado = response.data
        const pk = response.data.data.pk
        setPkCampaign(pk)
        setMessage(response.data.message)

        console.log(estado)
        if (estado.status === 200) {
          console.log('este es el : ' + pk)
          generate(pk);
          setError(0);
        } else {
          setError(1);
        }
      }
      //  console.log(response)


    ).catch(function (response) {

      console.log(response)

    });
  }

  const sendemail = () => {
    
    let url = ("http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/send/"+pkCampaign);

    axios({
      method: 'GET',
      url: url,
    }
    ).then(//function(response)

      response => {
        const estado = response.data
        setMessage3(response.data.message)
        console.log(response.status);
        console.log(response.data.message);
        if (estado.status === 200) {
          setCharging(0);
          setActiveCharge(false);
          setActiveSend(false);
          setActiveGenerate(false);

          console.log('finalice')
        }

        
      }
      //  console.log(response)


    ).catch(function (response) {

      console.log(response)

    });
  }

  const generate = e => {
    console.log(e)
    const data = new FormData()
    data.append('pk', e)
    console.warn(e);
    let url = "http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/create/";

    axios({
      method: 'POST',
      url: url,
      header: {
        "Content-Type": "application/json"
      },
      data: data,
    }
    ).then(//function(response)

      response => {
        const estado = response.data
        setMessage2(response.data.message)
        if (estado.status === 200) {
          setError(0);
          setListening(1);
        }
        else {
          setError(1);
        }

        console.log(estado)
      }
      //  console.log(response)


    ).catch(function (response) {

      console.log(response)

    });

  }

  return (
    <>
      <Title title='VIDEOS PERSONALIZADOS'></Title>
      <Grid container justify="center" spacing={5} className={classes.gridContainer}>

        <Grid item xs={6} sm={6} md={4} >
          <Cart sentence1="Carga el archivo con la lista de tus amigos" sentence2="Busca el archivo" button1="Cargar CSV" onClick={handleInputChange} modo={1} enable={activeCharge}></Cart>
        </Grid>

        <Grid item xs={6} sm={6} md={4} >
          <Cart sentence1="Ahora, genera los videos para cada uno de ellos" sentence2="Dale click en genera" button1="Generar" onClick={submit} modo={0} enable={activeGenerate}></Cart>
        </Grid>

        <Grid item xs={6} sm={6} md={4} >
          <Cart sentence1="Listo, enviemoslo a todos tus amigos" sentence2="Enviar los videos" button1="Enviar" onClick={sendemail} modo={0} enable={activeSend}></Cart>
        </Grid>
        
        <Grid container justify="center" item xs={12}  >
          <div>
            {chargingbar()}
          </div>
        </Grid>

      </Grid>



    </>
  );
}

export default App;

