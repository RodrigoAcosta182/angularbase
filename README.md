# Angularbase

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Estructura del Proyecto Angular

```text
src/
├── app/                                 # Contiene todo el código fuente de la aplicación Angular.
│   ├── core/                            # Lógica fundamental que se carga UNA SOLA VEZ al inicio.
│   │   ├── services/                    # Servicios globales con una única instancia (ej: AuthService).
│   │   ├── guards/                      # Clases que deciden si un usuario puede acceder a una ruta.
│   │   └── interceptors/                # Intercepta peticiones HTTP para añadir tokens, manejar errores, etc.
│   ├── shared/                          # Componentes y utilidades de UI reutilizables en toda la app.
│   │   ├── components/                  # Componentes genéricos y de presentación (ej: un botón, un spinner).
│   │   ├── pipes/                       # Pipes personalizados para transformar datos en las plantillas.
│   │   └── directives/                  # Directivas personalizadas para manipular el DOM.
│   ├── features/                        # Funcionalidades principales de la aplicación, divididas por dominio.
│   │   ├── home/                        # Representa una funcionalidad específica, como la página de inicio.
│   │   │   ├── pages/                   # Componentes "inteligentes" que se asocian a una ruta y manejan lógica.
│   │   │   ├── components/              # Componentes específicos para construir las páginas de este feature.
│   │   │   ├── interfaces/              # Interfaces y tipos de datos que se usan SOLO en este feature.
│   │   │   └── home.routes.ts           # Define las rutas hijas de esta funcionalidad (ej: /home/welcome).
│   │   └── user/                        # Otra funcionalidad, como el perfil de usuario.
│   │       ├── pages/
│   │       ├── components/
│   │       ├── interfaces/
│   │       └── user.routes.ts           # Define las rutas para la sección de usuario (ej: /user/settings).
│   ├── models/                          # Interfaces o tipos de datos GLOBALES que se usan en múltiples features.
│   │   └── user.model.ts                # Ejemplo: La interfaz de Usuario se puede usar en 'user', 'admin', etc.
│   ├── styles/                          # Archivos de estilos globales para mantener la consistencia visual.
│   │   └── _variables.scss              # Variables de SASS/CSS (colores, fuentes, espaciados).
│   ├── app.component.css                # Estilos específicos para el componente raíz.
│   ├── app.component.html               # Plantilla HTML del componente raíz (el "cascarón" de la app).
│   ├── app.component.ts                 # Lógica del componente raíz.
│   ├── app.config.ts                    # Cerebro de la configuración: registra providers globales y el router.
│   └── app.routes.ts                    # Mapa de rutas principal: define las rutas de alto nivel y carga los features.
├── assets/                              # Archivos estáticos: imágenes, íconos, fuentes, JSON locales.
├── environments/                        # Archivos de configuración por entorno (desarrollo, producción).
├── index.html                           # La única página HTML real de la aplicación. Angular inyecta todo aquí.
└── main.ts                              # El punto de entrada que arranca toda la aplicación.
```
