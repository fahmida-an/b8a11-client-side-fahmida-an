import { useEffect, useState } from "react";
import AllBookScheduleRow from "./AllBookScheduleRow";
// import axios from "axios";

const AllBookService = () => {
  
    const[bookServices, setBookServices] = useState([]);
    const url = 'http://localhost:4000/allBookServices';
    useEffect(() => {
    // axios.get(url, {withCredentials: true})
    // .then(res => {
    //     setBookServices(res.data)

     fetch(url)
    .then(res => res.json())
    .then(data => setBookServices(data))
    }, [url])

   

// },[url])

const handleBookingsApprove = id => {
  fetch(`http://localhost:4000/bookServices/${id}`, {
    method: 'PATCH',
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({status: 'Approve'})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.modifiedCount > 0) {
      // alert('update state')
      const remaining = bookServices.filter(bookServices => bookServices._id !== id);
      const updated = bookServices.find(bookServices => bookServices._id === id);
      updated.status = 'Approve';
      const newBookService = [updated, ...remaining];
      setBookServices(newBookService)
    }
  })
}


    return (
        <div>
            <h2>My Services {bookServices.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>email</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
   {
    bookServices.map(bookService => <AllBookScheduleRow
        key={bookService._id} 
        bookService={bookService}
        handleBookingsApprove = {handleBookingsApprove}
        ></AllBookScheduleRow>)
   }
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AllBookService;