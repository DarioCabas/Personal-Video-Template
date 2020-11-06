import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        // backgroundImage: BackImage ,
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
}));




const VideoTemplate = () => {

    const classes = useStyles();

    const { URLVideo } = useParams();
    const { bg } = useParams();
    console.log('entre a nuevo');
    var BackImage = "";
    const URL = `https://jenny-backend.s3.us-east-2.amazonaws.com/videos/${URLVideo}`
    console.log(bg)
    if (Number(bg) === 1) { BackImage = "url(" + "https://jenny-backend.s3.us-east-2.amazonaws.com/recursos/WhatsApp+Image+2020-11-06+at+11.42.08.jpeg" + ")" }
    if (Number(bg) === 2) { BackImage = "url(" + "https://jenny-backend.s3.us-east-2.amazonaws.com/recursos/WhatsApp+Image+2020-11-06+at+11.42.13.jpeg" + ")" }
    if (Number(bg) === 3) { BackImage = "url(" + "https://jenny-backend.s3.us-east-2.amazonaws.com/recursos/WhatsApp+Image+2020-11-06+at+11.43.47.jpeg" + ")" }


    console.log('URL ES: ' + BackImage)
    return (
        <Box className={classes.root}>
            <CardMedia style={{ backgroundImage: BackImage, width: '100%', height: '100%',justifyContent:'center',alignItems:'center', display: 'flex', }}>
                <ReactPlayer
                    url={URL}
                    className='react-player'
                    width='70%'
                    height='70%'
                    controls
                    playing
                    volume='0.5'
                />
            </CardMedia>


        </Box>
    )



export default VideoTemplate
