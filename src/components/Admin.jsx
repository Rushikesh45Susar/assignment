import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () =>{
    const navigate = useNavigate();
    const [add, setadd] = useState({t:false , m:false , back:false , button : true });
    const [theatre, settheatre] = useState([]);
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
    const theatrename = useInput();

    const addTheatre = async (e) => {
        e.preventDefault();
        const res = await fetch(`/addtheatre/${theatrename.value}`);
        const data = await res.json();
        if(data.affectedRows === 1){
            console.log("Theatre added successfully");
            setadd({t:false , m :false , back:false , button : true });
        }else{
            console.log("some error occurred");
        }
    }

    const getTheatre = async () => {
        const res = await fetch('/getTheatre');
        const data = await res.json();
        settheatre(data);
        console.log(data);
    }

    const movieName = useInput();
    const date = useInput();
    const thid = useInput();
    console.log(thid.value);
    const addMovie = async (e) => {
        e.preventDefault();
        if(thid.value === undefined){
            alert("Please select theater first");
            return;
        }
        const res = await fetch(`/addMovie/${movieName.value}/${date.value}/${thid.value}`);
        const data = await res.json();
        console.log(data);
    }

    const LogOut = () =>{
        navigate("/");
    }
    return(
        <>
        <div className="container text-center mt-3 mb-3">
            <h3>Welcome {}</h3>
        </div>
        <div className={`container mt-5 mb-5 col-5 ${add.button ? "" : "d-none"}`}>
            <ul className="nav nav-pills nav-fill justify-content-between">
                <li className="nav-item">
                    <button onClick={()=>{setadd({t:true , m :false , back:true , button : false})}} className='addButton'>Add Theatre</button>
                </li>
                <li className="nav-item">
                    <button onClick={()=>{setadd({t:false , m :true , back:true , button : false }); getTheatre()}} className='addButton'>Add Movie</button>
                </li>
            </ul>
        </div>

        <div className={`container mt-5 ${add.back ? "" : "d-none"}`}>
            <button className='backBtn' onClick={()=>{setadd({t:false , m :false , back:false , button : true })}}>Go Back</button>
        </div>

        <div className="container mt-5">
            <div className={`${add.t ? "" : "d-none"}`}>
                <div>Add Theater</div>
                <form onSubmit={(e)=>{addTheatre(e)}}>
                    <div className="mb-3">
                        <label for="theatre" className="form-label">Theatre Name</label>
                        <input {...theatrename} type="text" className="form-control" id="theatre" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className={`${add.m ? "" : "d-none"}`}>
                <div>Add Movie</div>
                <form onSubmit={(e)=>{addMovie(e)}}>
                    <div className="mb-3">
                        <label htmlFor="trt">Select Theatre</label>
                        <select {...thid} name="theatre" className='mx-3' id='trt'>
                            <option value="0">Select Option</option>
                            {Array.from(theatre).map(item =>{
                                return(
                                    <><option value={item.id}>{item.name}</option></>
                                )
                            })}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="moviename">Movie Name</label>
                        <input {...movieName} type="text" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date">Date</label>
                        <input {...date} type="date" />
                    </div>

                    <button type='submit' className='btn btn-primary'>Add Movie</button>
                </form>
            </div>

            <button onClick={()=>{LogOut()}}>Log Out</button>
        </div>

        </>
    )
}

export default Admin ;