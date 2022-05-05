import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Portfolio from './components/AllProj';
import Footer from './components/Footer';
import Mainpages from './components/Main';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Mainpages} />
          <Route path="/projects" exact component={Portfolio} />
        </Switch>
        <Footer/>
      </Router>
      {/*I used npm i emailjs-com to get an email message to the client */}
    </>
  );
}

export default App;