import React, { useState } from 'react'
import UsersArraySelect from './UsersArraySelect';
import style from './UsersArraySelectForm.module.css'

export default function UsersArraySelectForm():JSX.Element {
  const [userIdInput, setUserIdInput] = useState<number | ''>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserIdInput(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isNaN(userIdInput as number)) {
      setUserIdInput('');
    }
  };

  return (
      <div className={style.container}>
        <h4>Search for user by ID number</h4>
        <form onSubmit={handleSubmit}  className={style.formStyle}>
          <input 
            type="number"
            name='userId' 
            placeholder='Enter user ID'
            value={userIdInput}
            onChange={handleInputChange}
            required
          />
          <button type='submit'>Serch new user</button>
        </form>
        {userIdInput && <UsersArraySelect userId={userIdInput as number} />}
        
    </div>
  )
}
