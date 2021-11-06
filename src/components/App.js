import Signup from './Signup';
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Signup/>
      </div>
    </AuthProvider>
  );
}

export default App;
