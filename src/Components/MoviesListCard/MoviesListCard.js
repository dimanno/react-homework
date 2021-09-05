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
export function MoviesListCard({poster_path, id, title, genre_ids,original_language,overview,popularity,release_date,video,vote_average,vote_count}) {
    console.log()
    let history = useHistory()
    const detailsMovie = () => {
        history.push(
            `/movie-info/${id}`
        )
    }
    return (
        <div className={'movie-card'}>
            <Card>
                <CardImg src={images_API+poster_path} alt="Card poster-movie" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <div className={'d-flex justify-content-between'}>
                        {release_date}
                        <Button onClick={detailsMovie}>Details</Button>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}

