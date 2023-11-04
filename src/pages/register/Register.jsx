import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUserAccount, handleUpdateProfile} = useContext(AuthContext)
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photourl = form.get("photourl");
    console.log(name, email, password, photourl);

    if (password.length < 0) {
      setRegisterError("Password Length should be 6 characters long");
      return;
    } else if (!/^[!@#$%^&*()[\]{}|\\;:'"<>,.?/-_+=]+$/.test(password)) {
      setRegisterError("Error: Password should contain a special character.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        " Error: Password should contain a uppercase character."
      );
      return;
    }
    createUserAccount(email, password)
    .then(res => {
        handleUpdateProfile(name, photourl)
        .then(() => {
            navigate('/')
            
        })
        .catch(error => {
            console.log(error);
            setRegisterError(error.message)
        })
    })

    
  };

  return (
    <div className="max-w-2xl mx-auto bg-neutral1 p-5 mt-10">
      <h2 className=" py-8 text-2xl text-center font-bold border mb-8">
        REGISTER HERE
      </h2>
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="border text-black text-sm rounded-lg focus:ring-zinc2 focus:border-zinc4 block w-full p-2.5"
            placeholder="your name..."
            required
          />
        </div>
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

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-white">
            Photo URL
          </label>
          <input
            type="text"
            name="photourl"
            className="border text-black text-sm rounded-lg focus:ring-zinc2 focus:border-zinc4 block w-full p-2.5"
            placeholder="your image"
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 border rounded "
              required
            />
          </div>
          <label className="ml-2 text-sm font-medium text-zinc3 dark:text-gray-300">
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white w-full bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          REGISTER
        </button>
      </form>

      {registerError && (
        <p className="text-red text-center mb-2">{registerError}</p>
      )}
      <p className="text-center pb-8">
        Already have an account?{" "}
        <Link to={"/login"}>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
