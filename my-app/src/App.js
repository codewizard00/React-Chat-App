import React from 'react'
import Loginpage from './components/loginpage'
import {AuthProvider} from "./contexts/AuthContext";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Chats from './components/Chats';

function App() {
  return (
    
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats}/>
            <Route path="/" component={Loginpage}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
