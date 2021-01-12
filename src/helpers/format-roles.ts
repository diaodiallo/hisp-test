const formatRoles = (role: String): string => {
    let color: string;
   
    switch (role) {
      case 'Admin': 
        color = 'green lighten-1'; 
        break; 
      case 'View': 
        color = 'blue lighten-1'; 
        break; 
        default: 
        color = 'grey'; 
        break;
    }
   
    return `chip ${color}`;
  }

export default formatRoles;