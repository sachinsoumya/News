import './App.css';

import React, {useState} from 'react'
import NavBar from './components/NavBar'
import News  from './components/News'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



 const App =() => {
  const [progress, setProgress] = useState(0)
  
  //state={
    //progress:0
  //}


  const seProgress=(progress)=>{
    setProgress(progress)
  }
  
  
    return (
      <div>
        <Router>
        {/*<LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
        />*/}
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
        />

        
        <Switch>
          <Route exact path="/"><News setProgress={seProgress} key="general" pageSize={5} country="in" category="general" /></Route>
          <Route exact path="/business"><News setProgress={seProgress} key="business" pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={seProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={seProgress} key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/health"><News setProgress={seProgress} key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={seProgress} key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={seProgress}  key="sports"pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={seProgress} key="technology" pageSize={5} country="in" category="technology"/></Route>

        </Switch>

        </Router>
      </div>
    )

}
export default App

