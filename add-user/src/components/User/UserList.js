import style from './UserList.module.css';

function UserList(props) {
    let content = '';
    if(props.users) {
        content = props.users.map(user => {
            return <li key={user.id}>{user.username}</li>
        });
    }

    return <div style={{background: 'white'}} className={style.users}>
        <ul>
            {content}
        </ul>
    </div>;
}

export default UserList;