import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';


const User = () => {
    const [login, setlogin] = useState(true);
    const navigate = useNavigate();
    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);
        const handleChange = (event) => {
          setValue(event.target.value);
        };
        return {
          value,
          onChange: handleChange,
        };
    };

    const user = useInput();
    const pass = useInput();
    const user2 = useInput();
    const pass1 = useInput();
    const pass2 = useInput();

    const Login = async (e) => {
        e.preventDefault();
        const res = await fetch(`/getuser/${user.value}`);
        const data = await res.json();
        if(data[0].password === pass.value){
            navigate({pathname:"/book" , hash:data[0].username });
        }else{
            alert("Wrong Password");
        }
    }

    const AddUser = async () =>{
        const res = await fetch(`/adduser/${user2.value}/${pass1.value}`);
        const data = await res.json();
        console.log(data);
    }

    const SignUp = (e) => {
        e.preventDefault();
        if(pass1.value === pass2.value){
            AddUser();
        }else{
            alert("Password do not match")
            return;
        }
    }
    return (
        <>
            <Header/>
            <div className="container col-4">
                <form onSubmit={(e) => { Login(e) }} className={`${login ? '' : 'd-none'}`}>
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input {...user} type="text" className="form-control" id="username" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword" className="form-label">Password</label>
                        <input {...pass} type="password" className="form-control" id="exampleInputPassword" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p className='mt-5'>Not a member? <a onClick={() => { setlogin(false) }} href='#'>Register</a></p>
                </form>

                <form onSubmit={(e) => { SignUp(e) }} className={`${login ? 'd-none' : ''}`}>
                    <div className="mb-3">
                        <label for="username2" className="form-label">Username</label>
                        <input {...user2} type="text" className="form-control" id="username2" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Enter Password</label>
                        <input {...pass1} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword2" className="form-label">Retype Password</label>
                        <input {...pass2} type="password" className="form-control" id="exampleInputPassword2" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p className='mt-5'>Already registered? <a onClick={() => { setlogin(true) }} href='#'>Login</a></p>
                </form>
            </div>
        </>
    )
}

export default User;