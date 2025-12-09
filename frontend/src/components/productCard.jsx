export default function ProductCard(props) {
    console.log(props);
return (
    <div>
    <h2>name = {props.name}</h2>
    <img src ={props.image}  width={200} height={150} />
    <p>Price : {props.price}</p>
    <button>Buy Now</button>
    </div>
)
}