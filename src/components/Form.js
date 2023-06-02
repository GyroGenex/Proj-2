import React, { useState, useEffect } from "react";



const Form = (props) => {
    const { setMain } = props;

    const [ingredient, setIngredient] = useState("");

    const handleChange = (event) => {
        setIngredient(event.target.value);

    };

    const handleSubmit = () => {

        setMain(ingredient);
        setIngredient("");


    };

    return (
        <>
            <h1>Select your main ingredient</h1>
            <select type="text" value={ingredient} onChange={handleChange} placeholder="What's in Your Fridge?">
                <option value="">Select an ingredient</option>
                <option value="Flour">Flour</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Pork">Pork</option>
                <option value="Bacon">Bacon</option>
                <option value="Fish">Fish</option>
                <option value="Shrimp">Shrimp</option>
            </select>
            <input type="submit" value="submit" onClick={handleSubmit} />
        </>
    );

};

export default Form;