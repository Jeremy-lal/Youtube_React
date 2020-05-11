import React from 'react';

export default function PrincipaleVideo(props) {

    return (
        <div>
            <iframe width="100%" height="345" src={props.video.url} title="test">
            </iframe>
            <h2>{props.video.title}</h2>
        </div>
    )
}