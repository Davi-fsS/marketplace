import styles from "./style.module.scss";

const NavigationBar = ({optionSelected}) => {
    return <div className={styles.navBarContainer}>
        <nav>
            <div className={styles.logoContainer}>
                <a>logo</a>
            </div>
            <div className={styles.navItemsContainer}>
                <a style={optionSelected === 1 ? {backgroundColor: "#000080", color: "#fff"} : null}>home</a>
                <a style={optionSelected === 2 ? {backgroundColor: "#000080", color: "#fff"} : null}>produtos</a>
                <a style={optionSelected === 3 ? {backgroundColor: "#000080", color: "#fff"} : null}>carrinho</a>
            </div>
        </nav>
    </div>
};

export default NavigationBar;