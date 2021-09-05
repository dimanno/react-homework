import StarRatings from './react-star-ratings';

export function StarsRating() {

    return (
         <div>
           <StarRatings
               count={5}
                size={20}
               value={rating}
               activColor={'green'}
               inactivColor={'#ddd'}
               onChange={handleChange}
           />
         </div>
    )
}


