import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Post from './components/Posts';
import Project from './components/Project';
import SingleProject from './components/SingleProject';
import Navbar2 from './components/Navigation';
import Contact from './components/Contact';
import Aboutv2 from './components/Aboutusv2'


function App() {
  return(
    <BrowserRouter>
      <Navbar2/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={SingleProject} path='/project/:slug'/>
        <Route component={Project} path='/project'/>
        <Route component={Contact} path='/contact'/>
        <Route component={Aboutv2} path='/about'/>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
