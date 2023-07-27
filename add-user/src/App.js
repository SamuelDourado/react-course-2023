import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';



function App() {
  const [users, setUsers] = useState(null);
  
  const addUserHandler = (user) => {
    console.log(user);
    setUsers(prevState => {
      prevState.push(user);
      setUsers(prevState);
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
