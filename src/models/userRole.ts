export default class UserRole {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    userId: number;
    roleId: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     userId: number,
     roleId: string,
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = 1;
     this.userId = userId;
     this.roleId= roleId;
    }
   }