import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service'; // Suponiendo un servicio de autenticación
@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService // Inyecta tu servicio de auth
  ) {}

  @Input() set appHasRole(role: string | string[]) {
    const userRoles = this.authService.getUserRoles(); // Método que devuelve los roles del usuario
    const requiredRoles = Array.isArray(role) ? role : [role];

    if (requiredRoles.some((r) => userRoles.includes(r))) {
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
