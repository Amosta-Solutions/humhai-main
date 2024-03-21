import React,{useState} from "react";
import "../Website/Login.css";
import { useNavigate, useNavigation } from "react-router-dom";
import login from "../Assets/Images/Login- Image.jpg";
import signup from "../Assets/Images/Sign up- Image.jpg";
import { useMutation } from 'react-query';
import { loginUser, registerUser } from "../../api";
import { toast } from 'react-toastify';

  // import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const toggleForm = () => {
    var containers = document.querySelector(".containers");
    containers.classList.toggle("active");
  };

  const handleClick = () => {
    navigate("/home");
  };

  // const navigate = useNavigation()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registration,setRegistration] = useState({
    firstName:"",
    lastName:"",
    mobile:"",
    email:"",
    password:"",
    conPassword:""
  })
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setRegistration(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const mutation = useMutation(loginUser);
  const mutations = useMutation(registerUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutation.mutateAsync({ username, password });
      console.log(response,"response")
      if(response.status===true){
        toast.success('successfull');
        localStorage.setItem("user-info",JSON.stringify(response))
        navigate("/")
      }
      console.log('Login successful');
      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const handleRegistration = async(e)=>{
    e.preventDefault()
    try {
      const res = await mutations.mutateAsync({registration})
      console.log(res,"res")
    } catch (error) {
      console.error('Error:', error.message);
      
    }
    console.log(registration,"registration")
  }

  return (
    <div>
      <section className="sectionss">
        <div className="containers">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={signup} alt="" />
            </div>
            <div className="formBx">
              <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" onChange={e=>setUsername(e.target.value)} value={username}/>
                <input type="password" name="" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
                <input
                  type="submit"
                  name=""
                  value="Login"
                  // onClick={handleClick}
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
              <form onSubmit={handleRegistration}>
                <h2>Create an Account</h2>
                <input type="text" name="firstName" placeholder="first name" value={registration.firstName}  onChange={handleInputChange}/>
                <input type="text" name="lastName" placeholder="Last name" value={registration.lastName} onChange={handleInputChange}/>
                <input type="number" name="mobile" placeholder="number" value={registration.mobile} onChange={handleInputChange}/>
                <input type="email" name="email" placeholder="Email Id" value={registration.email} onChange={handleInputChange}/>
                <select>
                <option disabled="disabled" selected="selected" >Select</option>
                  <option value="professional">Professional</option>
                  <option value="student">Student</option>
                </select>
                <input type="password" name="password" placeholder="Create Password" value={registration.password} onChange={handleInputChange}/>
                <input type="password" name="conPassword" placeholder="Confirm Password" value={registration.conPassword} onChange={handleInputChange}/>
                <input
                  type="submit"
                  name=""
                  value="Sign Up"
                  // onClick={handleClick}
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

        <div style={{width:"200px",height:"200px", background:"red", alignItems:"center"}}>
          <input type="number" placeholder="otp"/>
        </div>
      </section>
    </div>
  );
};

export default Login;
