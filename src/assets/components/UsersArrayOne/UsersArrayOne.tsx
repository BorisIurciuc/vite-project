import React, { useEffect, useState } from 'react';

interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: { 
        city: string;
        zipcode: string;
    }
}

export default function UsersArrayOne(): JSX.Element {

    const [userData, setUserData] = useState<UserProps | null>(null);

    async function fetchUsers() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const obj: UserProps[] = await res.json();
            setUserData(obj[3]);
        } catch(error){
            console.error('Error loading users', error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>UsersArrayOne
            {userData && (
                <>
                    <p>id {userData.id}</p>
                    <p>name {userData.name}</p>
                    <p>username {userData.username}</p>
                    <p>email {userData.email}</p>
                    <p>city {userData.address.city}</p>
                    <p>zipcode {userData.address.zipcode}</p>
                    <hr /><hr />
                </>
            )}
        </div>
    );
}
