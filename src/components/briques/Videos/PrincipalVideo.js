import React from 'react';
import '../../../Styles/Briques/Videos/VideoPrincipale.css';

export default function PrincipalVideo(props) {

    return (
        <div className="principalVideo">
            <iframe width="100%" height="478px" src={props.video.url} title="test">
            </iframe>
            <h2 className="title">{props.video.title}</h2>
        </div>
    )
}