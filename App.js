import Hero from "./components/Hero";
import {Routes,Route,useNavigate} from 'react-router-dom'
import Home from "./components/Home";
import {
  GoogleAuthProvider, signInWithPopup, signOut
} from "firebase/auth";
import {auth} from "./firebase"
import Page2 from "./components/Page2";
import { useState } from "react";



function App() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const navigate = useNavigate();
  const google = new GoogleAuthProvider();
  const sign = () => { 
    signInWithPopup(auth,google)
    .then((user) => {
      console.log(user.user.displayName)
      setUser(user.user.displayName)
      navigate('/home');
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <Routes>
      <Route path="/" element={<Hero sig={sign} />} />
      <Route path="/home" element={<Home signOut={signOut} user={user} />} />
      <Route path = "/page" element = {<Page2 />} />
    </Routes>
    // <div className="min-h-screen">
    //   <Hero/>
    // </div>
  );
}

export default App;
