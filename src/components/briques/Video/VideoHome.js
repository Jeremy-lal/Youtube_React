import React from 'react';
import { Link } from 'react-router-dom';

export default function Video(props) {
    return (
        <div>
            <Link to={`/video/${props.video.id}`}>Home</Link>
            <iframe width="100%" height="345" src={props.video.url} title={props.video.title}>
            </iframe>
            <h2> {props.video.title}</h2>
        </div>
    )
}