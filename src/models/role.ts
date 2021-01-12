export default class User {
    // 1. Typage des propiétés d'un pokémon.
    id: string;
    name: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: string = 'id',
     name: string = 'name',
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.name = name;
    }
   }