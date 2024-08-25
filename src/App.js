import {BrowserRouter,Route, Routes, Redirect} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import GoogleLogin from './components/GoogleLogin';

import './App.css';

const App = () => (
    
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element ={<LoginForm/>} />
      <Route exact path='/google-login' element={<GoogleLogin/>} />
      
    </Routes>
    </BrowserRouter>
  );


export default App;
