import React, { useEffect, useState } from 'react'
import style from './UserPage.module.css'
import User from '../Users/type/User'
import { Link, useParams } from 'react-router-dom'

export default function UserPage(): JSX.Element {
    const {userId} = useParams();
    const [user, setUser] = useState<User | undefined>(undefined);
    async function fetchUser(): Promise<void> {
        const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
        const obj = await res.json();
        setUser(obj);
    }
    useEffect(() => {
        fetchUser();
    }, [userId]);

  return (
    <div className={style.containerUP}>
        <h4>Данные пользователя (User Page)</h4>
        <p>username: {user?.username}</p>
        <p>email: {user?.email}</p>
        <p>password: {user?.password}</p>
        <Link to="../users">К списку пользователей</Link>
    </div>
  )
}