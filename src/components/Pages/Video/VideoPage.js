import React, { useEffect, useState } from 'react';
import PrincipaleVideo from '../../briques/Videos/PrincipalVideo';
import ASuivre from '../../briques/ASuivre/Asuivre';
import '../../../Styles/Pages/VideoPage.css'

export default function VideoPage(props) {
    const id = Number(props.match.params.id);
    const [video, setVideo] = useState({})

    useEffect(() => {
        const videoClick = props.videos.find(element => element.id === id);
        setVideo(videoClick);
        document.title = videoClick.title;
    }, [id, props.videos]);

    return (
        <div className="container">
            <div className="video">
                <PrincipaleVideo video={video} id={id} />
            </div>
            <div className="next">
                <ASuivre videos={props.videos} />
            </div>

        </div>
    )
}