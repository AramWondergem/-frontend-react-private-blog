import React from 'react';
import {Link, useParams} from "react-router-dom"
import data from "../../data/posts.json"

function Blogpost(props) {
    const { id } = useParams();
    const currentBlogpost =  data.find((blogpost) => blogpost.id === id )
    const { title, content, date } = currentBlogpost
    
    return (
        <>
        <div>
            <h1>`Blogpost:${id}:{title}</h1>
            <h2>{date}</h2>
            <p>{content}</p>
        </div>
            <div>
                <Link to={"/"}>ET want to go home👽</Link>
            </div>
        </>
    );
}

export default Blogpost;