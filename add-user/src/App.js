import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [users, setUsers] = useState(null);

  const addUserHandler = (newUser) => {
    console.log(newUser);
    setUsers( (prevState) => {
      let lista = [];
      if(prevState) {
        lista = prevState;
      }
      lista.push(newUser);
      return (lista);
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList />
    </div>
  );
}

export default App;
