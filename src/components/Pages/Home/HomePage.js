import React from 'react';
import Video from './../../briques/Video/Video';


function HomePage(props) {

  return (
      <div className="App">
        {
          props.videos.map((currentVideo) => <Video video={currentVideo} key={currentVideo.id}/>)
        }
      </div>
  );
}

export default HomePage;