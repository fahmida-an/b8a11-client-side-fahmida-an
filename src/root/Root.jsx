import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-poppins bg-stone">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;