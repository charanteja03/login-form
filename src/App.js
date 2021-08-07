import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLoginSubmit = () => {
    alert('login detected ' + username + ' ' + password);
    axios.get('login').then(response => {
      console.log('logged in')
    }).catch(e => {
      console.log(e);
    })
    console.log('clicked login');
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="login-section" style={{
          backgroundColor: 'white',
          color: 'black',
          width: '300px',
          height: '300px',
          borderRadius: '10px',
          padding: '15px'
        }}>
          <div>Login Form</div>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group" style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              margin: '15px'
            }}>
              <label className="control-label" htmlFor="username-input" style={{
                fontSize: '0.85rem'
              }}>Username</label>
              <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} id="username-input" 
              placeholder="Username"
              style={{
                height: '30px',
                width: '10vw',
                minWidth: '200px'
              }}/>
            </div>
            <div className="form-group" style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              margin: '15px'
            }}>
              <label className="control-label" htmlFor="username-input" style={{
                fontSize: '0.85rem'
              }}>Password</label>
              <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="password-input" 
              placeholder="Password"
              style={{
                height: '30px',
                width: '10vw',
                minWidth: '200px'
              }}/>
            </div>
            <div>
              <button type="submit" onClick={handleLoginSubmit} style={{
                width: '80%',
                height: '30px'
              }}>Login</button>
            </div>
          </form>
        </section>
      </header>
    </div>
  );
}

export default App;
