import logo from './logo.svg';
import './App.css';
import RegistrationForm from './containers/RegistrationForm'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RegistrationForm/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Code implementation for MoodRecovery(MR)</code> 
        </p> */}
      </header>
    </div>
  );
}

export default App;
