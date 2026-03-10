//Fetch
import React, { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // GET USERS
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  };

  // LOAD DATA
  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER (POST)
  const addUser = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data]);
        setName("");
        setEmail("");
      });
  };

  // DELETE USER
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      });
  };

  // EDIT BUTTON CLICK
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // UPDATE USER (PUT)
  const updateUser = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"          //Tells server Data is JSON
      },
      body: JSON.stringify({                       //Converts JavaScript object into JSON.
        name: name,
        email: email
      })
    })
      .then(res => res.json())                    //Converts response to JSON
      .then(data => {

        const updatedUsers = users.map(user =>
          user.id === editId ? data : user
        );

        setUsers(updatedUsers);

        setEditId(null);
        setName("");
        setEmail("");
      });
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>User Management</h2>

      {/* FORM */}

      <form onSubmit={editId ? updateUser : addUser}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId ? "Update User" : "Add User"}
        </button>

      </form>

      <hr />

      {/* USER LIST */}

      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px" }}>

          <b>{user.name}</b> - {user.email}

          <button
            onClick={() => editUser(user)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;

//Execution
Component loads
     ↓
useEffect runs
     ↓
fetchUsers()

//Axios
| Feature              | Fetch                 | Axios                          |
| -------------------- | --------------------- | ------------------------------ |
| Type                 | Built-in browser API  | External library               |
| Installation         | Not required          | Required (`npm install axios`) |
| JSON conversion      | Manual (`res.json()`) | Automatic                      |
| Error handling       | Only network errors   | Handles HTTP errors            |
| Code length          | More code             | Less code                      |
| Request cancellation | Hard                  | Easy                           |
| Browser support      | Native                | Uses library                   |

  import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/users";

  // GET USERS
  const fetchUsers = () => {
    axios.get(API)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  };

  // LOAD DATA
  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER (POST)
  const addUser = (e) => {
    e.preventDefault();

    axios.post(API, {
      name: name,
      email: email
    })
      .then(res => {
        setUsers([...users, res.data]);
        setName("");
        setEmail("");
      });
  };

  // DELETE USER
  const deleteUser = (id) => {

    axios.delete(`${API}/${id}`)
      .then(() => {

        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);

      });

  };

  // EDIT USER
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // UPDATE USER
  const updateUser = (e) => {
    e.preventDefault();

    axios.put(`${API}/${editId}`, {
      name: name,
      email: email
    })
      .then(res => {

        const updatedUsers = users.map(user =>
          user.id === editId ? res.data : user
        );

        setUsers(updatedUsers);

        setEditId(null);
        setName("");
        setEmail("");

      });

  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>User Management (Axios)</h2>

      <form onSubmit={editId ? updateUser : addUser}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId ? "Update User" : "Add User"}
        </button>

      </form>

      <hr />

      {users.map(user => (

        <div key={user.id}>

          <b>{user.name}</b> - {user.email}

          <button onClick={() => editUser(user)} style={{marginLeft:"10px"}}>
            Edit
          </button>

          <button onClick={() => deleteUser(user.id)} style={{marginLeft:"10px"}}>
            Delete
          </button>

        </div>

      ))}

    </div>
  );

}

export default App;
     ↓
API called
     ↓
Users displayed
