import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [users, setUsers] = useState(null);

  const addUserHandler = (newUser) => {
    console.log(newUser);
    setUsers( (prevState) => {
      return [...prevState, newUser];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
