import styles from "./style.module.scss";

const NavigationBar = () => {
    return <div className={styles.navBarContainer}>
        <nav>
            <div className={styles.logoContainer}>
                <a>logo</a>
            </div>
            <div className={styles.navItemsContainer}>
                <a>home</a>
                <a>produtos</a>
                <a>carrinho</a>
            </div>
        </nav>
    </div>
};

export default NavigationBar;