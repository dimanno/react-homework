import {images_API} from "../../images/images";
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
    let movie = {poster_path, id, title, genre_ids,original_language,overview,popularity,release_date,video,vote_average,vote_count}
    console.log()
    let history = useHistory()
    const detailsMovie = () => {
        history.push(
            `/${id}`,movie
        )
    }
    return (
        <div className={'movie-card'}>
            <Card>
                <CardImg src={images_API+poster_path} alt="Card poster-movie" />
                <CardBody>
                    <CardTitle tag="h6">{title}</CardTitle>
                        <Link to={{pathname: `/${id}`}}>Details</Link>
                    <Button onClick={detailsMovie}>Details</Button>
                </CardBody>
            </Card>
        </div>
    );
}

