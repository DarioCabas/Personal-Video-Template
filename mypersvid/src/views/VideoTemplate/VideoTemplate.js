import React from 'react'
import { useParams } from 'react-router-dom'

const VideoTemplate = () => {

    const { URLVideo } = useParams();
    const { bg } = useParams();
    console.log('entre a nuevo')
return(
    <div>
        {URLVideo}
        {bg}
    </div>)


}

export default VideoTemplate