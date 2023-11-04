import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {logInUser} = useContext(AuthContext)
    const [loginError, setLoginError] = useState()
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        logInUser(email, password)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(error => {
            setLoginError(error.message);
        })
    }

    return (
        <div className="max-w-2xl mx-auto bg-neutral1 p-5 mt-10">
        <h2 className=" py-8 text-2xl text-center font-bold border mb-8">
          LOGIN HERE
        </h2>
        <form onSubmit={handleLogin}>
         
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-black dark:text-white">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="border text-black text-sm rounded-lg focus:ring-zinc2 focus:border-zinc4 block w-full p-2.5"
              placeholder="your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border text-black text-sm rounded-lg focus:ring-zinc2 focus:border-zinc4 block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>
  
        
          <button
            type="submit"
            className="text-white w-full bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>
        </form>
  
        {loginError && (
          <p className="text-red text-center mb-2">{loginError}</p>
        )}
        <p className="text-center pb-8">
          Do not have an account?{" "}
          <Link to={"/login"}>
            Register here
          </Link>
        </p>
      </div>
    );
};

export default Login;