import React from 'react'

export default function Login() {

  

  return (
    <>
      <form>
        <label>
          UserName: <input type="text" name="userName" />
        </label>
        <label>
          Password <input type="text" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
