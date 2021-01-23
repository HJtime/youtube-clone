import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Maker from './componentes/maker/maker';
import VideoDetail from './componentes/video_detail/video_detail';

function App({youtube}) {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path={["/youtube-clone",'/']}>
        <Maker youtube={youtube}/>
      </Route>
      <Route path="/video_detail">
        <VideoDetail/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
