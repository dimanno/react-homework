import './Post.css'
export function Post({item:{title,body}}) {

    return(
        <div className={'postBox'}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}