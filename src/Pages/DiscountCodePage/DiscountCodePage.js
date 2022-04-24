import "./DiscountCodePage.css"
import React, { useState } from 'react';
import Axios from "axios";


function DiscountCode()
{

    const [codeName, setCodeName] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);
    
    const submitDiscount = (e) => {
        e.preventDefault();
        const data = {
            codename: codeName,
            discountamount: discountAmount
        }
        Axios.post("http://localhost:5000/discounts", data).then((response) => {
            console.log(response)
        })
    }

    return (
            <div className = "discountcode-wrapper">
                <div className = "discountcode-form-wrapper">
                    <h2>Add a Discount Code</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Discount Code Name"
                        onChange={(event) => {
                            setCodeName(event.target.value)
                        }}/>
                    </form>
                    <form>
                            <input 
                            type="text" 
                            placeholder="Discount Amount by Percent" 
                            onChange={(event) => {
                                setDiscountAmount(event.target.value)
                            }}/>
                    </form>
                    <div className = "submitbutton-wrapper">
                        <form onSubmit={submitDiscount}>
                            <input type="submit" value="Create Discount Code" />
                        </form>
                    </div>
                    <div className = "backbutton-wrapper">
                        <form action="http://localhost:3000/admin">
                            <input type="submit" value="Back to Admin Tools" />
                        </form>
                    </div>
                </div>
            </div>
    );
}
export default DiscountCode;