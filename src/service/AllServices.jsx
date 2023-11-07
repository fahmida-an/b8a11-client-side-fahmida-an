import useServices from "../hooks/useServices";
import NavBar from "../pages/navbar/NavBar";
import ServiceCard from "./ServiceCard";
const AllServices = () => {
  const services = useServices();
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h2 className="py-8 text-4xl text-center font-bold text-green1"> All Sevices</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">

        {
        
        services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default AllServices;
