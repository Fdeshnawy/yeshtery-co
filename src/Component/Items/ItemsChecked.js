import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemsChecked.css";
import Carousel from "react-bootstrap/Carousel";
import CounterBtn from "../UI/CounterBtn";
import ReactStars from "react-stars";
import React from "react";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function ItemsChecked(props) {
  return (
    <Container >
      <Row className="m-m">
        <Col className="img-show">
          <img src={props.showImg} />
          <Carousel variant="dark">
            <Carousel.Item className="d-flex carousel">
              <img className=" w-25" src={props.showImg} alt="Second slide" />
              <img className=" w-25" src={props.first} alt="Second slide" />
              <img className=" w-25" src={props.sec} alt="Second slide" />
              <img className=" w-25" src={props.showImg} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <div className="item-desc">
            <img src={props.logo} />
            <p className="" style={{ fontWeight: "bold", margin: "0" }}>
              Adidas black shirt
            </p>
            <small>Men</small>
            <div className="d-flex align-items-center">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
              <p
                className="mx-3"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                4 out 5
              </p>
              <p className="rates">22 Rates</p>
            </div>
            <div className="d-flex">
              <h2>9.999LE</h2>
              <small className="strike">9,999LE</small>
              <p className="perc">30% off</p>
            </div>
          </div>
          <hr />
          <p style={{ fontWeight: "bold", textAlign: "left" }}>size</p>
          <div className="sizes">
            <small>Small</small>
            <small>Medium</small>
            <small>Large</small>
            <small>XLarge</small>
            <small>XXLarge</small>
          </div>
          <hr />
          <p style={{ fontWeight: "bold", textAlign: "left" }}>color</p>
          <div className="color-item d-flex">
            <img src={props.showImg} />
            <img src={props.showImg} />
          </div>
          <hr />
          <p style={{ fontWeight: "bold", textAlign: "left" }}>Quantity</p>
          <CounterBtn />
          <div className="d-flex mt-4">
            <button className="carrt">Add to Cart</button>
            <button className="carrt2">Pick up from store</button>
          </div>
      
         
        </Col>
      </Row>
    </Container>
  );
}

export default ItemsChecked;
