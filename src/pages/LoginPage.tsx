import React, { FunctionComponent, useState } from 'react';
import User from '../models/user';

type Props = {
  user: User
};

type Field = {
  value?: any
  error?: String
  isValid?: boolean
}

type Form = {
  username: Field
  password: Field
}

const LoginForm: FunctionComponent<Props> = ({ user }) => {

  const [form, setForm] = useState<Form>({
    username: { value: '', isValid: true },
    password: { value: '', isValid: true },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if(isFormValid) {
    //   pokemon.name = form.name.value;
    //   pokemon.cp = form.cp.value;
    //   pokemon.hp = form.hp.value;
    //   pokemon.types = form.types.value;
    //   PokemonService.updatePokemon(pokemon).then(() => history.push(`/pokemons/${pokemon.id}`));
    // }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">User name</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.username.value} ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="name">User name</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.username.value} ></input>
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Connexion</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;