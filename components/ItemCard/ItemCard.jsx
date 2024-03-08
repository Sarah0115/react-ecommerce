import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = ({product}) => {
  return (
    <>
    
    <Card style={{ width: '20%', padding: '5px', margin: '5px', display:'flex', alignItems:'center'}}>
      <Card.Img variant="top" src={product.thumbnail}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <strong>Price: </strong> ${product.price}
        </Card.Text>
        <Link to={`/detail/${product.id}`}><Button variant="primary">Ver Detalle</Button></Link>
      </Card.Body>
    </Card>
    
    </>
  );
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;

// banos "MLA1613"
// cocina "MLA1592"