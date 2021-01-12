import React, { FunctionComponent, useState } from 'react';
import User from '../models/user';
import { useHistory } from 'react-router-dom';
import formatRole from '../helpers/format-roles';
import Role from '../models/role';
import ROLE from '../models/mock-role';

type Field = {
  value?: any
  error?: String
  isValid?: boolean
}

type Form = {
  username: Field
  password: Field
  datenaissance: Field
  roles: Field
}

type Data = {
    user: User
    roles: []
}

const UserForm: FunctionComponent = () => {

  const [form, setForm] = useState<Form>({
    username: { value: '', isValid: true },
    password: { value: '', isValid: true },
    datenaissance: { value: '01-01-2010', isValid: true },
    roles: { value: [], isValid: true }
  });

  const [data, setData] = useState<Data>({
    user: new User('username', 'password', new Date()),
    roles: []
  });

  const userRoles = ROLE;

  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name
    const fieldValue: string = e.target.value
    const newField: Field = {[fieldName]: {value: fieldValue}};
    
    setForm({...form, ...newField});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      data.user.username = form.username.value;
      data.user.password = form.password.value;
      data.user.datenaissance = form.datenaissance.value;
      data.roles = form.roles.value;
      // Sen the user in the db
    //   PokemonService.updatePokemon(pokemon).then(() => history.push(`/pokemons/${pokemon.id}`));
    history.push(`/users`);
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {/* User name */}
                <div className="form-group">
                  <label htmlFor="name">User name</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.username.value} onChange={e => handleInputChange(e)}></input>
                  {form.username.error && 
                  <div className="card-panel red accent-1">
                    {form.username.error}
                  </div>
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="name">User password</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.password.value} onChange={e => handleInputChange(e)}></input>
                  {form.password.error && 
                  <div className="card-panel red accent-1">
                    {form.password.error}
                  </div>
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="name">Date naissance</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.datenaissance.value} onChange={e => handleInputChange(e)}></input>
                  {form.datenaissance.error && 
                  <div className="card-panel red accent-1">
                    {form.datenaissance.error}
                  </div>
                  }
                </div>
               
                {/* User roles */}
                <div className="form-group">
                  <label>Roles</label>
                  {userRoles.map(role => (
                    <div key={role.id} style={{ marginBottom: '10px' }}>
                      <label>
                        <input id={role.id} type="checkbox" className="filled-in" value={role.name} ></input>
                        <span>
                          <p className={formatRole(role.name)}>{role.name}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserForm;