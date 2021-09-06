import {images_API} from "../../images/images";
import './movieListCard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory,
} from "react-router-dom";
import {
    Card, CardImg, CardBody,
    CardTitle,
} from 'reactstrap';
import {Foo} from "../StarsRating/StarsRating";

export function MoviesListCard({poster_path, id, title, genre_ids,overview,video,vote_average}) {
    console.log()
    let history = useHistory()
    const detailsMovie = () => {
        history.push(
            `/movie-info/${id}`
        )
    }
    const setVoteClass = (vote) => {
        if(vote >= 8) {
            return "green"
        }else if (vote >=5) {
            return "orange"
        } else {
            return 'red'
        }
    }
    return (
        <div className={'movie-card'}>
            <Card onClick={detailsMovie}>
                <CardImg src={images_API+poster_path} alt="Card poster-movie" />
                <CardBody className={'cardBodyBox'}>
                    <div className={'d-flex justify-content-between'}>
                            <CardTitle>{title}</CardTitle>
                        <div className={
                            `tag ${setVoteClass(vote_average)}`}>
                            {vote_average}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

