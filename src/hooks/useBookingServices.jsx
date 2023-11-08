import { useEffect, useState } from "react";

const useBookingServices = () => {
    const [bookServices, setBookServices] = useState([]);
    useEffect(() => {
        fetch('https://b8a11-server-side-fahmida-an.vercel.app/services')
        .then(res => res.json())
        .then(data => setBookServices(data))
    }, [])

    return bookServices;
};


export default useBookingServices;