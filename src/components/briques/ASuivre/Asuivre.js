import React from 'react';
import Video from '../Video/VideoHome';
export default function ASuivre(props) {
    return (
        <div>
            <p>A suivre</p>
            {
                props.videos.map((currentVideo) => <Video video={currentVideo} key={currentVideo.id} />)
            }
        </div>
    )
}