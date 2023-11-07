import profile1 from "../../assets/images/pr1.jpg"
import profile2 from "../../assets/images/pr2.jpg"
import profile3 from "../../assets/images/pr3.jpg"
const ClientReview = () => {
    return (
        <div className="mt-5 h-[600px]">
            <p className=" text-center text-sm pb-4 uppercase text-yellow-400 font-bold">testimonial</p>
            <h2 className=" text-4xl text-teal-900 text-center font-bold mb-8">What Client Say</h2>

            <div className="border border-b-4 w-16 mx-auto border-yellow-400"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto">
    <div className="mx-auto">
    <div className="w-64 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8 relative" src={profile1} alt="" />
      <p className="text-center font-bold mt-3">Arisha jahan</p>
      </div>
     
      <div className=" w-64 h-72 bg-yellow-50 rounded-xl  ">
        <p className="py-20 px-2 font-rancho text-sm"> &apos;&apos;Thrilled with the drone service! Exceptional aerial shots, professional team. Elevated our projects. Highly recommended! &apos;&apos;</p>
      </div>
    </div>
    <div className="mx-auto">
     <div className="w-64 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8" src={profile3} alt="" />
      <p className="text-center font-bold mt-3">Maha Alam</p>
      </div>
     
      <div className=" w-64 h-72 bg-yellow-50 rounded-xl ">
        <p className="py-20 px-2 font-rancho text-sm"> &apos;&apos;Virtual headset is a game-changer! Immersive experiences, stunning visuals, and endless possibilities. A must-have for tech enthusiasts. &apos;&apos;</p>
      </div>
     </div>
      <div className="mx-auto">
      <div className="w-64 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8" src={profile2} alt="" />
      <p className="text-center font-bold mt-3">Liana Ahmed</p>
      </div>
     
      <div className=" w-64 h-72 bg-yellow-50 rounded-xl ">
        <p className="py-20 px-2 font-rancho text-sm"> &apos;&apos;Outstanding camera service! Quality gear, expert advice, and seamless transactions. Perfect for photographers and videographers &apos;&apos;</p>
      </div>
      </div>
     <div className="mx-auto">
     <div className="w-64 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8" src={profile3} alt="" />
      <p className="text-center font-bold mt-3">Aysha Begum</p>
      </div>
     
      <div className=" w-64 h-72 bg-yellow-50 rounded-xl ">
        <p className="py-20 px-2 font-rancho text-sm"> &apos;&apos;Wow! These headphones are incredible. The sound quality is top-notch, and they are so comfortable to wear for extended periods. I&apos;m truly impressed with the value for the price. &apos;&apos;</p>
      </div>
     </div>
    </div>
        </div>
    );
};

export default ClientReview;
