import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Briques/Videos/VideoNext.css'

export default function VideoNext(props) {
    return (
        <div className="videoNext">
            <Link to={`/video/${props.video.id}`} className="videoNext">
                <img src={props.video.miniature} alt='miniature' className="imgNext"/>
                <h2> {props.video.title}</h2>
            </Link>
        </div>
    )
}