import React, { useState } from 'react';

function RegistrationForm(params) {
  const [user, setUser] = useState({
    firstName: '',
  });

  return (
    <div>
      {' '}
      <label htmlFor="firstName">First firstName</label>
      <input type="text" name='firstName'  value={user.firstName||''}
      onChange={(e)=>{
        setUser({...user, firstName:e.target.value})
      }} id=""/>
      <button type='submit' onClick={e=>{e.preventDefault();console.log("User",user);}}></button>
    </div>
  );
}

export default RegistrationForm;