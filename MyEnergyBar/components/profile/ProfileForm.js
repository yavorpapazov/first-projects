import classes from './ProfileForm.module.css'
import { useState, useContext } from 'react'
import { AppContext } from '../../store/app-context'
import { useHistory } from 'react-router-dom'

function ProfileForm() {
  let history = useHistory()
  let [newPasswordInput, setNewPasswordInput] = useState('')
  let appContextData = useContext(AppContext)
  async function submitHandler(e) {
    e.preventDefault()
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhdnnMx3LV6M6VYmVViOplfYGHnHP0k6E'
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        idToken: appContextData.token,
        password: newPasswordInput,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setNewPasswordInput('')
    history.replace('/')
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' value={newPasswordInput} onChange={(e) => setNewPasswordInput(e.target.value)} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}
export default ProfileForm