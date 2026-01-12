'use client';

import { useState } from 'react';

function EmailInput() {
  const [email, setEmail] = useState('');

  async function handleAddSubscriber() {
    try {
      // maybe setup soemthing after
    } catch (err) {
      console.log('Failed to add subscriber ', err.message);
    }
  }
  return (
    <div className='sign-up'>
      <input
        placeholder='Email address...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className='card-button'>Sign up</button>
    </div>
  );
}

export default EmailInput;
