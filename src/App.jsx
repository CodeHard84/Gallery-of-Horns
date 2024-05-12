import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import jsonData from "./data/data.json";

function App() {
  return (
    <>
      <Header />
      <Gallery jsonData={jsonData}/>
      <Footer />
    </>
  );
}

export default App;