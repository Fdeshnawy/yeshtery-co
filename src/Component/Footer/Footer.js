import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Footer.css';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
function Footer(props) {
  return (
    <div className="footer">
      <Row style={{textAlign:'left'}}>
        <Col className="">
          <img src={props.footer} />
          <p className="foot-p">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.<br />
            <br />
             Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? <br /> <br />Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </Col>
        <Col>
        <h2 style={{color:'white'}}>Subscribe to be our newsletters</h2>
        <Form>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" className="w-75"
        
        />
        <Button className="btbutton">Subscribe</Button>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
        </Form>
        <div className="d-flex justify-content-between">
            <div>
                <ul >
                    <li>
                        About us
                    </li>
                    <li>
                    Contact Us
                    </li>
                    <li>
                    Sell With Us
                    </li>
                    <li>
                    Track Order
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                <li>
                    Facebook
                    </li>
                    <li>
                    Instagram
                    </li>
                </ul>
            </div>
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
