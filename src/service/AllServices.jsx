import useServices from "../hooks/useServices";
import ServiceCard from "./ServiceCard";
const AllServices = () => {
  const services = useServices();
  return (
    <>
      <div>
        <h2 className="py-10 text-5xl text-center font-bold"> All Sevices</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default AllServices;
