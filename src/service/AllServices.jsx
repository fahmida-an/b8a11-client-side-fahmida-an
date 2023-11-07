import { useState } from "react";
import useServices from "../hooks/useServices";
import NavBar from "../pages/navbar/NavBar";
import ServiceCard from "./ServiceCard";
const AllServices = () => {
  const services = useServices();
  const [showAll, setShowAll] = useState(false);
  const serviceAll = showAll ? services :  services.slice(0,6)
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h2 className="py-8 text-4xl text-center font-bold text-green1"> All Sevices</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">

        {
        
        serviceAll.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-8 text-center">
      <button className="text-white bg-green-500 rounded-lg px-5 py-2.5 text-center mr-2 mb-2" onClick={()=> setShowAll(!showAll)}>
        {
          showAll ? "Show Less" : 'Show All'
        }
      </button>
      </div>
    </>
  );
};

export default AllServices;
