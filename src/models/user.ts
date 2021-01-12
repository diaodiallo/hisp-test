export default class User {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    username: string;
    password: string;
    datenaissance: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     username: string = 'username',
     passpord: string = 'password',
     datenaissance: Date = new Date(),
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = 1;
     this.username = username;
     this.password = passpord;
     this.datenaissance = datenaissance;
    }
   }