import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react";

const ItemCount = ({ initial = 1, stock }) => {
    const [count, setCount] = useState(initial);
    const dencrement = () => {
        if (count > 1) {
            setCount((prev) => (prev = prev - 1));
        }
    };
    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    ItemCount.propTypes = {
        initial: PropTypes.number,
        stock: PropTypes.number,
    };
    return (
        <div>
            <ButtonGroup>
            <Button onClick={dencrement} variant="info" size="sm">-</Button>
            <p style={{ padding: "5px 10px", margin: "0" }}>{count}</p>
            <Button onClick={increment} variant="info" size="sm">+</Button>
            </ButtonGroup>
        </div>
    );
};

export default ItemCount;
