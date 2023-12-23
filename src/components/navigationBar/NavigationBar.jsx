import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const NavigationBar = ({optionSelected}) => {

    const navigate = useNavigate();

    return <div className={styles.navBarContainer}>
        <nav>
            <div className={styles.logoContainer}>
                <a>logo</a>
            </div>
            <div className={styles.navItemsContainer}>
                <a onClick={() => navigate("/")} style={optionSelected === 1 ? {backgroundColor: "#000080", color: "#fff"} : null}>home</a>
                <a onClick={() => navigate("/products")} style={optionSelected === 2 ? {backgroundColor: "#000080", color: "#fff"} : null}>produtos</a>
                <a style={optionSelected === 3 ? {backgroundColor: "#000080", color: "#fff"} : null}>carrinho</a>
            </div>
        </nav>
    </div>
};

export default NavigationBar;