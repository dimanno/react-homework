import Geo from "../Geo/Geo";

export function Address(props) {
    const {city, street, suite, zipcode, geo} = props.address;

    return (
        <div>
            <ul>Address
                <li>city - {city}</li>
                <li>street- {street}</li>
                <li>suite - {suite}</li>
                <li>zipcode - {zipcode}</li>
            </ul>
            <Geo geo={geo}/>
        </div>
    );
}