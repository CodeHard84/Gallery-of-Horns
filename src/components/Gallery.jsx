import HornedBeast from "./HornedBeast";
import { hornedBeasts } from "./HornedData";

function Gallery() {
    // Have to make a new array because forEach does not return anything.
    const beastComponents = [];
    hornedBeasts.forEach(beast => {
      beastComponents.push(
        <HornedBeast 
          key={beast._id} // This fixes warning that child objects each need a key.
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
      );
    });
  
    return (
      <div className="gallery">
        {beastComponents}
      </div>
    );
  }
  
  export default Gallery;