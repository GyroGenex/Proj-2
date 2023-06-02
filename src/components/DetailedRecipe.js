import { useLocation, Link } from 'react-router-dom';


const DetailedRecipe = () => {
    const location = useLocation();
    const recipe = location.state.recipe;
    console.log(recipe);

    return (
        <>
            <h2>Selected Recipe: {recipe.Recipe}</h2>
            <p>Time Taken: {recipe["Time Taken"]}</p>
            <p>Ingredients: {recipe["Ingredients"]}</p>
            <p>Steps: {recipe["Steps"]}</p>

            <Link to="/">
                <input type="submit" value="return to main ingredient selection"></input>
            </Link>
            <Link to={{ pathname: "/recipes", state: { main: recipe["Main"] } }}>
                <button>Go back to Recipes</button>
            </Link>
        </>
    );
};
export default DetailedRecipe;