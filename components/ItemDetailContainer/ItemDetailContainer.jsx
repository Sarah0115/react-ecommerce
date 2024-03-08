import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const {productId} = useParams();

    useEffect(() => {
        fetch(` https://api.mercadolibre.com/items/${productId}`)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
        });
    }, [productId]);

    ItemDetailContainer.propTypes = {
        productoId: PropTypes.string
      };

  return (
    <>
    <ItemDetail {...products}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer;