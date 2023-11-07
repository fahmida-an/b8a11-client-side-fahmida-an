import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { AiOutlineGoogle } from "react-icons/ai";

const Register = () => {
  const { createUserAccount, handleUpdateProfile, createAccountwithGoogle } = useContext(AuthContext);
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
    createUserAccount(email, password).then((res) => {
      handleUpdateProfile(name, photourl)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setRegisterError(error.message);
        });
    });
  };

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
      <div className="max-w-xl mx-auto bg-neutral1 p-10 mt-10 shadow-xl rounded-xl">
        <h2 className=" text-3xl text-center font-bold mb-8 text-green1">
          GADGET HUB
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
              I agree with the
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white w-full bg-gradient-to-r from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            REGISTER NOW
          </button>
        </form>

        {registerError && (
          <p className="text-red text-center mb-2">{registerError}</p>
        )}

        <div className="w-2/3 mx-auto text-center mt-1">
          <p onClick={handleGoogleLogin} className=" btn btn-sm bg-green-200  hover:bg-green-300">
            Login with
            <span className="font-bold text-xl text-green1">
              <AiOutlineGoogle></AiOutlineGoogle>
            </span>
          </p>
        </div>
        <p className="text-center pb-8">
          Already have an account?
          <span className="font-bold text-green1 ">
            <Link to={"/login"}>Login here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
