import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './app.css';
import MostPopular from './componentes/maker/mostpopular';
import SearchHeader from './componentes/search_header/serch_header';
import SearchResult from './componentes/search_result/search_result';
import VideoDetail from './componentes/video_detail/video_detail';

function App({youtube}) {
  return(
    <BrowserRouter>
      <div>
        <SearchHeader youtube={youtube}/>
        <Switch>
          <Route exact path={["/youtube-clone",'/']}>
            <MostPopular youtube={youtube}/>
          </Route>
          <Route path="/video_detail">
            <VideoDetail/>
          </Route>
          <Route path="/search_result">
            <SearchResult/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
