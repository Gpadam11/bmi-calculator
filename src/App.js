import logo from './logo.svg';
import './App.css';
import BMI from './Components/BMI/BMI';
import Navbar from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BMI></BMI>
      <Footer></Footer>
      {/* <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>  */}
    </>
  );
}

export default App;
