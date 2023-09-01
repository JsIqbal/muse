import { Separator } from "@/components/ui/separator";
import Product1 from "./components/product-1";
import Product2 from "./components/product-2";

const ProdcutsPage = () => {
    return (
        <div className="flex flex-col ">
            <Separator className="h-1.5"/>
            <Product1 />
            <Separator className="h-1.5"/>
            <Product2 />
            
        </div>
    );
};

export default ProdcutsPage;
