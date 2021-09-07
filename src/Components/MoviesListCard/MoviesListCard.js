import {images_API} from "../../images/images";
import './movieListCard.css'
import {useHistory,} from "react-router-dom";
import {
    Card, CardImg, CardBody,
    CardTitle,
} from 'reactstrap';

export function MoviesListCard({poster_path, id, title, overview, vote_average}) {
    console.log()
    let history = useHistory()

    const detailsMovie = () => {
        history.push(
            `/movie-info${id}`
        )
    }
    const setVoteClass = (vote) => {
        if(vote >= 8) {
            return "green"
        }else if (vote >=6) {
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

