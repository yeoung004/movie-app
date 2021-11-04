import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import "./Home.css";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
    {
        movies{
            id,
            medium_cover_image
        }
    }
`;

export default () => {
    const { loading, data} = useQuery(GET_MOVIES);
    return (
        <div className="container">
            <div className="header">
                <p className="title">This is GraphQL</p>
                <p className="subTitle">This is The Revolution!</p>
            </div>
            {loading && <p className="loading">Loading...</p>}
            <div className="movie_container">
            {
                data?.movies.map((m) =>
                        <Movie key={m.id} id={m.id} poster={m.medium_cover_image}/>
                )
            }
            </div>
        </div>
    );
};