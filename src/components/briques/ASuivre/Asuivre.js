import React from 'react';
import VideoNext from '../Videos/VideoNext';
import '../../../Styles/Briques/Asuivre.css'
export default function ASuivre(props) {
    return (
        <div className="asuivre">
            <p>A suivre</p>
            {
                props.videos.map((currentVideo) => <VideoNext video={currentVideo} key={currentVideo.id} className="next"/>)
            }
        </div>
    )
}