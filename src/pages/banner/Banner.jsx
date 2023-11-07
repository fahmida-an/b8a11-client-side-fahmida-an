import gadget1 from "../../assets/images/banner3.jpg"

const Banner = () => {
    return (
 
        <div className="carousel w-full h-[600px]">
        <div className="carousel-item relative w-full">
          <img src={gadget1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full left-0 top-0 bottom-0 bg-gradient-to-l from-teal-400 to-[rgba(0, 128, 0, 0.7)] rounded-xl">
            <div className="text-black text-center space-y-7 w-2/3 mx-auto ">
              <h2 className="text-5xl  font-bold">
              Your Trusted Electric Gadget Service Provider with Affordable Prices!
              </h2>
              
              <div>
              <button className="text-white bg-yellow-400 rounded-lg px-6 py-3 font-bold text-center mr-2 mb-2">Get Started</button>
              </div>
            </div>
          </div>
        </div>
   
      </div>

            

    );
};

export default Banner;