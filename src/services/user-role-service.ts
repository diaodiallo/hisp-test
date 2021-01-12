import UserRole from "../models/userRole";
 
export default class UserRoleService {

  static getUserRoles(): Promise<UserRole[]> {
    return fetch('http://localhost:3001/userRoles')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
  static getUserRole(id: number): Promise<UserRole|null> {
    return fetch(`http://localhost:3001/userRoles/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }

  static updateUserRole(userRole: UserRole): Promise<UserRole> {
    return fetch(`http://localhost:3001/userRoles/${userRole.id}`, {
      method: 'PUT',
      body: JSON.stringify(userRole),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static deleteUserRole(userRole: UserRole): Promise<{}> {
    return fetch(`http://localhost:3001/userRoles/${userRole.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }
 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}