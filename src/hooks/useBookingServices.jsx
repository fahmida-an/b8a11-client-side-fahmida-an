import { useEffect, useState } from "react";

const useBookingServices = () => {
    const [bookServices, setBookServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setBookServices(data))
    }, [])

    return bookServices;
};


export default useBookingServices;