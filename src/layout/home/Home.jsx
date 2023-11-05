import Banner from "../../pages/banner/Banner";
import NavBar from "../../pages/navbar/NavBar";
import Services from "../../service/services";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            
        </div>
    );
};

export default Home;