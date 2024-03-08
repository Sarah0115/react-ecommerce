import PropTypes from 'prop-types';
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ title, thumbnail, initial_quantity }) => {

    return (
        <article>
            <h1>{title}</h1>
            <img src={thumbnail} style={{ width: '300px', padding: '10px' }}></img>
            <ItemCount stock={initial_quantity}></ItemCount>
        </article>
    )
}

ItemDetail.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    initial_quantity: PropTypes.number
};
export default ItemDetail;