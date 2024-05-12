
// The data is shaped like this:
// {
//   "_id": 1,
//   "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//   "title": "UniWhal",
//   "description": "A unicorn and a narwhal nuzzling their horns",
//   "keyword": "narwhal",
//   "horns": 1
// },

import HornedBeast from "./HornedBeast";
import hornedBeasts from "../data/data.json";

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