import axios from 'axios';
import React, { useState, FormEvent, FunctionComponent } from 'react'
import { Link } from 'react-router-dom';
import '../LoginForm/LoginForm.css'
import styled from 'styled-components';

const API_URL = "https://reqres.in/api";

const Center = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
background: white;
border-radius: 10px;
`;
const Title = styled.h1`
text-align: center;
padding: 0 0 20px 0;
border-bottom: 1px solid silver;
`;
const Form = styled.form`
padding: 0 60px;
box-sizing: border-box;
`;
const Label = styled.label`
position: absolute;
top: 50%;
left: 5px;
color: #adadad;
transform: translateY(-50%);
font-size: 16px;
pointer-events: none;
transition: .5s;
`;
const Input = styled.input`
width: 100%;
padding: 0.5px;
height: 40px;
font-size: 16px;
border: none;
background: none;
outline: none;
`;

const LoginForm: FunctionComponent = () => {
    const validateEmail = (mail: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
    const validatePassword = (password: string) => {

        if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            // toast.success('pass');
            return true;
        }
        return false;
    }

    const [LoginFormData, setLoginFormData] = useState({ email: '', password: '' });

    const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({ ...LoginFormData, [event.currentTarget.name]: event.currentTarget.value });

    }
    const handleOnFormSubmit = async (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const reqData = {
            "email": LoginFormData?.email,
            "password": LoginFormData?.password,
        }
        if (reqData.email !== "" && reqData.password !== "") {

            validateEmail(reqData.email)
            validatePassword(reqData.password)

            try {
                const resData = await axios.post(
                    `${API_URL}/Register`,
                    reqData);

                if (resData.status === 200) {
                    localStorage.setItem('token', resData.data.token)
                    alert("you are registered successfully.")

                } else {
                    localStorage.setItem('token', "")
                    alert("something went wrong.")
                }
            }
            catch (e) {
                console.log(e);
                alert("Form submited with error")
                localStorage.setItem('token', "")
            }
        }
        else {
            alert("Email and Password should not be empty.")
        }
        console.log(LoginFormData.email, LoginFormData.password)
    }
    return (
        <div>
            <Center className="center">
                <Title>Login form</Title>
                <Form method="post">
                    <div className="txt_field">
                        <Input type="text" name="email" onChange={handleOnInputChange} />
                        <span></span>
                        <Label>Email</Label>
                    </div>
                    <div className="txt_field">
                        <Input type="password" name="password" onChange={handleOnInputChange} />
                        <span></span>
                        <Label>Password</Label>
                    </div>
                    <button className="signup" onClick={handleOnFormSubmit}>Signup</button>
                    <span className='link'><Link to="/signup">Signup</Link></span>
                    <div className="signup_link">
                    </div>
                </Form>
            </Center>
        </div>
    )
}


export default LoginForm
