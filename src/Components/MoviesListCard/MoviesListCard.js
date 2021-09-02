import {images_API} from "../../images/images";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export function MoviesListCard({title, poster_path}) {
    return (
        <div className={'movie-card'}>
            <div>
                <img src={images_API+poster_path} alt="Card poster-movie/>"/>
            </div>
            <div className={'cardBody'}>
                <h3>{title}</h3>
            </div>
            <div>
                
            </div>
        </div>
    );
}

// <Card>
//     <CardImg src={images_API+poster_path} alt="Card poster-movie" />
//     <CardBody>
//         <CardTitle tag="h5">{title}</CardTitle>
//         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//         <Button>Detail</Button>
//     </CardBody>
// </Card>