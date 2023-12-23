import NavigationBar from "../components/navigationBar/NavigationBar";
import ProductCard from "../components/productCard/ProductCard";

const ProductPage = () => {
    return <>
    <NavigationBar optionSelected={2}/>
    <div>
        <ProductCard image={"https://img.freepik.com/fotos-premium/pizza-saborosa-fresca-com-calabresa-isolada-no-branco_136401-2336.jpg"} name="Pizza de calabresa" price={40}/>
    </div>
    </> 
};

export default ProductPage;