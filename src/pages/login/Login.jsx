import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import {AiOutlineGoogle} from "react-icons/ai"

const Login = () => {
    const {logInUser, createAccountwithGoogle} = useContext(AuthContext)
    const [loginError, setLoginError] = useState()
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        logInUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
      
            axios.post('http://localhost:4000/jwt', user, {withCredentials: true})
            .then(res => {
              console.log(res.data);
              if(res.data.success){
                navigate( location?.state ? location.state : '/')
              }
            })
        })
        .catch(error => {
            setLoginError(error.message);
        })


    }

    const handleGoogleLogin = () =>{
      createAccountwithGoogle()
      .then(result =>{
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error =>{
        console.error(error)
      })
     }

    return (
       <div className="bg-white py-8">
         <div className="max-w-xl mx-auto bg-neutral1 h-[500px] border-2 rounded-xl p-10 mt-10 shadow-xl">
        <h2 className=" text-3xl text-center text-green1 font-bold  mb-4">
          GADGET HUB
        </h2>
        <form onSubmit={handleLogin}>
         
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-black">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="border  text-black text-sm rounded-lg block focus:ring-zinc2 focus:border-zinc4 w-full p-2.5"
              placeholder="your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-black ">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border focus:border-black  text-black text-sm rounded-lg block focus:ring-zinc2 w-full p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>
  
        
          <button
            type="submit"
            className="text-white w-full bg-gradient-to-r from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            LOGIN NOW
          </button>
        </form>
  
        {loginError && (
          <p className="text-red text-center mb-2">{loginError}</p>
        )}
        <div className="w-2/3 mx-auto text-center mt-1">
        <p onClick={handleGoogleLogin} className=" btn btn-sm bg-green-200 hover:bg-green-300">
          Login with <span className="font-bold text-xl text-green1"><AiOutlineGoogle></AiOutlineGoogle></span>
        </p>
        </div>
        <p className="text-center mt-1">
          Do not have an account?
          <span className="font-bold text-green1"><Link to={"/register"}>
            Register here
          </Link></span>
        </p>
        
      </div>
       </div>
    );
};

export default Login;