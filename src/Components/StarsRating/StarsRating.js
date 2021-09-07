import StarRatings from 'react-star-ratings';
import React, { Component } from 'react';


export class Foo extends Component {
    // changeRating( newRating, name) {
    //     this.setState({
    //         rating: newRating
    //   });
    // }

    render() {
        return (
            <StarRatings
                rating={this.props.vote_average/2}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={5}
                size={20}
                name='rating'
            />
        );
    }
}

