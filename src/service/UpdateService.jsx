import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import useServices from "../hooks/useServices";

const UpdateService = () => {
  const checkService = useServices();
  const [checkServiceCard, setCheckServiceCard] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkServiceDetail = checkService.find(
      (service) => service._id === id
    );

    if (checkServiceDetail) {
      setCheckServiceCard(checkServiceDetail);
    } else {
      console.log(console.error);
    }
  }, [id, checkService]);

  if (!checkService) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  const handleUpdateBookService = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const serviceImage = form.get("image");
    const serviceName = form.get("name");
    const price = form.get("price");
    const providerName = form.get("providerName");
    const providerImage = form.get("providerImage");
    const providerEmail = form.get("providerEmail");
    const providerLocation = form.get("providerLocation");
    const providerDescription = form.get("providerDescription");
    const details = form.get("details");

    const updatedServices = {
      serviceImage,
      serviceName,
      price,
      providerName,
      providerImage,
      providerEmail,
      providerDescription,
      providerLocation,
      details,
    };
    console.log(updatedServices);

    axios
      .put(
        `https://b8a11-server-side-fahmida-an.vercel.app/services/${id}`,
        updatedServices
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount) {
          console.log("data added");
          swal("Successfully", "Data Updated", "success");
          navigate("/manageAllServices");
        }
      });
  };
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-center py-6 font-bold text-4xl text-green1">
        Add a Service
      </h2>
      <form
        onSubmit={handleUpdateBookService}
        className="bg-neutral1 max-w-xl mx-auto rounded-lg shadow-xl"
      >
        <div className="form-control pt-8 px-8">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="image"
              defaultValue={checkServiceCard.serviceImage}
              placeholder="Service Image"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>
        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              defaultValue={checkServiceCard.serviceName}
              placeholder="Service name"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Service Price</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="price"
              defaultValue={checkServiceCard.price}
              placeholder="Service price"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>
        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Provider Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="providerName"
              defaultValue={checkServiceCard.providerName}
              placeholder="Provider Name"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Provider Image</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="providerImage"
              defaultValue={checkServiceCard.providerImage}
              placeholder="Provider Image"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>
        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Provider Email</span>
          </label>
          <label className="input-group">
            <input
              type="email"
              name="providerEmail"
              defaultValue={checkServiceCard.providerEmail}
              placeholder="Provider Email"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Provider Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="providerDescription"
              defaultChecked={checkServiceCard.providerDescription}
              placeholder="Provider Description"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Provider Location</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="providerLocation"
              defaultValue={checkServiceCard.providerLocation}
              placeholder="Provider Location"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text">Service Details</span>
          </label>
          <label className="input-group">
            <textarea
              type="text"
              name="details"
              defaultValue={checkServiceCard.details}
              placeholder="Details"
              className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
              required
            />
          </label>
        </div>

        <div className="py-4 px-8">
          <input
            type="submit"
            value="Update Service"
            className="w-full text-white bg-gradient-to-r  from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
