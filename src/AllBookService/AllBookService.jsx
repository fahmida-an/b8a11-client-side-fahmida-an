import { useEffect, useState } from "react";
import AllBookScheduleRow from "./AllBookScheduleRow";
// import axios from "axios";
import swal from "sweetalert";

const AllBookService = () => {
  
    const[bookServices, setBookServices] = useState([]);
    const url = 'https://b8a11-server-side-fahmida-an.vercel.app/allBookServices';
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
  fetch(`https://b8a11-server-side-fahmida-an.vercel.app/bookServices/${id}`, {
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

const handleDelete = id => {
  const proceed = confirm('Are you sure you want to delete')
  if(proceed){
      fetch(`https://b8a11-server-side-fahmida-an.vercel.app/bookServices/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
          swal("Successfully", "Deleted", "success");
          const remaining = bookServices.filter(bookServices => bookServices._id !== id)
          setBookServices(remaining)
        }
      }
      );
  }
}

    return (
        <div className="bg-white shadow-2xl max-w-5xl mx-auto">
            <h2 className="py-8 text-3xl text-center font-bold text-green1">All Book Services</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
      <th>Service</th>
        <th>Provider Name</th>
        <th>Provider Email</th>
        <th>Price: $ </th>
        <th>Date</th>

        <th></th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
   {
    bookServices.map(bookService => <AllBookScheduleRow
        key={bookService._id} 
        bookService={bookService}
        handleBookingsApprove = {handleBookingsApprove}
        handleDelete = {handleDelete}
        ></AllBookScheduleRow>)
   }
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AllBookService;