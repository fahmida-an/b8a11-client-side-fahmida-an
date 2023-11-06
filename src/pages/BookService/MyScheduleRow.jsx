import PropTypes from "prop-types"
const MyScheduleRow = ({bookService}) => {
    const { _id,
        serviceImage,
        customerName,
        email,
        date,
        service,
        service_id,
        price

    
    } = bookService;
    return (
        <tr>
        <th>
          <button className="btn  btn-sm btn-square bg-red-500 ">
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
        <td>{service}</td>
        <td>{price}</td>

      </tr>
    );
};

export default MyScheduleRow;

MyScheduleRow.propTypes = {
    bookService: PropTypes.object
}