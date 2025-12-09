import ProductCard from "./productCard";



export default function OnSaleNow(){
    return(
        
        <div>
            <h2>On Sale Now!</h2>
            <ProductCard 
                name = "i phone" 
                image="https://picsum.photos/id/3/5000/3333"
                price = "$799"
                />
            
                <ProductCard 
                name = "shoe" 
                image="https://picsum.photos/id/21/3008/2008"
                price = "$99"
                />

        </div>
    )
}