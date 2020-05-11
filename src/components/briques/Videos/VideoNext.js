import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Briques/Videos/VideoNext.css'

export default function VideoNext(props) {
    return (
        <div  className= "videoNext">
            <Link to={`/video/${props.video.id}`} className= "videoNext">
                <iframe width="45%" height="100px" src={props.video.url} title={props.video.title}  onClick={console.log(1)}>
                </iframe>
                <h2> {props.video.title}</h2>
            </Link>
        </div>
    )
}