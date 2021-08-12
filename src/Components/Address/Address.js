
export function Address({item,item:{city, street, suite, zipcode}}) {
    return (
        <div className="address">
            <ul> Address
                <li>City - {city}</li>
                <li>Street - {street}</li>
                <li>Suite - {suite}</li>
                <li>Zipcode - {zipcode}</li>
            </ul>
        </div>
    );
}