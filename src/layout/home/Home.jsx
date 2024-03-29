import ClientReview from "../../pages/ExtraSection/ClientReview";
import NewServiceBanner from "../../pages/ExtraSection/NewServiceBanner";
import SaleSection from "../../pages/ExtraSection/SaleSection";
import Banner from "../../pages/banner/Banner";
import Footer from "../../pages/footer/Footer";
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
            <ClientReview></ClientReview>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;