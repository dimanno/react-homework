export default function Geo(props) {
    const {lat, lng} = props.geo
    return (
        <div>
            <ul>Geo
                <li>lat - {lat}</li>
                <li>lng- {lng}</li>
            </ul>
        </div>
    )
}