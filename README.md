# Multi Form Group
Dieses Repo zeigt Möglichkeiten wie grosse, komplexe Formulare in Angular aufgeteilt werden können. Nachfolgend sind die Vorteile & Nachteile der beiden Vorschläge aufgelistet.

## Optionen
Die verschiedenen `features` zeigen je unterschiedliche Ansätze, wie man das Problem lösen kann:
 
### Option I: Dynamische Erzeugung der Formularstruktur im Child-Component; siehe [option-1](src/app/features/option-1)
Der Parent [dynamic-child-wrapper.component.ts](src/app/features/option-1/containers/dynamic-child-wrapper/dynamic-child-wrapper.component.ts) definiert nur, dass es eine FormGroup mit irgendeinem Namen gibt

Der Child-Component [UserFormComponent](src/app/features/option-1/components/user-form/user-form.component.ts) erstellt seine «eigene» FormGroup zur Laufzeit im `ngOnInit`-Hook 
(Achtung: Da das Parent-Form übergeben wird, ist dieses nicht bereits im Konstruktor vorhanden)

Der Child-Component hat dann die gesamte Logik zum Formular gekapselt was das Befüllen von Defaultwerten sehr stark vereinfacht

**⛔ Nachteil**: Der Root-Component `AppComponent` welcher den Formularinhalt weiterverarbeitet, weiss nicht wie die Struktur des Formulars aussieht.
 
### Option II: Formularstruktur vom Parent definiert; siehe [option-2](src/app/features/option-2)
Der Parent [static-child-wrapper.component.ts](src/app/features/option-2/containers/static-child-wrapper/static-child-wrapper.component.ts) gibt die Struktur des Formulars für den Child-Component (company-form.component.ts)[src/app/features/option-2/components/company-form/company-form.component.ts] vor

(**⛔ Nachteil**: Refactorings im Root-Component [static-child-wrapper.component.ts](src/app/features/option-2/containers/static-child-wrapper/static-child-wrapper.component.ts) lassen nicht direkt vermuten, dass dies einen Impact auf den ChildComponent (company-form.component.ts)[src/app/features/option-2/components/company-form/company-form.component.ts] haben könnte.
=> zu prüfen, ob dies mit _Angular v14_ nicht zutrifft)

(**⛔ Nachteil**: Der Child-Component muss exakt wissen wie die Properties (`name`, `address`) heissen, damit er mit dem Formular interagieren kann (z.B Befüllen von Defaultwerten / bereits existierenden Daten)
=> Wird durch _Typed Forms_ von _Angular v14_ obsolet)

### Option III: Dynamisches Formularmodul (Custom-Made); siehe [option-3](src/app/features/option-3)

Das Formular wird mittels [Konfigurationsobjekt](src/app/features/option-3/modules/dynamic-forms/model/dynamic-reactive-form.model.ts) definiert, und dann in die [dynamic-form.component.ts](src/app/features/option-3/modules/dynamic-forms/dynamic-form/dynamic-form.component.ts) übergeben, welche das gesamte
Rendering des Formulars übernimmt.
Bsp der Verwendung: [dynamic-form-wrapper.component.ts](src/app/features/option-3/containers/dynamic-form-wrapper/dynamic-form-wrapper.component.ts)

**✅ Vorteil**: Alle Formularelemente sehen über die gesamte Applikation genau gelich aus

**✅ Vorteil**: Die Struktur des Formulars wird in einer Komponente definiert, und das Resultat wird in derselben weiterbearbeitet

**✅ Vorteil**: Keine Library-Abhängigkeit: Code ist relativ überschaubar, Änderungen für neue Anforderungen können relativ einfach eingepflegt werden. 

**⛔ Nachteil**: Flexibilität vs. Komplexität - Können alle Usecases mit einer übschaubaren Komplexität abgedeckt werden? 

### Option IV: Dynamisches Formularmodul (ext. Library); siehe [option-4](src/app/features/option-4)

Bsp: [formly-wrapper.component.ts](src/app/features/option-4/containers/formly-wrapper/formly-wrapper.component.ts)
Link Dokumentation: [Formly Dokumentation](https://formly.dev/)

**✅ Vorteil**: Alle Formularelemente sehen über die gesamte Applikation genau gelich aus

**✅ Vorteil**: Die Struktur des Formulars wird in einer Komponente definiert, und das Resultat wird in derselben weiterbearbeitet

**✅ Vorteil**: Kaum Overhead, da Logik bereits existiert

**⛔ Nachteil**: Gebunden an Release-Cylces der Library, Abhängigkeit bzgl. Wartung etc. 

**⛔ Nachteil**: Library kann tendentiell mehr als man benötigt was eine steilere Lernkurve nach sich zieht 

## Form-Submit Event
Achtung: Damit der «submit»-Event korrekt behandelt wird, muss in Angular immer der `<form (ngSubmit)=»formSubmitted()»>`-Event behandelt werden. Nur so stellt ihr sicher, dass das Formular auch mit einem «Enter» in irgendeinem Feld abgeschickt werden kann (sofern es gültig ist).
Damit dieser Event auch mit den Child-Form-Components klappt, muss in jedem `<form>`-Tag der dazugehörige Submit-Button vorhanden sein `<button type=»submit»>Mein Button</button>`. Im Beispiel seht ihr das an folgenden Stellen: AppComponent, UserFormComponent, CompanyFormComponent. Ihr könnt diesen Button dann auch via CSS ausblenden (siehe `CompanyFormComponent`) wenn ihr nur den Submit-Button des Root-Containers anzeigen möchtet.
