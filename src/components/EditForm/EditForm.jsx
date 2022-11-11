import { useState } from 'react';
import s from './EditForm.module.css';

const EditForm = ({ rank, name, cancel, submit }) => {
    const [user, setUser] = useState({ rank, name });

    const submitData = event => {
        event.preventDefault();
        submit(user);
        setUser({ rank: '', name: '' });
        cancel();
    };

    const saveData = event => {
        const { name, value } = event.target;
        setUser(state => ({ ...state, [name]: value }));
    };

    return (
        <form className={s.form} onSubmit={submitData}>
            <label className={s.label}>
                <span className={s.label__text}>Rank</span>
                <input
                    className={s.inputRank}
                    value={user.rank}
                    onChange={saveData}
                    name="rank"
                />
            </label>
            <label className={s.label}>
                <span className={s.label__text}>Name</span>
                <input
                    className={s.input}
                    value={user.name}
                    onChange={saveData}
                    name="name"
                />
            </label>
            <button className={s.button} type="submit">
                ok
            </button>
            <button className={s.button} type="submit" onClick={cancel}>
                cancel
            </button>
        </form>
    );
};

export default EditForm;
