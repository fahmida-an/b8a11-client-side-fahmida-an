const AddService = () => {

    const handleAddServices = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const serviceImage = form.get('image')
        const serviceName = form.get('name')
        const price = form.get('price')
        const providerName = form.get('providerName')
        const providerImage = form.get('providerImage')
        const details = form.get('details')
        const newService = {serviceImage, serviceName, price, providerName,providerImage, details}
        console.log(newService);

        // send services to server

        fetch('http://localhost:4000/services', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // if(data.insertedId > 0){
            //     alert('Success');
            //   }
            form.reset();
        })

    }
    return (
        <div className="max-w-xl mx-auto">
      <h2 className="text-center py-4 font-bold text-5xl bg-zinc">Add a Service</h2>
      <form onSubmit={handleAddServices} className="bg-neutral1 max-w-xl mx-auto">
        
          <div className="form-control pt-8 px-8">
            <label className="label">
              <span className="label-text">Service Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Service Image"
                className="input input-bordered text-sm w-full "
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
                className="input input-bordered text-sm w-full"
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
                className="input input-bordered text-sm w-full"
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
                className="input input-bordered text-sm w-full"
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
                className="input input-bordered text-sm w-full"
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
                className="input input-bordered text-sm w-full"
              />
            </label>
          </div>
      
          <div className="py-4 px-8">
          <input type="submit" value="Add Service" className="text-white bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg  px-5 py-3 text-center mr-2 mb-2 w-full"  />


          </div>
      </form>
    </div>
    );
};

export default AddService;