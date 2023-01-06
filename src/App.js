import LoginPage from './components/LoginPage';
import './App.css';

const login = {
  text: 'Login Page',
  btn: 'Login',
  a: 'Forgot Password',
}

function App() {
  return (
    <div className="App">
   <LoginPage text={login.text} btn={login.btn} a={login.a} input={login.input}/>
    </div>
  );
}

export default App;
