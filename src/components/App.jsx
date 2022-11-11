import { useEffect, useState } from 'react';
import api from 'services/api';
import { UserForm, UsersList } from 'components';

export const App = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const data = await api.getUsers();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const edit = async (id, user) => {
        user.rank = Number.parseInt(user.rank);
        if (!user.rank) delete user.rank;
        await api.update(id, user);
        getUsers();
    };

    const remove = async id => {
        await api.remove(id);
        getUsers();
    };

    const add = async name => {
        await api.add(name);
        getUsers();
    };

    return (
        <div style={{ margin: '15px' }}>
            <UserForm addUser={add} />
            <UsersList users={users} edit={edit} remove={remove} />
        </div>
    );
};
