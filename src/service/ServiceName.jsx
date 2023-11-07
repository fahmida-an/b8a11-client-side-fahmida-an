import { Link } from "react-router-dom";

const ServiceName = ({service}) => {
    const {_id, serviceName} = service;
    return (
        <div>
            <Link to={`/services/${_id}`}><li className="border-b border-b-green1 p-3 list-none text-sm hover:bg-zinc hover:shadow-xl">{serviceName}</li></Link>
        </div>
    );
};

export default ServiceName;