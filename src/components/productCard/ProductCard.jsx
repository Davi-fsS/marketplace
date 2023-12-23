import { useState } from "react";
import styles from "./style.module.scss"

const ProductCard = ({image, name, price}) => {

    const [quantity, setQuantity] = useState(0);

    return <div className={styles.productCardContainer}>
        <img src={image}/>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>R$ {price}</p>
        <div className={styles.quantityButtonsContainer}>
            <button onClick={() => setQuantity(quantity -1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity +1)}>+</button>
        </div>
    </div>
};

export default ProductCard;