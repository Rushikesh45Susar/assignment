import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';
import Header from './Header';


const Home = () => {
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
    const Login = async (e) => {
        e.preventDefault();
        const res = await fetch(`/admin/${user.value}`);
        const data = await res.json();
        if(data[0].password === pass.value){
            navigate('/admin');
        }else{
            alert("Wrong Password");
        }
    }
    return (
        <>
          <Header/>

            <div className="container col-4">
                <form onSubmit={(e)=>{Login(e)}}>
                    <div className="mb-3">
                        <label for="admin" className="form-label">Username</label>
                        <input type="text"{...user} className="form-control" id="admin" required/>
                        </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input {...pass} type="password" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Home;