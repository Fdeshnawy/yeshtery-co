import Breadcrumbs from './Component/Header/Breadcrumbs';
import Header from './Component/Header/Header';
import brandLogo from './images/adidas-brand.png'
import show from './images/show.jpeg'
import first from './images/1.jpeg'
import sec from './images/2.jpeg'
import './App.css'
import ItemsChecked from './Component/Items/ItemsChecked';
import showImg from './images/show-removebg-preview.png';
import Similar from './Component/Items/Similar';
import Belownav from './Component/Header/Belownav';
import data from './data';
import footer from './images/brand-logo-yellow.svg'
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
   
      <Header logo={brandLogo}/>
      <Belownav />
      <Breadcrumbs />
      <hr />
      <ItemsChecked 
      showImg={showImg}
      img={show}
      logo={brandLogo}
      first={first}
      sec={sec}
      />
    <Similar 

    data={data}
    />
    <Footer footer={footer}/>

    </div>
  );
}

export default App;
