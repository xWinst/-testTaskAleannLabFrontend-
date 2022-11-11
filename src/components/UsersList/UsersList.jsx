import { useState, useRef } from 'react';
import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri';
import { EditForm } from 'components';
import s from './UsersList.module.css';

const UsersList = ({ users, edit, remove }) => {
    const [editId, setEditId] = useState(null);

    const draggingItem = useRef();
    const dragOverItem = useRef();

    const onEdit = id => {
        setEditId(id);
    };

    const cancel = () => {
        setEditId(null);
    };

    const submit = user => {
        edit(editId, user);
    };

    const handleDragStart = (e, position) => {
        draggingItem.current = position;
    };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
    };

    const handleDragEnd = e => {
        edit(users[draggingItem.current - 1]._id, {
            rank: dragOverItem.current,
        });
        draggingItem.current = null;
        dragOverItem.current = null;
    };

    return (
        <ul
            className={s.list}
            onDragOver={e => {
                e.preventDefault();
            }}
        >
            {users.map(({ name, rank, _id }) => (
                <li
                    key={_id}
                    draggable={true}
                    className={s.item}
                    onDragStart={e => handleDragStart(e, rank)}
                    onDragEnter={e => handleDragEnter(e, rank)}
                    onDragEnd={handleDragEnd}
                >
                    {editId === _id ? (
                        <EditForm
                            rank={rank}
                            name={name}
                            cancel={cancel}
                            submit={submit}
                        />
                    ) : (
                        <>
                            <div className={s.user}>
                                <span>{rank}: </span>
                                <span>{name}</span>
                            </div>
                            <div className={s.buttons}>
                                <RiEditLine
                                    className={s.button}
                                    size="25"
                                    onClick={() => onEdit(_id)}
                                />
                                <RiDeleteBin5Line
                                    className={s.button}
                                    size="25"
                                    onClick={() => remove(_id)}
                                />
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default UsersList;
