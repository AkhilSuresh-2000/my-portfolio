import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Posts';
import Project from './components/Project';
import SingleProject from './components/SingleProject';
import Navbar2 from './components/Navigation';


function App() {
  return(
    <BrowserRouter>
      <Navbar2/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={SingleProject} path='/project/:slug'/>
        <Route component={Project} path='/project'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
