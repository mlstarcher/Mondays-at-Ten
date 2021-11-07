import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from './Signup';
import Login from './Login'
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
