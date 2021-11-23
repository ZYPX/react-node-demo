import React from 'react';
import './demo.css';
import snk from '../assets/snk.png';
import Product from "./Product";

const Page4 = () => {
    const [data, setData] = React.useState([]);
    const [gender, setGender] = React.useState(null);
    const [type, setType] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        let apiURL = "";
        if ((gender !== null) && (type !== null)) {
            apiURL = "/api?gender="+gender+"&type="+type;
        }
        if ((gender === null) && (type !== null)) {
            apiURL = "/api?type="+type;
        }
        if ((gender !== null) && (type === null)) {
            apiURL = "/api?gender="+gender;
        }
    
        fetch(apiURL)
        .then((res) => res.json())
        .then((data) => setData(data.products));
    }

    return (
        <div>
            <img id="snk" src={snk} alt="ShopNiceKicks Logo" />
            <form onSubmit={handleSubmit}>
                <div>
                <label for="gender">Gender: </label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option hidden disabled selected value> -- select an option -- </option>
                    <option value="MEN">Men</option>
                    <option value="WOMEN">Women</option>
                    <option value="UNISEX">Unisex</option>
                    <option value="BOYGRADESCHOOL">Boys</option>
                    <option value="GIRLGRADESCHOOL">Girls</option>
                </select>
                </div>
                <div>
                <label for="type">Product type: </label>
                <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option hidden disabled selected value> -- select an option -- </option>
                    <option value="SHOE">Shoes</option>
                    <option value="APPAREL">Apparel</option>
                    <option value="ACCESSORIES">Accessories</option>
                </select>
                </div>
                <div>
                <input type="submit" value="Submit" />
                </div>
            </form>
            <div className="flexContainer">
                
                {data.map((item) => {
                        return (
                            <Product productData={item} />
                        )
                })}
                
            </div>
        </div>
    )
}

export default Page4
