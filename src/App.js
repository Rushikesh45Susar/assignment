import {Route , Routes} from "react-router-dom";
import Admin from "./components/Admin";
import Book from "./components/Book";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/book" element={<Book/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
    </>
  )
}

export default App;
