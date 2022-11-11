import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import s from './UserForm.module.css';

const UserForm = ({ addUser }) => {
    const [name, setName] = useState('');

    const submitData = event => {
        event.preventDefault();
        addUser(name);
        setName('');
    };

    const saveData = event => {
        const { value } = event.target;
        setName(value);
    };

    return (
        <form className={s.form} onSubmit={submitData}>
            <label className={s.label}>
                <span className={s.label__text}>Name</span>
                <input
                    className={s.input}
                    type="text"
                    value={name}
                    onChange={saveData}
                    name="name"
                    required
                />
                <FaUser className={s.icon} size="15" />
            </label>
            <button className={s.button} type="submit">
                Add user
            </button>
        </form>
    );
};

export default UserForm;
