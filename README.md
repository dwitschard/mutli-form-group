# Erklärungen

## Intro
Die `AppComponent` fungiert als Root-Komponente und definiert das Formular. Die beiden Child-Components `CompanyFormComponent` und `UserFormComponent` sind nur für einen Teil des Formulars zuständig

## Optionen
Die beiden Child-Components zeigen je einen anderen Ansatz, wie man das Problem lösen kann:
 
### Option I: Dynamische Erzeugung der Formularstruktur im Child-Component; siehe `UserFormComponent`
Der Parent `AppComponent#35` definiert nur, dass es eine FormGroup mit irgendeinem Namen gibt
Der Child-Component `UserFormComponent` erstellt seine «eigene» FormGroup zur Laufzeit im `ngOnInit`-Hook 
(Achtung: Da das Parent-Form übergeben wird, ist dieses nicht bereits im Konstruktor vorhanden)
Der Child-Component hat dann die gesamte Logik zum Formular gekapselt was das Befüllen von Defaultwerten sehr stark vereinfacht
Nachteil: Der Root-Component `AppComponent` welcher den Formularinhalt weiterverarbeitet, weiss nicht wie die Struktur des Formulars aussieht.
 
### Option II: Formularstruktur vom Parent definiert; siehe `CompanyFormComponent`
Der Parent `AppComponent#39` gibt die Struktur des Formulars für den Child-Component `CompanyFormComponent` vor
Nachteil: Der Child-Component muss exakt wissen wie die Properties (`name`, `address`) heissen, damit er mit dem Formular interagieren kann (z.B Befüllen von Defaultwerten / bereits existierenden Daten)
Nachteil: Refactorings im Root-Component `AppComponent` lassen nicht direkt vermuten, dass dies einen Impact auf den ChildComponent `CompanyFormComponent` haben könnte.

# MultiFormGroup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
