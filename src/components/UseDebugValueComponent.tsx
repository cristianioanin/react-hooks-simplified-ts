import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function UseDebugValueComponent() {
  const [firstName, setFirstName] = useLocalStorage<string>(
    'firstName',
    'John'
  );
  const [lastName, setLastName] = useState('Doe');

  return (
    <>
      <h1>useDebugValue</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </>
  );
}
