import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/*const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};
*/
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
};
const slideImages = [
  {
    url: "images/slide1.jpg",
    //caption: "Slide 1",
  },
  {
    url: "images/slide2.jpg",
    //caption: "Slide 2",
  },
  {
    url: "images/slide3.jpg",
    //caption: "Slide 3",
  },
];
const properties = {
  duration: 1400,
  autoplay: true,
  transitionDuration: 700,
  arrows: false,
  infinite: true,
  easing: "ease",
};
//<span style={spanStyle}>{slideImage.caption}</span> setTimeout(carousel, 2000);
const SLIDESHOW = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SLIDESHOW;
