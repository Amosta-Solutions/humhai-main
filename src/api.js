import axios from 'axios';

const baseURL = 'https://humhai.in'; // Your API base URL

export const loginUser = async (credentials) => {
    console.log("hi",credentials)
  try {
    const response = await axios.post(`${baseURL}/hrms/LoginAPI/`, credentials);
    console.log(response.status,"response")
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
export const registerUser = async (credentials) => {
    console.log("hi",credentials)
    const registerData = ({
      username:credentials.registration.mobile,
      first_name:credentials.registration.firstName,
      last_name:credentials.registration.lastName,
      email:credentials.registration.email,
      password:credentials.registration.password,
      work:"register"
    })
    console.log(registerData,"registerData")
  try {
    const response = await axios.post(`${baseURL}/register-app/`, registerData);
    console.log(response.status,"response")
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};