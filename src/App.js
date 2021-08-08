import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setInputParamsError } from './thunks';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.loading);
  const error = useSelector(state => state.login.error);
  const userDetails = useSelector(state => state.login.userDetails);

  const handleLoginSubmit = () => {
    if (!username) {
      dispatch(setInputParamsError('Please enter username'))
    } else if (!password) {
      dispatch(setInputParamsError('Please enter password'))
    } else {
      dispatch(loginUser({ username, password, }));
    }
  }

  console.log('service loading error', error);
  console.log('user logged in', userDetails);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (<section className="spinner"></section>)
        : (
          <section className="login-section" style={{
          backgroundColor: 'white',
          color: 'black',
          width: '300px',
          height: '300px',
          borderRadius: '10px',
          padding: '15px'
        }}>
          <div>Login Form</div>
          <form>
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
          </form>
          <div>
              <button onClick={handleLoginSubmit} style={{
                width: '80%',
                height: '30px'
              }}>Login</button>
            </div>
            <br />
            <div style={{
              color: 'red',
              fontSize: '10px',
            }}>{error}</div>
        </section>
        )}
      </header>
    </div>
  );
}

export default App;
