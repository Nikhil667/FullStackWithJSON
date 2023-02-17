import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="btn">
        <Link className="btn btn-success" to={"/login"}>
          Login
        </Link>
        <br />
        <br />
        <Link className="btn btn-success" to={"/register"}>
          SignUp
        </Link>
      </div>
    </>
  );
}
