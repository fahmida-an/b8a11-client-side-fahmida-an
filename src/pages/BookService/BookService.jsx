import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import MyScheduleRow from "./MyScheduleRow";

const BookService = () => {
    const {user} = useContext(AuthContext);
    const[bookServices, setBookServices] = useState([]);
    const url = `http://localhost:4000/bookServices?email=${user?.email}`;
    useEffect(() => {
    // axios.get(url, {withCredentials: true})
    // .then(res => {
    //     setBookServices(res.data)
    // })

    fetch(url)
    .then(res => res.json())
    .then(data => setBookServices(data))

},[url])
    return (
        <div>
            <h2>My Schedule {bookServices.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
   {
    bookServices.map(bookService => <MyScheduleRow
        key={bookService._id} 
        bookService={bookService}
        ></MyScheduleRow>)
   }
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default BookService;