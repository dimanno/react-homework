import {images_API} from "../../images/images";
import './movieListCard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory,
} from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Foo} from "../StarsRating/StarsRating";

export function MoviesListCard({poster_path, id, title, genre_ids,overview,release_date,video,vote_average}) {
    console.log()
    let history = useHistory()
    const detailsMovie = () => {
        history.push(
            `/movie-info/${id}`
        )
    }
    return (
        <div className={'movie-card'}>
            <Card onClick={detailsMovie}>
                <CardImg src={images_API+poster_path} alt="Card poster-movie" />
                <CardBody>
                    <div className={'d-flex justify-content-between'}>
                            <CardTitle>{title}</CardTitle>
                        <div>
                            {vote_average}
                        </div>
                    </div>
                    <Foo/>
                </CardBody>
            </Card>
        </div>
    );
}

