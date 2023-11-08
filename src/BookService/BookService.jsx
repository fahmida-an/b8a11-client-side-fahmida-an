import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyScheduleRow from "./MyScheduleRow";
import axios from "axios";

const BookService = () => {
    const {user} = useContext(AuthContext);
    const[bookServices, setBookServices] = useState([]);
    const url = `https://b8a11-server-side-fahmida-an.vercel.app/bookServices?email=${user?.email}`;
    useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
        setBookServices(res.data)
    })

    // fetch(url)
    // .then(res => res.json())
    // .then(data => setBookServices(data))

},[url])

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
          alert('deleted Successful')
          const remaining = bookServices.filter(bookServices => bookServices._id !== id)
          setBookServices(remaining)
        }
      }
      );
  }
}
    return (
        <div className="bg-white shadow-2xl max-w-5xl mx-auto ">
            <h2 className="py-8 font-bold text-3xl text-green1 text-center">My Schedule</h2>
            <div className="overflow-x-auto">
  <table className="table">
    <thead className="font-bold text-black">
      <tr>
        <th></th>
        <th>Provider Name</th>
        <th>Provider Email</th>
        <th>Service</th>
        <th>Price: $ </th>
        <th>Date</th>
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
   {
    bookServices.map(bookService => <MyScheduleRow
        key={bookService._id} 
        bookService={bookService}
        handleDelete={handleDelete}
        ></MyScheduleRow>)
   }
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default BookService;