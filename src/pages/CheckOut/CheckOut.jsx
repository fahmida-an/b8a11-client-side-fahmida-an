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
        console.log(console.error);
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
      
        <div className="max-w-xl mx-auto h-screen bg-white">
            <h1 className="text-3xl text-center py-8 text-green1 font-bold ">Book Service Now</h1>
            <form onSubmit={handleCheckBookService} className="card-body">
         <div className="grid grid-cols-1 gap-3">
         <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-lg">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered text-sm "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-lg">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                defaultValue={user?.email}
                 className="input input-bordered text-sm "
                 required
               />
             </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-lg">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered text-sm "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-lg">Due Amount</span>
               </label>
               <input
                 type="text"
                 defaultValue={checkServiceCard?.price}
                 className="input input-bordered text-sm"
                 required
               />
             </div>

             <input className="btn text-lg font-bold mt-3 text-white bg-gradient-to-r from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br" type="submit" value={'Confirm Service'} />
         </div>       
            
               
  
           </form>
        </div>
    );
};

export default CheckOut;