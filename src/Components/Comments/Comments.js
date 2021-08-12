import {Comment} from "../Comment/Comment";
import './Commrnts.css'
export function Comments({postComments}) {
    return (
        <div className={'commentWrap'}>
            {
                postComments.map(value => <Comment item ={value} key={value.id}/> )
            }
        </div>
    );
}