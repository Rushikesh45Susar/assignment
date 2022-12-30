import React , {useState , useEffect} from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
const Book = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [theatre, settheatre] = useState([]);
    const [movie, setmovie] = useState([]);
    const getTheatre = async () => {
        const res = await fetch('/getTheatre');
        const data = await res.json();
        settheatre(data);
        console.log(data);
    }

    const getMovie = async () => {
        const res = await fetch('/getMovie');
        const data = await res.json();
        setmovie(data);
        console.log(data);
    }

    const LogOut = () =>{
        navigate("/");
    }
    console.log();
    const book = async (movie, date  , thid , slots ) => {
        var seats = prompt("Enter the value of seats");
        if(seats > slots){
            alert("Slots not available");
            return;
        }
        const res = await fetch(`/book/${movie}/${thid}/${date}/${location.hash.slice(1)}/${seats}/${slots}`);
        const data = await res.json();
        console.log(data);
        window.location.reload();
    }
    useEffect(() => {
      getTheatre();
      getMovie();
    }, [])
    
    return(
        <>
         <h3>Hello {location.hash.slice(1)}</h3>

        <div className="container">
            {Array.from(movie).map(item =>{
                return(
                    <>
                    <div className='bookdiv'>
                        <p>Movie: {item.name}</p>
                        <p>Theater : {Array.from(theatre).map(item2 =>{
                            if(item2.id === item.th_id)
                                return item2.name ;
                        })}</p>
                        <p>Slots Available: {item.slots}</p>
                        <p>Movie Date: {item.movie_date.slice(0,10)}</p>
                        <button onClick={()=>{book(item.name , item.movie_date , item.th_id , item.slots)}}>Book Slots</button>
                    </div>
                    </>
                )
            })}
        </div>
         <button onClick={()=>{LogOut()}}>Log Out</button>
        </>
    )
}

export default Book;