import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Podrías usar una librería como jwt-decode para validar el token
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Aquí iría la lógica para verificar si el token no solo existe, sino que es válido.
    return !!token; // '!!' convierte el valor en un booleano
  }
  getUserRoles(): string[] {
    // Aquí deberías implementar la lógica para obtener los roles del usuario
    // Por ejemplo, decodificando un JWT almacenado en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Decodifica el token y extrae los roles
      // Esto es un ejemplo, necesitarías una librería como jwt-decode
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.roles || [];
    }
    return [];
  }
}
