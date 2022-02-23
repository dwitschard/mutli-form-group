# Multi Form Group
Dieses Repo zeigt zwei Möglichkeiten wie grosse, komplexe Formulare in Angular aufgeteilt werden können. Nachfolgend sind die Vorteile & Nachteile der beiden Vorschläge aufgelistet.

## Intro
Die `AppComponent` fungiert als Root-Komponente und definiert das Formular. Die beiden Child-Components `CompanyFormComponent` und `UserFormComponent` sind nur für einen Teil des Formulars zuständig

## Optionen
Die beiden Child-Components zeigen je einen anderen Ansatz, wie man das Problem lösen kann:
 
### Option I: Dynamische Erzeugung der Formularstruktur im Child-Component; siehe `UserFormComponent`
Der Parent `AppComponent#35` definiert nur, dass es eine FormGroup mit irgendeinem Namen gibt

Der Child-Component `UserFormComponent` erstellt seine «eigene» FormGroup zur Laufzeit im `ngOnInit`-Hook 
(Achtung: Da das Parent-Form übergeben wird, ist dieses nicht bereits im Konstruktor vorhanden)

Der Child-Component hat dann die gesamte Logik zum Formular gekapselt was das Befüllen von Defaultwerten sehr stark vereinfacht

**Nachteil**: Der Root-Component `AppComponent` welcher den Formularinhalt weiterverarbeitet, weiss nicht wie die Struktur des Formulars aussieht.
 
### Option II: Formularstruktur vom Parent definiert; siehe `CompanyFormComponent`
Der Parent `AppComponent#39` gibt die Struktur des Formulars für den Child-Component `CompanyFormComponent` vor

**Nachteil**: Der Child-Component muss exakt wissen wie die Properties (`name`, `address`) heissen, damit er mit dem Formular interagieren kann (z.B Befüllen von Defaultwerten / bereits existierenden Daten)

**Nachteil**: Refactorings im Root-Component `AppComponent` lassen nicht direkt vermuten, dass dies einen Impact auf den ChildComponent `CompanyFormComponent` haben könnte.

## Form-Submit Event
Achtung: Damit der «submit»-Event korrekt behandelt wird, muss in Angular immer der `<form (ngSubmit)=»formSubmitted()»>`-Event behandelt werden. Nur so stellt ihr sicher, dass das Formular auch mit einem «Enter» in irgendeinem Feld abgeschickt werden kann (sofern es gültig ist).
Damit dieser Event auch mit den Child-Form-Components klappt, muss in jedem `<form>`-Tag der dazugehörige Submit-Button vorhanden sein `<button type=»submit»>Mein Button</button>`. Im Beispiel seht ihr das an folgenden Stellen: AppComponent, UserFormComponent, CompanyFormComponent. Ihr könnt diesen Button dann auch via CSS ausblenden (siehe `CompanyFormComponent`) wenn ihr nur den Submit-Button des Root-Containers anzeigen möchtet.
