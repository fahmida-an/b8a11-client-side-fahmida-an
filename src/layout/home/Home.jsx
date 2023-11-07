import NewServiceBanner from "../../pages/ExtraSection/NewServiceBanner";
import SaleSection from "../../pages/ExtraSection/SaleSection";
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
            <SaleSection></SaleSection>
            
        </div>
    );
};

export default Home;