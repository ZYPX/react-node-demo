import React from 'react'
import './demo.css';

const Product = (props) => {

    const [size, setSize] = React.useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (size !== null) {
            window.location.replace("https://shopnicekicks.com/cart/"+size+":1");
        }
    }

    return (
        <div className="product">
            <img className="productImage" src={props.productData.image} alt={props.productData.name}/>
            <p className="productLink"><a className="refLink" href={props.productData.link}>{props.productData.name}</a></p>
            
            <div className="productData">
                <form className="sizeSelection" onSubmit={handleSubmit}>
                    <div>
                    <label for="size">Size: </label>
                    <select id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
                        <option hidden disabled selected value>select a size</option>
                        {props.productData.sizes.map((item) => {
                            return (
                                <option value={item.id}>{item.option1}</option>
                            )
                        })}
                    </select>
                    </div>
                    
                    <div>
                    <input type="submit" value="Buy Now" />
                    </div>
                </form>
                <p className="productText">Brand: {props.productData.brand}</p>
                <p className="productText">Price: {props.productData.price}</p>
            </div>
        </div>
    )
}

export default Product
