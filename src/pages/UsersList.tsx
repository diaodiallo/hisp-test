import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import USERS from '../models/mock-user';
  
const UsersList: FunctionComponent = () => {

  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    setUsers(USERS);
  }, []);
  
  return (
    <div>
      <h1 className="center">Users list</h1>
      <div className="container"> 
        <div className="row"> 
        {users.map(user => (
          <div className="col s6 m4">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p><strong>User name:</strong> {user.username}</p>
                <p><strong>Date naissance:</strong> {user.datenaissance.toString()}</p>
              </div>
            </div>
          </div> 
        </div>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default UsersList;
