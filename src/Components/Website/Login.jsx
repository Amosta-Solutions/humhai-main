import React from "react";
import "../Website/Login.css";
import { useNavigate } from "react-router-dom";
import login from "../Assets/Images/Login- Image.jpg";
import signup from "../Assets/Images/Sign up- Image.jpg";

const Login = () => {
  const navigate = useNavigate();

  const toggleForm = () => {
    var containers = document.querySelector(".containers");
    containers.classList.toggle("active");
  };

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <section className="sectionss">
        <div className="containers">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={signup} alt="" />
            </div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input
                  type="submit"
                  name=""
                  value="Login"
                  onClick={handleClick}
                />
                <p className="signup">
                  Don't have an account ?
                  <a href="#" onClick={toggleForm}>
                    {" "}
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form>
                <h2>Create an Account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Id" />
                <select>
                <option disabled="disabled" selected="selected" >Select</option>
                  <option value="professional">Professional</option>
                  <option value="student">Student</option>
                </select>
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input
                  type="submit"
                  name=""
                  value="Sign Up"
                  onClick={handleClick}
                />
                <p className="signup">
                  Already have an account ?
                  <a href="#" onClick={toggleForm}>
                    {" "}
                    Sign In{" "}
                  </a>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img src={login} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
