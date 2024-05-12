import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import jsonData from "./data/data.json";

function App() {

  const title = "Gallery of Horns";
  document.title = title;

  return (
    <>
      <Header title={title}/>
      <Gallery jsonData={jsonData}/>
      <Footer />
    </>
  );
}

export default App;