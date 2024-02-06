import './App.css';
import { Home } from './componet/home/Home';
import { Popular } from './componet/popular/Popular';
import { Services } from './componet/services/Services';
import About from './componet/about/About';
import Menu from './componet/menu/Menu'; 
import They from './componet/they/They';
import Footer from './componet/footer/Footer';
import Price from './componet/price/Price';
import Up from './componet/up/Up';
import { Header } from './componet/header/Header';
 
function App() {
  return (
    <div>
       <Header/>
       <Home/>
       <Popular/>
       <Services/> 
       <About/>
       <Menu/>
       <They/>
       <Price/>
       <Up/>
       <Footer/>
    </div>
  );
}

export default App;
