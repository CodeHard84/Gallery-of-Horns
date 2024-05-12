import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;