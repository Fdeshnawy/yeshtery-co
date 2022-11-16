import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ReactStars from "react-stars";
import './Similar.css'
function Similar(props) {
  return (
   <div className='part-title'>
    <h2>Similar Products</h2>
   <h3>You may like these products also</h3>
    <CardGroup>

      {props.data.map((d)=>(
        <Card className='card'>
        <Card.Img  className='cardImg' variant="top" src={d.img}  />
        <Card.Body className='cardBod'>
        <Card.Title className='desc'>{d.desc}</Card.Title>

         <div>
         <Card.Text className='p-color'>
            {d.price}
            {d.logo}
          </Card.Text>
          <Card.Text className='strike'>
          {d.oldprice}
          
          </Card.Text>
          
         </div>
         <div>
            
         </div>
        </Card.Body>
       <div className='foot'>
       <ReactStars
       className='d-flex justify-content-center'
                count={d.rate}
                size={24}
         
              />
      <small className="text-muted text-center">Picked form :<span> {d.location} </span></small>

       </div>
      </Card>
        
    ))}
     
    </CardGroup>
    </div>
  );
}

export default Similar;


