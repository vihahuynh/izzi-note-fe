import axios from 'axios';

const baseUrl = 'http://localhost:3001/auth';

interface ILoginPayload {
  email: string;
  password: string;
}

const login = () => {
  return axios.post(`${baseUrl}/signin`, {
    email: 'huynhviha@gmail.com',
    password: '123142141',
  });
};

const authServices = { login };

export default authServices;
