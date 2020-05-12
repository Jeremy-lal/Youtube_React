import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Briques/Videos/VideoHome.css'

export default function VideoHome(props) {
    return (
        <div>
            <Link to={`/video/${props.video.id}`} style={{ textDecoration: 'none' }}>
                <img src={props.video.miniature} alt='miniature' className="imgHome" />
                <div className="descriptionHome">
                    <img className="logo" src={props.video.author.logo} alt="logo" />
                    <h2 className="title"> {props.video.title} </h2>
                </div>
            </Link>
        </div>
    )
}