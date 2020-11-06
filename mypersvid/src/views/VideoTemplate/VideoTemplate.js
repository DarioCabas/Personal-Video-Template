import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"

const VideoTemplate = () => {

    const { URLVideo } = useParams();
    const { bg } = useParams();
    console.log('entre a nuevo')

    .player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
    }

    .react - player {
        position: absolute;
        top: 0;
        left: 0;
    }
                  
return(
<div>
      
      <div
      style={{
         backgroundImage: `url("https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`, backgroundRepeat: 'no-repeat', width: "1300x", height: "700px", color: 'white'
      }}>
      <div > <ReactPlayer
        url = "https://www.youtube.com/watch?v=WbJNkH-pDd8"
      /></div>

      </div>

    </div>
    )

};



export default VideoTemplate
