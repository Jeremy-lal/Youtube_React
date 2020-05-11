import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoHome(props) {
    return (
        <div>
            <Link to={`/video/${props.video.id}`}>
                <iframe width="100%" height="150px" src={props.video.url} title={props.video.title}>
                </iframe>
                <h2> {props.video.title}</h2>
            </Link>
        </div>
    )
}