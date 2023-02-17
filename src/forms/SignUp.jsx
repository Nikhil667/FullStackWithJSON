import React, {useState} from 'react'
import axios from 'axios'

function SignUp() {

    const [formData, setFormData] = useState({
        userName: "",
        name: "",
        password: "",
        gender: "",
      });

    const handleChange = (e) => {
      //const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFormData((formData) => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(formData);
      //JSON.stringify(formData);
      axios
        .post("http://localhost:8000/", {formData})
        .then((res) => console.log("success sent", res))
        .catch((err) => {
            console.log(err.response);
        });
      alert("Submitted")
    };

    return (
      <>
        <div className="container">
          <form  onSubmit={handleSubmit} id="signup" className="form">
            <h1>Sign Up</h1>
            <label>
              UserName:{" "}
              <input
                type="text"
                value={formData.userName}
                onChange={handleChange}
                name="userName"
              />
            </label>
            <label>
              Name:{" "}
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </label>
            <label>
              Password{" "}
              <input
                type="text"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          {/* <h5>
            Name: {formData.userName} {formData.name} {formData.password} {formData.gender}
          </h5> */}
        </div>
      </>
    );
}

export default SignUp;