import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import jsonData from "./data/data.json";
import { useState } from 'react';
import SelectedBeast from './components/SelectedBeast';

function App() {

  const title = "Gallery of Horns";
  document.title = title;

  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelection = (beast) => {
    setSelectedBeast(beast);
  };

  const onHide = () => {
    // console.log('onHide');
    setSelectedBeast(null);
  }

    return (
      <>
        <Header title={title} />
        <Gallery
          jsonData={jsonData}
          onBeastSelection={handleBeastSelection}
        />
        <SelectedBeast
          beast={selectedBeast}
          onHide={onHide}
        />
        <Footer />
      </>
    );
  }

  export default App;