import NewServiceBanner from "../../pages/ExtraSection/NewServiceBanner";
import Banner from "../../pages/banner/Banner";
import NavBar from "../../pages/navbar/NavBar";
import Services from "../../service/Services";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <NewServiceBanner></NewServiceBanner>
            
        </div>
    );
};

export default Home;