import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu , BiUpArrow, BiDownArrow} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [onDash, setOnDash] = useState(false);
    const [clickImg, setClickImg] = useState(false);

    const handleLogout = () => {
      logOut()
      .then(result => console.log(result))
      .catch(error => console.log(error))
    }
    return (
      <nav className="bg-white">
        <div className="flex items-center font-medium justify-around">
          <div className="z-20 p-5 md:w-auto w-full flex justify-between">
            <h1 className="text-2xl font-bold uppercase text-teal-900">Gadget Hub</h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <BiMenu />}
            </div>
          </div>
  
          <ul className="md:flex hidden items-center gap-8">
            <li>
              <NavLink to={"/"} className={({ isActive}) => 
              isActive? "py-7 px-3 text-teal-900 inline-block underline " : "py-7 px-3 inline-block text-teal-900 hover:underline"
            }>
                Home
              </NavLink>
            </li>

            <li>
            <NavLink to={"/allServices"} className={({ isActive}) => 
              isActive? "py-7 px-3 text-teal-900 inline-block underline " : "py-7 px-3 inline-block text-teal-900 hover:underline"
            }>
                Services
              </NavLink>
            </li>
           
            { user?.email ? <>
                <li onClick={() => setOnDash(!onDash)}
                className="py-7 px-3 inline-block cursor-pointer relative "
            >
              <div className="flex items-center space-x-2">
                <span className="text-teal-900 hover:underline">Dashboard</span>
                {onDash ? <BiUpArrow className="text-green1" /> :  <BiDownArrow className="text-green1" /> }
              </div>
  
              {onDash && (
                <div className="mt-7 transition absolute border shadow-xl w-52 text-center justify-center h-[180px] z-10 bg-neutral1 rounded-xl">
                  
                  <li className="mb-2 p-2 hover:bg-zinc ro">
                    <Link to={"/addServices"} className=" text-teal-900">
                      Add Services
                    </Link>
                  </li>
                  <li className=" p-2 hover:bg-zinc">
                    <Link to={"/bookServices"} className="text-teal-900">
                      My Schedules
                    </Link>
                  </li>

                  <li className="mt-4 mb-2 p-2 hover:bg-zinc ">
                    <Link to={"/manageServices"} className="text-teal-900">
                      Manage Services
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <div className="flex gap-2">
            <img onClick={() => setClickImg(!clickImg)} className="w-12 h-12 rounded-full border-green1 border-2 inline-block cursor-pointer relative" src={user.photoURL} alt="" />
            {
              clickImg &&
              <div className="mt-16 ml-3 transition absolute border shadow-xl w-60 text-center justify-center h-[130px] z-10 bg-neutral1 rounded-xl">
              <li className="mt-3 mb-1 p-2 hover:bg-zinc text-teal-900">{user.displayName}</li>
              <li className="mt-2 mb-1 p-2 hover:bg-zinc text-teal-900">{user.email}</li>
            </div>
            }
            <button onClick={handleLogout} className="text-white bg-gradient-to-r from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Log Out</button>
            </div>
              </>
            :
            <div className="md:block hidden">
          <Link to={'/login'}>
          <button className="text-white bg-gradient-to-r from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
          </Link>
          </div>
              
            }
                   
          </ul>
  
          
          {/* mobile nav  */}
  
          <div
            className={`md:hidden bg-neutral1 absolute w-full h-full bottom-0 py-24 z-10
                  px-5 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
          >
            <ul>
              <li>
                <Link to={"/"} className="w-full py-5 text-center justify-start px-3 border inline-block hover:bg-zinc text-teal-900">
                  services
                </Link>
              </li>
             
              {
                user?.email ?
                <>
                  <li className=" ">
                    <Link to={"/myServices"} className="w-full py-5 text-center justify-start px-3 border inline-block hover:bg-zinc text-teal-900">
                      My Services
                    </Link>
                  </li>
                  <li>
                    <Link to={"/addServices"} className=" w-full py-5 text-center justify-start px-3 border inline-block hover:bg-zinc text-teal-900">
                      Add Services
                    </Link>
                  </li>
                  <li>
                    <Link to={"/bookServices"} className="w-full py-5 text-center justify-start px-3 border inline-block hover:bg-zinc text-teal-900">
                      My Schedules
                    </Link>
                  </li> 
                </>

                :<>
                <li>
                    <Link to={"/login"} className="w-full py-5 text-center justify-start px-3 border inline-block hover:bg-zinc text-teal-900">
                      Login
                    </Link>
                  </li>
                </>
              }
            
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;