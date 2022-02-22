
import './App.css';
import Header from "./Components/Header"
import {Shops} from "./Components/Shops"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  const viewDetails=(shop)=>{
    
  }

    return ( 
    <div> 
      {/* <Router to="/" component={Header title='Fyntune'} /> */}
      <Header title="FynTune"/>
      <Shops viewDetails={viewDetails}/>
      <Footer/>

    </div>
        
    );
}

export default App;