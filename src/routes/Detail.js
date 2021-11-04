import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./Detail.css";

const GET_MOVIE = gql`
    query getMoive($id: Int!) {
        movie(id: $id) {
            title
            medium_cover_image
            language
            rating
            description_intro
        }
    }
`;

export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: +id }
    });

    return (
        <div className="detail_container">
            <Link className="Btn_home" to="/">◀Home</Link>
            {loading ?
                <div className="loading_container">
                    <p className="loading_container__loading">loading...</p>
                </div>             
                :
                <div className="detail_container__movie">
                    <div className="detail_top">
                        <div className="detail_container__movie__poster">
                            <img src={data?.movie?.medium_cover_image}/>
                        </div>
                        <div className="detail_container__movie__info">
                            <div className="detail_container__movie__title">
                                {data?.movie?.title}
                            </div>
                            <div className="detail_container__movie__rating">
                                Rating : {data?.movie?.rating}
                            </div>
                            <div className="detail_container__movie__lan">
                                Language : {data?.movie?.language}
                            </div>
                        </div>
                    </div>
                    <div className="detail_bottom">
                        <div className="detail_container__movie__des">
                            {data?.movie?.description_intro}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};