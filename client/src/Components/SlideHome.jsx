import { React, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BenzG from "../images/gclassblack.jpg";
import Audi from "../images/audi.png";
import GTBenz from "../images/gtbenz.jpg";
import Opel from "../images/opel.jpg";
import BmwX6 from "../images/bmwx6.jpg";
import Renault from "../images/renault.jpg";
import Hyundai from "../images/huyndaiI5.jpg";
import "../css/SlideHome.css";


const SlideHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="SlideHome">
        
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={BenzG}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Audi}
        alt="Second slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={GTBenz}
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Opel}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={BmwX6}
        alt="Second slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Renault}
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Hyundai}
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

</div>
  );
}

export default SlideHome