import { useState } from "react";

export function UserData() {
    const [user, setUser] = useState(null);


    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const userDetails = data.map(({ name, email }) => ({ name, email }));

            setUser(userDetails[0]);
        })
        .catch(error => console.error("Can't Fetch Data!"));

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div className="userDetails">
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}