import React, { useEffect, useState } from 'react';
import style from './UsersArraySelect.module.css'

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

interface SelectProps {
    userId: number;
}

export default function UsersArraySelect({ userId }: SelectProps): JSX.Element {

    const [userData, setUserData] = useState<UserProps | null>(null);

    async function fetchUser() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const obj: UserProps = await res.json();
            setUserData(obj); 
        } catch(error) {
            console.error('Error loading user', error)
        }
    }

    useEffect(() =>{
        if (userId) {
            fetchUser();
        }
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.container}>
            <div key={userData.id}>
                <p>id {userData.id}</p>
                <p>name {userData.name}</p>
                <p>username {userData.username}</p>
                <p>email {userData.email}</p>
                <p>city {userData.address.city}</p>
                <p>zipcode {userData.address.zipcode}</p>
            </div>
        </div>
    );
}
