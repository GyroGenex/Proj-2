import React from "react";

const Recipe = (props) => {
    const { recipe } = props;
    const dish = recipe["Recipe"];
    const time = recipe["Time Taken"];
    return (
        <tr>
            <td>{dish}</td>
            <td>{time}</td>
            <td>
                <input type="submit" value="Select"></input>
            </td>
        </tr>

    );
};

export default Recipe;