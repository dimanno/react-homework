import StarRatings from 'react-star-ratings';
import React, { Component } from 'react';
import {useSelector} from "react-redux";


export class Foo extends Component {
    render() {
        return (
            <StarRatings
                rating={this.props.vote_average && this.props.vote_average/2}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={5}
                size={20}
                name='rating'
            />
        );
    }
}
