import logo from './logo.svg';
import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MovieDetail from './components/movie-detail/movieDetail';
import NotFound from './components/404/notFound';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const menu =[
    {
      path:'/category1',
      title: 'category One',
      icon: faBars,
    },
    {
      path:'/category2',
      title: 'category Two',
      icon: faBars,
    },
    {
      path:'/category3',
      title: 'category Three',
      icon: faBars,
    }

  ];

  const handleSideBar=()=>{
    setIsOpen(!isOpen);
  }

  const bodyVariant ={
    leftBarOpen: {
      marginLeft: isOpen ? 300 : 50,
      overflow: isOpen ? 'hidden': 'visible',
      transition :{
        duration: 0.5,
        type: 'tween',
        
      }  
    },

    leftBarOff: {
      marginLeft: 50,
      transition :{
        duration: 0.5,
        type: 'tween',
      }
  }
}

  const leftBarVariant = {
    show: {
      width: isOpen ? 300 : 50,
      transition :{
        duration: 0.5,
        type: 'tween',
        
      }  
    },

    hide: {
      width: 50,
      transition :{
        duration: 0.5,
        type: 'tween',
      }
    },

    exit:{
      scale: 0,
      transition :{
        duration: 0.1,
        type: 'spring',
      }
    },

    visible: {
      scale: 1,
      transition :{
        
        duration: 1,
        type: 'tween',
      }
    }
  }

  return (
    <div className="App">
          <Header />
      <div className="content">
    
      <motion.div className="left-bar"
      variants={leftBarVariant}
      initial='hide'
      animate='show'
      >
        <div className='Icon'>
       <FontAwesomeIcon className="listIcon" onClick={handleSideBar} icon={isOpen?faXmark:faBars} />
        </div>
      <br />
        <div className="all-category">
          {
            menu.map((menu) =>(
              <NavLink className="list" key={menu.title} to={menu.path}>
                <FontAwesomeIcon className="listIcon" icon={menu.icon}/>
                <AnimatePresence>
                {isOpen && <motion.div className="title"
                  variants={leftBarVariant}
                  animate="visible"
                  initial="exit"
                  exit="exit"
                >
                {menu.title}
                </motion.div>}
                </AnimatePresence>
                <br />

              </NavLink>
              
              )
            )
          }
        </div>
      </motion.div>
      

      <motion.div className="body" onClick={()=>setIsOpen(false)}
          variants={bodyVariant}
          initial='leftBarOff'
          animate='leftBarOpen'
      >
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      
       
        </motion.div>
      </div>
  
      <Footer />
    </div>
  );
}

export default App;
