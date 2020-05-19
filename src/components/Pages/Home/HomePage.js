import React from 'react';
import VideoHome from './../../briques/Videos/VideoHome';
import '../../../Styles/Pages/HomePage.css'

function HomePage(props) {

  return (
    <div className="home">
      <h2> Recommandations</h2>
      <div className="videoList">
        {
          props.videos.map((currentVideo) => {
            return (
              <div className="videoHome">
                <VideoHome video={currentVideo} key={currentVideo.id} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default HomePage;