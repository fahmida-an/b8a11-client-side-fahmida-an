import { Link } from "react-router-dom";

const ServiceName = ({service}) => {
    const {_id, serviceName} = service;
    return (
        <div>
            <Link to={`/services/${_id}`}><h2>{serviceName}</h2></Link>
        </div>
    );
};

export default ServiceName;