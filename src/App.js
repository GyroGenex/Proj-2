import Form from './components/Form';
import './App.css';
import React, { useState, useEffect } from "react";
import Recipe from './components/Recipe';

function App() {

  const [main, setMain] = useState("");
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
          setRecipes(data);
          console.log(recipes);
        });
    };
    makeApiCall();
  }, [main]);

  return (
    <div className="App">
      <Form setMain={setMain} />

      {recipes.length > 0 && (
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
      )}
    </div>
  );
}

export default App;
