import React, { useState, useEffect } from "react";

import Recipe from './Recipe';
import { Link } from 'react-router-dom';

const Table = (props) => {
    const { main, time } = props;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (main === "") {
            return;
        }
        console.log(` looking up recipes with ${main}`);
        const url = `https://retoolapi.dev/rW4TWU/recipe?Main=${main}`;

        const makeApiCall = () => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Recipes", data);
                    setRecipes(data.filter(recipe => Number(recipe["Time Taken"]) <= Number(time)));
                });


        };
        makeApiCall();


    }, [main]);



    return (recipes.length > 0 && (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>Time Taken</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, index) => (
                        <Recipe key={index} recipe={recipe} />
                    ))}
                </tbody>
            </table>
            <Link to="/">
                <input type="submit" value="return"></input>
            </Link>
        </>)
    );
};

export default Table;