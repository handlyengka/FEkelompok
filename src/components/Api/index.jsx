import { useState, useEffect } from 'react'
const Api = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://reqres.in/api/users');
          const data = await response.json();
          setUsers(data.data);
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
      fetchUsers();
    }, []);
  
    return (
      <div>
        <h2>User List:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{`${user.first_name} ${user.last_name}`}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Api