import './User.css'

export function User({item}) {

    return (
         <div>
             <ul>
            <li>{item.id} - {item.name} ----- Email:{item.email}</li>
             </ul>
         </div>
    )
}