import useServices from "../hooks/useServices";
import NavBar from "../pages/navbar/NavBar";
import ManageAllServiceCard from "./ManageAllServiceCard";

const ManageAllService = () => {
    const services = useServices();
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h2 className="py-8 text-4xl text-center font-bold text-green1"> Manage Sevices</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">

        {
        
        services.map((service) => (
          <ManageAllServiceCard key={service._id} service={service}></ManageAllServiceCard>
        ))}
      </div>
      <div className="mt-8 text-center">
     
      </div>
    </>
  );
};

export default ManageAllService;