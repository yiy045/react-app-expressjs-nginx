import "./UpdateProductPage.css"
import React, { useState } from 'react';
import Axios from "axios";

function UpdateProduct()
{
    const [productID, setProductID] = useState("");
    const [modelName, setModelName] = useState("");
    const [manuName, setManuName] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [price, setPrice] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const updateproduct = () => {
        Axios.post("http://localhost:5000/updateproduct",
            {
                productID: productID,
                modelName: modelName,
                itemDesc: itemDesc,
                price: price,
            }).then((response) => {
                if (response.data.message) {
                    setErrorMsg(response.data.message);
                } else {
                    setProductID("");
                    setModelName("");
                    setItemDesc("");
                    setPrice("");
                    setErrorMsg("Product updated successfully");
                }
            });
    };

    const searchproduct = () => {
        Axios.post("http://localhost:5000/searchproduct",
        {
            productID: productID,
        }).then((response) => {
                if (response.data.message) {
                    setErrorMsg(response.data.message);
                } else {
                    setModelName(response.data.modelName);
                    setItemDesc(response.data.itemDesc);
                    setPrice(response.data.price);
                    setErrorMsg("");
                }
            });
    };

    return (
            <div className = "updateproduct-wrapper">
                <div className = "updateproduct-form-wrapper">
                    <h2>Update an Existing Product</h2>
                    <form>
                            <input type="number" placeholder="Enter a Product ID" value={productID}
                            onChange={(e) => {
                                setProductID(e.target.value);
                            }}/>
                    </form>
                    <div className = "searchbutton-wrapper">
                            <button onClick={searchproduct}> <b>Search</b></button>
                    </div>
                    &nbsp;
                    <div className = "product-display">
                        <form>
                                <input type="text" value={modelName} 
                                onChange={(e) => {
                                    setModelName(e.target.value);
                                }}/>
                        </form>
                        <form>
                                <input type="text" value={itemDesc} 
                                onChange={(e) => {
                                    setItemDesc(e.target.value);
                                }}/>
                        </form>
                        <form>
                                <input type="text" value={price} 
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}/>
                        </form>
                    </div>
                    <div className = "submitbutton-wrapper">
                            <button onClick={updateproduct}> <b>Update Product</b></button>
                    </div>
                    <div className = "backbutton-wrapper"> 
                        <form action="http://localhost:3000/admin">
                            <input type="submit" value="Back to Admin Tools" />
                        </form>
                    </div>
                    <div className = "errormessage"><h2>{errorMsg}</h2></div>
                </div>
            </div>
    );
}
export default UpdateProduct;