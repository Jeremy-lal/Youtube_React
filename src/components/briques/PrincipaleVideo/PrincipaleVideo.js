import React, { useState } from 'react';

export default function PrincipaleVideo(props) {

    const [video, setVideo] = useState();

    const getUrl = () => {
        const videoClick = props.videos.find(element => element.id === props.id);
        setVideo(videoClick);
    }
    return (
        <div>
            <iframe width="420" height="345"  src={video.url} title="test">
            </iframe>
            <h2>{video.title}</h2>
        </div>
    )
}