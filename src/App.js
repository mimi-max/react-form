import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState()
  return <>
    <form onSubmit={(e) => {
      e.preventDefault()
      alert(`Hello ${firstName}  ${lastName} !`)
      setFirstName('');
      setLastName('')
    }}
      className="form-container">

      <input value={firstName} onChange={(e) => {
        setFirstName(e.target.value)
      }} type="text" />

      <input value={lastName} onChange={(e) => {
        setLastName(e.target.value)
      }}
        type="text" />
      <button type="submit">GREET ME</button>
    </form>
  </>
}
export default App;
