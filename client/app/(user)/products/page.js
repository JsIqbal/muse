import Product1 from "./components/product-1";
import Product2 from "./components/product-2";

const ProdcutsPage = () => {
    return (
        <div className="flex flex-col ">
            <Product1 />
            <Product2 />
        </div>
    );
};

export default ProdcutsPage;
