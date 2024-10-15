// src/components/Users.js
import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'user' },
  ]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserData, setNewUserData] = useState({ name: '', email: '', password: '', confirmPassword: '', role: 'user' });
  const [addingUser, setAddingUser] = useState(false);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUserData({ name: user.name, email: user.email, role: user.role });
  };

  const handleSave = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...newUserData } : user)));
    setEditingUser(null);
  };

  const handleAddUser = () => {
    if (newUserData.name && newUserData.email && newUserData.password && newUserData.confirmPassword && newUserData.role) {
      if (newUserData.password === newUserData.confirmPassword) {
        const newUser = {
          id: users.length + 1,
          name: newUserData.name,
          email: newUserData.email,
          role: newUserData.role,
        };
        setUsers([...users, newUser]);
        setNewUserData({ name: '', email: '', password: '', confirmPassword: '', role: 'user' });
        setAddingUser(false);
      } else {
        alert("Passwords do not match!");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      
      {/* Add User Button */}
      <button
        onClick={() => setAddingUser(!addingUser)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        {addingUser ? 'Cancel' : 'Add User'}
      </button>

      {/* Add User Form */}
      {addingUser && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newUserData.name}
            onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
            className="border rounded p-1 mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUserData.email}
            onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
            className="border rounded p-1 mr-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={newUserData.password}
            onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
            className="border rounded p-1 mr-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={newUserData.confirmPassword}
            onChange={(e) => setNewUserData({ ...newUserData, confirmPassword: e.target.value })}
            className="border rounded p-1 mr-2"
          />
          <select
            value={newUserData.role}
            onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
            className="border rounded p-1 mr-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleAddUser} className="bg-blue-500 text-white px-3 py-1 rounded">
            Add
          </button>
        </div>
      )}

      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{user.id}</td>
              <td className="py-3 px-6 text-left">
                {editingUser?.id === user.id ? (
                  <input
                    type="text"
                    value={newUserData.name}
                    onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                    className="border rounded p-1"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {editingUser?.id === user.id ? (
                  <input
                    type="email"
                    value={newUserData.email}
                    onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                    className="border rounded p-1"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {editingUser?.id === user.id ? (
                  <select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                    className="border rounded p-1"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {editingUser?.id === user.id ? (
                  <button onClick={() => handleSave(user.id)} className="bg-blue-500 text-white px-3 py-1 rounded">
                    Save
                  </button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
