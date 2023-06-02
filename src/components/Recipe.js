import React from "react";
import { Link } from 'react-router-dom';


const Recipe = (props) => {
    const { recipe } = props;
    const dish = recipe["Recipe"];
    const time = recipe["Time Taken"];


    return (
        <tr>
            <td>{dish}</td>
            <td>{time}</td>
            <td>
                <Link to={`/recipes/${dish}`} state={{ recipe }}>
                    <input type="submit" value="Select" />
                </Link>
            </td>
        </tr>

    );
};

export default Recipe;