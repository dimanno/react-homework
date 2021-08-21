import './DetailsPost.css'

function DetailsPost(props) {
    let{location:{state}}=props;

    return (
        <div className="detailsPostBox">
            <p>{state.body}</p>
        </div>
    );
}
export {DetailsPost}