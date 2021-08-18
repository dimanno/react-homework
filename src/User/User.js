import './User.css'
export function User({item, address}) {

    return (
        <div className="userBox">
            <h2>{item.id} - {item.name}</h2>
            <ul>
                <li>Email-{item.email}</li>
                <li>Phone-{item.phone}</li>
                <li>Website - {item.website}</li>
            </ul>
            {/*<Address address={address}/>*/}
        </div>
    );
}

// export function Address({address:{city, street, phone, suite, zipcode}}) {
//     return(
//         <di>
//             <ul>
//                 <li>City-{city}</li>
//                 <li>-Street - {street}</li>
//                 <li>Phone - {phone}</li>
//                 <li>Suite-{suite}</li>
//                 <li>Zipcode - {zipcode}</li>
//             </ul>
//         </di>
//     )
// }