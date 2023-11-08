import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://b8a11-server-side-fahmida-an.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return services;
};

export default useServices;