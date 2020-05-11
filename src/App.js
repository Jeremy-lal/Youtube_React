import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoPage from './components/Pages/Video/VideoPage';
import HomePage from './components/Pages/Home/HomePage';
import Navbar from './components/briques/Navbar'
import { videosData } from './VideosData'

function App() {
  const [videos, setVideos] = useState(videosData);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/video/:id' render={(matchProps) =>
          <VideoPage
            {...matchProps}
            videos={videos}
          />
        } />
        <Route path="" >
          <HomePage videos={videos} />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
