import style from './UserList.module.css';

function UserList(props) {
    const content = '';
    if(props.users) {
        props.users.map(user => {
            return <li>{user.name}</li>
        });
    }

    return <div className={style.users}>
        <ul>
            {content}
        </ul>
    </div>;
}

export default UserList;