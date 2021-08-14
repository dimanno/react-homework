import './User.css'
export function User({item,showPosts}) {
    const onClickShowPosts  = () => {
        showPosts(item)
    }
    return(
        <div className={'userBox'}>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={onClickShowPosts}>Current posts</button>
        </div>
    )
}