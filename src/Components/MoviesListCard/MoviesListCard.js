import {images_API} from "../../images/images";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export function MoviesListCard({title, poster_path}) {
    return (
        <div className={'movie-card'}>
            <Card>
                <CardImg src={images_API+poster_path} alt="Card poster-movie" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <Button>Detail</Button>
                </CardBody>
            </Card>
        </div>
    );
}

