import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import "./Home.css";

const GET_MOVIES = gql`
    {
        movies{
            id,
            medium_cover_image
        }
    }
`;

export default () => {
    const { loading, data } = useQuery(GET_MOVIES);
    return (
        <div className="container">
            <div className="header">
                <p className="title">This is GraphQL</p>
                <p className="subTitle">This is The Revolution!</p>
            </div>
            {loading && <p className="loading">Loading...</p>}
            {!loading &&
            data.movies &&
            data.movies.map(m => <p className="moive" key={m.id} id={m.id}>{m.id}</p> )}
        </div>
    );
};