

export default function GetUsers() {
    return (
        <div className="usersBox">

            {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(users => {

                    })
            }

        </div>
    );
}
