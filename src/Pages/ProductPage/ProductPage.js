import "./ProductPage.css"

function Product(){

    /* temo variables */
    let test_name = "glasses01";
    let test_manufacturer = "Stark Industries";
    let test_cost = 99.99;

    return(
            <div>
                <script>
                    let name = test_name;
                    let manufacturer = test_manufacturer;
                    let cost = test_cost;
                </script>
                <div className = "App1">
                    <div className = "header1">
                        <b>WorldWide Frames</b> - <i>See A Better World</i>
                    </div>
                    {/* create an overall panel, with header 2, the image, and the button inside of it */}
                    <div className = "panel1">
                        <div className = "header2">    
                                <p>Name: <var>name</var></p>
                                <p>Manufacturer: <var>manufacturer</var></p>
                                <p>Cost: <var>cost</var> </p>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
    );
}

export default Product;