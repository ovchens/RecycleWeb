import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import img1 from '../Components/home1.png';
import img2 from '../Components/home2.png';


class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="align-content-around"
                        src={img1}
                        alt="img1"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "#FF8C00"}}>image 1</h3>
                        <p style={{color: "#FF8C00"}}>sdfg fghjeld ewgdfcndv hhhh dshdka dfgjhgmn sjdfg jhxdgj hghj</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="img2"
                    />
                    <Carousel.Caption>
                        <h3>image 2</h3>
                        <p>sdfg dfgjhgmn sjdfg jhxdgj hghj</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="img1"
                    />
                    <Carousel.Caption>
                        <h3>image 1</h3>
                        <p>sdfg fghjeld ewgdfcndv hhhh dshdka dfgjhgmn sjdfg jhxdgj hghj</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;