import React, { useEffect, useState } from 'react'

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

export default function UsersArrayAll(): JSX.Element {

    const [userData, setUserDara] = useState<UserProps[]>([]);

    async function fetchUsers() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const obj: UserProps[] = await res.json();
            setUserDara(obj); 
        } catch(error) {
            console.error('Error loading users', error)
        }
    }

    useEffect(() =>{
        fetchUsers();
    }, [1]);

  return (
    <div>UsersArrayAll
        {userData.map((user) => (
            <div key = {user.id}>
                <p>id {user.id}</p>
                <p>name {user.name}</p>
                <p>username {user.username}</p>
                <p>email {user.email}</p>
                <p>city {user.address.city}</p>
                <p>zipcode {user.address.zipcode}</p>
                <hr />
            </div>
        ))}

    </div>
  )
}
