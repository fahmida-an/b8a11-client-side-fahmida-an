import gadgets1 from "../../assets/images/gadgets1.jpg"
import gadget2 from "../../assets/images/gadget2.jpg"

const Banner = () => {
    return (

        
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={gadgets1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full left-0 top-0 bottom-0 bg-gradient-to-l from-zinc2 to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white text-center space-y-7 w-2/3 mx-auto ">
              <h2 className="text-5xl  font-bold">
              Your Trusted Electric Gadget Service Provider with Affordable Prices!
              </h2>
              
              <div>
              <button className="text-white bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-6 py-4 text-center mr-2 mb-2">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={gadget2} className="w-full" />
  
          <div className="absolute flex items-center h-full left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white space-y-7 pl-14 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car and Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
  
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
      </div>

            

    );
};

export default Banner;