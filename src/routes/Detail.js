import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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
            {console.log(data)}
            {loading ?
                <div className="detail_container__loading">loading...</div>
                :
                data && data.movie ?
                    <div className="detail_container__movie">
                        <Link to="/">Go to main</Link>
                        <div className="detail_container__movie__title">
                            <img src={data.movie.medium_cover_image}/>
                        </div>
                        <div className="detail_container__movie__poster">
                            {data.movie.title}
                        </div>
                        <div className="detail_container__movie__rating">
                            {data.movie.rating}
                        </div>
                        <div className="detail_container__movie__lan">
                            {data.movie.language}
                        </div>
                        <div className="detail_container__movie__des">
                            {data.movie.description_intro}
                        </div>
                    </div>
                    :
                    <div>Not Found Moive
                        <br />
                        <Link to="/">Go to main</Link>
                    </div>
            }
        </div>
    );
};