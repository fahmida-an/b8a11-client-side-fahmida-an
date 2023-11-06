import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu , BiSolidUpArrow, BiSolidDownArrow} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [on, setOn] = useState(false);

    const handleLogout = () => {
      logOut()
      .then(result => console.log(result))
      .catch(error => console.log(error))
    }
    return (
      <nav className="bg-neutral1">
        <div className="flex items-center font-medium justify-around">
          <div className="z-20 p-5 md:w-auto w-full flex justify-between">
            <h1 className="text-2xl text-black font-bold uppercase">Gadget Hub</h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <BiMenu />}
            </div>
          </div>
  
          <ul className="md:flex hidden items-center gap-8">
            <li>
              <Link to={"/"} className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/allServices"} className="py-7 px-3 inline-block">
                Services
              </Link>
            </li>
           
            { user?.email ? <>
                <li onClick={() => setOn(!on)}
                className="py-7 px-3 inline-block cursor-pointer relative "
            >
              <div className="flex items-center space-x-2">
                <span>Dashboard</span>
                {on ? <BiSolidUpArrow /> :  <BiSolidDownArrow /> }
              </div>
  
              {on && (
                <div className="mt-7 transition absolute border shadow-xl w-52 text-center justify-center h-[180px] z-10 bg-neutral1 rounded-xl">
                  <li className="mt-4 mb-2 p-2 hover:bg-zinc ">
                    <Link to={"/myServices"} className="">
                      My Services
                    </Link>
                  </li>
                  <li className="mb-2 p-2 hover:bg-zinc ro">
                    <Link to={"/addServices"} className="">
                      Add Services
                    </Link>
                  </li>
                  <li className=" p-2 hover:bg-zinc">
                    <Link to={"/bookServices"} className="">
                      My Schedules
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <div>
            {user.displayName}
            <button onClick={handleLogout} className="text-white bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log Out</button>
            </div>
              </>
            :
            <div className="md:block hidden">
          <Link to={'/register'}>
          <button className="text-white bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
          </Link>
          </div>
              
            }
                   
          </ul>
  
          
          {/* mobile nav  */}
  
          <div
            className={`md:hidden bg-neutral1 absolute w-full h-full bottom-0 py-24
                  px-5 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
          >
            <ul>
              <li>
                <Link to={"/"} className="w-full py-5 mb-3 text-center justify-start border inline-block hover:bg-zinc">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/"} className="w-full py-5 text-center justify-start px-3 border inline-block hover:bg-zinc">
                  services
                </Link>
              </li>
              
            
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;