import './App.css';
import Index from './pages/Index';
import Process from './pages/Process';
import Contact from './pages/Contact';
import { AnimatePresence } from "framer-motion";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './pages/ScrollToTop';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Web Suite Studio</title>
            <link rel="canonical" href="http://www.websuitestudio.com" />
            <meta name="description" content="Description" CONTENT="Custom web and application development and online marketing solutions. " />
        </Helmet>
      </HelmetProvider>

        <ToastContainer 
          draggable={false}
          transition={Zoom}
          autoClose={3000}
         />
     
        <Router>
          <Header />
          <ScrollToTop />
      
          <AnimatePresence >
            <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/process' exact component={Process} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </AnimatePresence>
          <Footer />
        </Router>
        
  
    </>

  );
}

export default App;
