import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Breadcrubs.css'
function Breadcrumbs() {
  return (
   <div className='bread-crumbs'>
     <Breadcrumb>
      <Breadcrumb.Item active >Men</Breadcrumb.Item>
      <Breadcrumb.Item active>
        Clothing
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Tops</Breadcrumb.Item>
      <Breadcrumb.Item active>Adidas</Breadcrumb.Item>
      <Breadcrumb.Item active>Adidas Blach T-Shirt</Breadcrumb.Item>
    </Breadcrumb>
   </div>
  );
}

export default Breadcrumbs;