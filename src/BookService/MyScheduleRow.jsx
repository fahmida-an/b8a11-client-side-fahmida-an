import PropTypes from "prop-types"
const MyScheduleRow = ({bookService, handleDelete}) => {
    const { _id,
        serviceImage,
        customerName,
        email,
        date,
        service,
        service_id,
        price,
        providerName,
        providerEmail
    
    } = bookService;

   
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {serviceImage && <img src={serviceImage} alt="" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>{providerName}</td>
        <td>{providerEmail}</td>
        <td>{service}</td>
        <td>${price}</td>
        <td className="text-red-400">{date}</td>

        <th>
          <button onClick={()=> handleDelete(_id)} className="btn  btn-sm btn-square bg-yellow-200 text-red-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
      </tr>
    );
};

export default MyScheduleRow;

MyScheduleRow.propTypes = {
    bookService: PropTypes.object
}