# BarberqueueAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# barberqueue-angular

Para estruturar pastas e componentes no seu projeto Angular de forma eficiente, é importante adotar uma abordagem modular que facilite a escalabilidade, a manutenção e a compreensão do código por outros desenvolvedores. Aqui estão algumas práticas recomendadas baseadas nas fontes fornecidas:

### Estrutura Modular

- **Organização por Feature**: Organize seus componentes, módulos e serviços por feature ou funcionalidade. Cada feature tem sua própria pasta dentro de um diretório `features`, que contém todos os componentes, módulos e serviços relacionados a essa feature específica. Isso torna o código mais fácil de entender e manter, pois cada parte do sistema está agrupada logicamente [0][1].

 Exemplo:
 ```
 |-- features
      |-- clientes
          |-- components
              |-- listagem-clientes
              |-- novo-cliente
              |-- clientes-components.module.ts
          |-- clientes.component.ts
          |-- clientes.component.html
          |-- clientes.module.ts
      |-- produtos
          |-- components
              |-- listagem-produtos
              |-- novo-produto
              |-- produtos-components.module.ts
          |-- produtos.component.ts
          |-- produtos.component.html
          |-- produtos.module.ts
 ```

### Core Module

- **Core Module**: Crie um módulo `core` que contém componentes, serviços e utilitários que são usados em toda a aplicação, como componentes universais (navbar, footer), guardas de rota, interceptores de requisições, layouts pré-definidos, traduções, configurações, variáveis CSS e temas [1].

 Exemplo de estrutura do diretório `core`:
 ```
 |-- core
      |-- components
      |-- guards
      |-- interceptors
      |-- layouts
      |-- translations
      |-- configs
      |-- overrides
      |-- styles
          |-- variables.scss
          |-- theme.scss
 ```

### Shared Module

- **Shared Module**: Se houver componentes, diretivas ou pipes que serão reutilizados em várias features, crie um módulo `shared` para agrupá-los. Isso evita a duplicação de código e facilita a manutenção [2].

### Considerações Gerais

- **Modularização**: A modularização é uma prática recomendada para estruturar componentes e módulos em projetos Angular. Isso ajuda a manter o código organizado e facilita a compreensão do sistema por novos desenvolvedores. Cada feature ou parte específica da aplicação deve ser encapsulada em seu próprio módulo ou subdiretório [2].

- **Documentação Oficial**: A documentação oficial do Angular fornece orientações sobre a estrutura de pastas e a modularização, recomendando a separação de módulos em feature, shared, etc. Essas recomendações podem servir como um guia para estruturar seu projeto Angular [2].
