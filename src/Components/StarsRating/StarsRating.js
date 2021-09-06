import StarRatings from 'react-star-ratings';
import React, { Component } from 'react';


export class Foo extends Component {
    changeRating( newRating, name ) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        // rating = 2;
        return (
            <StarRatings
                rating={5}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={6}
                name='rating'
            />
        );
    }
}


// class Bar extends Component {
//     render() {
//         // aggregateRating = 2.35;
//         return (
//             <StarRatings
//                 rating={2.403}
//                 starDimension="40px"
//                 starSpacing="15px"
//             />
//         );
//     }
// }