//EventVideo page
import React from "react";


const EventVideo = ({ url }) => {


    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={url}
            ></iframe>
        </div>
    )

}


export default EventVideo;