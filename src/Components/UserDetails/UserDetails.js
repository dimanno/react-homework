
export default function UserDetails(props) {
    let {location: {state}} = props;


    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
}