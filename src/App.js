import './App.css';
import Body from './Components/Sections/Header/Body';
import Clients from './Components/Sections/Header/Clients';
import Header from './Components/Sections/Header/Header';
import MidSection from './Components/Sections/Header/MidSection';
import SecondMidSection from './Components/Sections/Header/SecondMidSection';
import PageRoutes from './PageRoutes/PageRoutes';

function App() {
  return (
    <div className="App">
       {/* <div className="wrapper"> */}
      <Header />
      <MidSection />
      <SecondMidSection />
      <Clients />
      {/* <Body />  */}
      {/* <PageRoutes /> */}
      </div>
    // </div>
  );
}

export default App;
