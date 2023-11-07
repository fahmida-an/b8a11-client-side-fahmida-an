import axios from "axios";

const AddService = () => {

    const handleAddServices = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const serviceImage = form.get('image')
        const serviceName = form.get('name')
        const price = form.get('price')
        const providerName = form.get('providerName')
        const providerImage = form.get('providerImage')
        const providerLocation = form.get('providerLocation')
        const providerDescription = form.get('providerDescription')
        const details = form.get('details')
        const newService = {serviceImage, serviceName, price, providerName,providerImage, providerLocation, providerDescription, details}
        console.log(newService);

        // send services to server

        axios.post('http://localhost:4000/services', newService)
        .then(data => {
          console.log(data.data);
          if(data.data.insertedId){
            console.log('data added');
            
          }
          
        })


    }
    return (
        <div className="max-w-xl mx-auto">
      <h2 className="text-center py-6 font-bold text-4xl text-green1">Add a Service</h2>
      <form onSubmit={handleAddServices} className="bg-neutral1 max-w-xl mx-auto rounded-lg shadow-xl">
        
          <div className="form-control pt-8 px-8">
            <label className="label">
              <span className="label-text">Service Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
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
                placeholder="Provider Image"
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
                placeholder="Details"
                className="input input-bordered text-sm w-full focus:ring-zinc2 focus:border-zinc4"
                required
              />
            </label>
          </div>
      
          <div className="py-4 px-8">
          <input type="submit" value="Add Service" className="w-full text-white bg-gradient-to-r  from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none rounded-lg px-5 py-2.5 text-center mr-2 mb-2"  />


          </div>
      </form>
    </div>
    );
};

export default AddService;