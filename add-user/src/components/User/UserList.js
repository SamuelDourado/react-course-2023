import style from './UserList.module.css';
import Card from '../UI/Card';

function UserList(props) {
    console.log("UserList");
    let content = '';
    if(props.users) {
        content = props.users.map(user => {
            return <li key={user.id}>{user.username} ({user.age} years old)</li>
        });
    }

    return <Card className={style.users}>
        <ul>
            {content}
        </ul>
    </Card>;
}

export default UserList;