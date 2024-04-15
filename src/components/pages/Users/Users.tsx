import React, { useEffect, useState } from 'react'
import style from './Users.module.css'
import User from './type/User'
import { Link } from 'react-router-dom';

export default function Users(): JSX.Element {

    const [users, setUsers] = useState<User[]>([]);

    async function fetchUsers(): Promise<void> {
        const res = await fetch('https://fakestoreapi.com/users');
        const arr = await res.json();
        setUsers(arr);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

  return (
    <div>Список пользователей (Users)
        <ol className={style.conteinerUsers} >
            {users.map((user) => (
                <li className={style.liUsers} key={user.id}>
                    <p>{user.username}</p>
                    <Link to={`${user.id}`}>Данные пользователя</Link>
                </li>
            ))}
        </ol>
    </div>
  )
}
