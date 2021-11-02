import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export default ({ id, poster }) => (
    <div className="movie" id={id}>
        <Link to={`/${id}`} >
            <img className="poster" src={poster} onError = {(e) =>{
                const notFoundImage = document.getElementById(id);
                notFoundImage.remove();
            }}/>
        </Link>
    </div>
);