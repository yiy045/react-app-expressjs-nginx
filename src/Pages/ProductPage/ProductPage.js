import "./ProductPage.css"
import image from "../../images/testglasses.jpg";

function Product(props) {
    
    const products = props.location.state;
    console.log(products);
    let name = "Test Glasses";
    let manufacturer = "Stark Industries"
    let cost = 99.99;
    return (
        <div className="product-background">
            <div className="ProductPage">
                {/* create an overall panel, with header 2, the image, and the button inside of it */}
                <div className="container1">
                    <img 
                    src={products.pathname}
                    width={500}/>
                </div>
                <div className="container2">
                    <p><b>Names: </b> {products.item_name}</p>
                    <p><b>Manufacturer: </b>{products.manufacturer} </p>
                    <p><b>Cost: </b>{products.item_price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;