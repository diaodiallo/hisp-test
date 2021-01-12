export default class User {
    // 1. Typage des propiétés d'un pokémon.
    userId: number;
    roleId: number;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     userId: number,
     roleId: number,
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.userId = userId;
     this.roleId= roleId;
    }
   }