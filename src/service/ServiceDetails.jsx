import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../hooks/useServices'; // Import the service data hook
import NavBar from '../pages/navbar/NavBar';

const ServiceDetails = () => {
  const services = useServices(); // Assuming useServices is a custom hook to fetch service data
  const [serviceCard, setServiceCard] = useState(null); // Initialize as null

  const { id } = useParams();

  useEffect(() => {
    const serviceDetail = services.find((service) => service._id === id);

    if (serviceDetail) {
      setServiceCard(serviceDetail);
    } else {
      console.error(`Service with id ${id} not found.`);
    }
  }, [id, services]);

  if (!serviceCard) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  return (
    <div>
        <NavBar></NavBar>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        <div className="lg:col-span-2">
          <img
            className="max-w-xl mx-auto h-[300] lg:max-w-4xl lg:mx-auto lg:h-[400px] mb-10"
            src={serviceCard.serviceImage} 
            alt=""
          />
          <h1 className="text-3xl text-center font-bold mx-auto">
            {serviceCard.serviceName}
          </h1>
          <p className="mt-3 text-xl text-center">
            {serviceCard.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
