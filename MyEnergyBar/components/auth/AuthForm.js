import { useState, useContext } from 'react'
import { AppContext } from '../../store/app-context'
import classes from './AuthForm.module.css'
import { useHistory } from 'react-router-dom'

function AuthForm() {
  let history = useHistory()
  let [isLogin, setIsLogin] = useState(true)
  let [isLoading, setIsLoading] = useState(false)
  let [emailInput, setEmailInput] = useState('')
  let [passwordInput, setPasswordInput] = useState('')
  let appContextData = useContext(AppContext)
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }
  async function submitHandler(e) {
    e.preventDefault()
    setIsLoading(true)
    let url
    if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhdnnMx3LV6M6VYmVViOplfYGHnHP0k6E'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhdnnMx3LV6M6VYmVViOplfYGHnHP0k6E'
    }
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    setIsLoading(false)
    if(response.ok) {
      appContextData.login(data.idToken, emailInput)
      setEmailInput('')
      setPasswordInput('')
      history.replace('/ingredients')
    } else {
      let errorMessage
      if(data && data.error && data.error.message) {
        errorMessage = data.error.message
      }
      alert(errorMessage)
    }
  }
  return (
    <div>
      <section className={classes.starting}>
        <h1>Please log in to build your energy bar</h1>
      </section>
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input type='password' id='password' required value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
            {isLoading ? <h3>Loading...</h3> : <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>}
          </div>
        </form>
      </section>
    </div>
  )
}
export default AuthForm