import ProductCard from "./ProductCard";


const productList = [
    {id:1 , name:"Laptop" , price:100},
    {id:2 , name:"Mobile" , price:200},
    {id:3 , name:"Tablet" , price:300},
]

function ProductList(){
    return(
        <div>
            {productList.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductList

