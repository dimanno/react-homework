import './User.css'
export function User({item:{id,name}}) {

    return(
        <div className={'userBox'}>
            <h2>{id} - {name}</h2>
            <button onClick={()=>{

            }}>Current posts</button>
        </div>
    )
}