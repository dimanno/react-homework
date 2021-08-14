import './Post.css'
export function Post({item:{ name, body}}) {

    return(
        <div className={'postBox'}>
            <h4>{name}</h4>
            <p>{body}</p>
        </div>
    )
}