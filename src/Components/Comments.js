import {Comment} from "./Comment/Comment";

export function Comments({postComments}) {
    return (
        <div>
            {
                postComments.map(value => <Comment item ={value} key={value.id}/> )
            }
        </div>
    );
}