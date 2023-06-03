import React, { useState } from "react";
import { Link } from 'react-router-dom';



const Form = (props) => {
    const { time, setMain, setTime } = props;

    const [ingredient, setIngredient] = useState("");


    const handleIngredientChange = (event) => {
        setIngredient(event.target.value);

    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = () => {
        setMain(ingredient);
        setTime(time);
        setIngredient("");

    };

    return (
        <>
            <h1>Select your main ingredient</h1>
            <select type="text" value={ingredient} onChange={handleIngredientChange} placeholder="What's in Your Fridge?">
                <option value="">Select an ingredient</option>
                <option value="Flour">Flour</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Pork">Pork</option>
                <option value="Bacon">Bacon</option>
                <option value="Fish">Fish</option>
                <option value="Shrimp">Shrimp</option>
            </select>
            <input type="text" value={time} onChange={handleTimeChange} placeholder="maximum time" />
            <Link to={{ pathname: "/recipes" }}><input type="submit" value="submit" onClick={handleSubmit} /></Link>
        </>
    );

};

export default Form;