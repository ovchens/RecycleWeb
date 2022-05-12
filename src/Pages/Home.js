import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import img from "../Components/home2.png";

class Home extends Component {
    render() {
        return (
            // <CarouselBox></CarouselBox>
            <img
                className="about-background-image"
                src={img}
                alt="img"
               /* width="1280"
                height="540"*/
            />
        );
    }
}

export default Home;