import './App.css';
import HeaderTop from './HeaderTop/HeaderTop';
import Nav from './Nav/Nav';
import MainSection from './MainSection/MainSection';
import Banner from './Banner/Banner';
import TopPick from './TopPicks/TopPick';
import Recommended from './Recommended/Recommended';
import InfoSec from './InfoSec/InfoSec';
import Explanation from './Explanation/Explanation';
import HeroBanner from './HeroBanner/HeroBanner';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <HeaderTop/>
    <Nav/>
    <MainSection/>
    <Banner/>
    <img src="/assets/pic2.png" style={{
          width: "100%",         
          height: "auto",     
          display: "block",      
          objectFit: "cover",    
          margin: "0 auto",      
          maxHeight: "500px"     
        }}/>
    <Banner/>
    <TopPick/>
    <Recommended/>
    <InfoSec/>
    <Explanation/>
    <HeroBanner/>
    <Footer/>
    </div>
   
  );
}

export default App;
