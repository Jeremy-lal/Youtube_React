import React from 'react';
import '../../../Styles/Briques/Videos/VideoPrincipale.css';

export default function PrincipalVideo(props) {
    console.log(props);

    return (
        <div className="principalVideo">
            <iframe width="100%" height="478px" src={props.video.url} title="test">
            </iframe>
            <p className="musicTitle">{props.video.title}</p>
            <p>{props.video.views}</p>
            { props.video.author ?
                <div className="details">
                    <img src={props.video.author.logo} alt="logo chanel" className="logoVideoPage" />
                    <div className="description">
                        <p className="authorName">{props.video.author.name}</p>
                        <p>{props.video.author.subscribers}</p>
                        <p className="lastP">{props.video.description}</p>
                    </div>
                </div> : "loading ..."
            } 
            {/* {
                props.video.comments.map
            } */}
        </div>
    )
}