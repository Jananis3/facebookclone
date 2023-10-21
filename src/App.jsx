import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import SignUp from './SignUp/SignUp';

import Home from './Home';
import Vedio from './Vedio';
import Store from './Store';
import Friends from './Friends';


function App() 
{  return 
  ( 
    <Router>
    <div className='App'>
    <Routes>
    <Route Path='/'exact={true} element={<LoginPage/>}></Route>
    <Route Path='/Home' element={<Home/>}></Route>
    <Route Path='/Home' element={<Home/>}></Route>


    <Route Path='/SignUp' element={<SignUp/>}></Route>

    
        <Route Path='/Vedio' element={<Vedio/>}></Route>
        <Route Path='/Store' element={<Store/>}></Route>
        <Route Path='/Friends' element={<Friends/>}></Route>


    </Routes>
    </div>
    </Router>
  )
}
export default App;
