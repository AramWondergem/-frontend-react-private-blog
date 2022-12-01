import React from 'react';
import data from "../../data/posts.json"
import {Link} from "react-router-dom";

function Overview(props) {
    return (
        <>
            <h1>Blog overzicht</h1>
            <h2>Aantal blogpost: {data.lenght}</h2>
            <ul>
                {data.map(({id, title,}) => {
                    return <li><Link to={"/blogposts/" + id}>{title}</Link></li>
                })
                }
            </ul>

        </>
    );
}

export default Overview;