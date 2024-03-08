import PropTypes from "prop-types";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1608&limit=5`)
      .then((res) => {
        return res.json();
      })
      .then((datos) => {
        setProducts(datos.results);
      });
  }, []);
  return (
    <div>
      <h1>{greeting}</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, index) => {
          return (
            <ItemCard key={index} product={product}></ItemCard>
          );
        })}
      </ul>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
