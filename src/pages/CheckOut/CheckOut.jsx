import { useContext, useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const CheckOut = () => {
    const checkService = useServices();
    const {user} = useContext(AuthContext)
    const [checkServiceCard, setCheckServiceCard] = useState(null);
    const { id } = useParams();
    useEffect(() => {
      const checkServiceDetail = checkService.find((service) => service._id === id);
  
      if (checkServiceDetail) {
        setCheckServiceCard(checkServiceDetail);
      } else {
        console.error(`Service with id ${id} not found.`);
      }
    }, [id, checkService]);
  
    if (!checkService) {
      return <span className="loading loading-spinner loading-lg"></span>;
    }

    const handleCheckBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const bookServices = {
            customerName: name,
            email,
            serviceImage: checkServiceCard.serviceImage,
            date,
            service: checkServiceCard.serviceName,
            service_id: checkServiceCard._id,
            price: checkServiceCard.price

        }
       console.log(bookServices);

       axios.post('http://localhost:4000/bookServices',bookServices)
       .then(data => {
        console.log(data.data);
        if(data.data.insertedId){
          console.log('data added');
          
        }
    })


    }
    return (
        <div>
            <h1 className="text-3xl text-center py-8 ">Book Now</h1>
            <form onSubmit={handleCheckBookService} className="card-body">
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
         <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                defaultValue={user?.email}
                 className="input input-bordered "
                 required
               />
             </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Due Amount</span>
               </label>
               <input
                 type="text"
                 defaultValue={checkServiceCard?.price}
                 className="input input-bordered "
                 required
               />
             </div>
         </div>
         
          
             <div className="form-control mt-3">
               <input className="btn font-bold" type="submit" value={'Confirm Service'} />
             </div>
           </form>
        </div>
    );
};

export default CheckOut;