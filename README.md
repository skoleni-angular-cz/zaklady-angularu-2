# Základy Angularu - Cvičení 2 - Úkolníček s backendem

Navazujeme na právě vytvořený úkolníček. Naším cílem bude vyměnit implementaci "lokální databáze" za Angular službu, která bude poskytovat data z backendu přes REST API. Jako REST API použijeme veřejně dostupnou službu jsonplaceholder.

Služba by měla umět následující operace:
* Získat seznam všech úkolů (GET `https://jsonplaceholder.typicode.com/todos`),
* Vytvořit úkol dle vstupních atributů `title` a `completed` (POST `https://jsonplaceholder.typicode.com/todos`),
* Upravit úkol dle jeho ID a nových atributů (PUT `https://jsonplaceholder.typicode.com/todos/:id`),
* Smazat úkol dle jeho ID (DELETE `https://jsonplaceholder.typicode.com/todos/:id`).

*Pozn.: Služba jsonplaceholder data reálně nevytvoří/nezmění/nesmaže, ale bude se tvářit, jako by k dané reálně došlo (HTTP kód 2xx).*

## HTTP klient

Pro jednoduchost použijeme vestavěné Fetch API, `Promise`s a `async` funkce. Angular HTTP klienta prozatím používat nebudeme, protože vyžaduje dovysvětlení několika dalších pojmů.

Pro Vaše pohodlí přikládáme útržky kódu Fetch API, které realizují operace získání, úpravy a smazání úkolů:

Získání:
```
(await fetch('https://jsonplaceholder.typicode.com/todos')).json();
```

Vytvoření:
```
(await postData(`https://jsonplaceholder.typicode.com/todos`, {title: title, completed: completed})).json();
```
* proměnná `title` je typu `string`,
* proměnná `completed` je typu `boolean`.

Úprava:
```
(await putData(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {title: todo.title, completed: todo.completed})).json();
```
* proměnná `todo` je typu `TodoItem`.

Smazání:
```
(await deleteData(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)).json();
```
* proměnná `todo` je typu `TodoItem`.

Utilitky `postData`, `putData` a `deleteData` se nachází v souboru `http-helpers.ts`.

## Dílčí práce k provedení

### 1. Vytvořte službu `ApiTodoService`, která bude zapouzdřovat výše zmíněná volání.

### 2. Injektujte službu `ApiTodoService` do `AppComponent`.

### 3. V `AppComponent` implementujte načtení všech úkolů za pomoci hooku životního cyklu `ngOnInit`.

### 4. V `AppComponent` adekvátně nahraďte utvoření úkolu voláním API skrz `ApiTodoService`.

### 5. V `AppComponent` adekvátně nahraďte upravení úkolu voláním API skrz `ApiTodoService`.

### 6. V `AppComponent` adekvátně nahraďte smazání úkolu voláním API skrz `ApiTodoService`.

### 7. Ověřte v konzoli síťových volání v nástrojích pro vývojáře, že došlo k volání operací utvoření (POST), upravení (PUT) a smazání (DELETE) úkolu.
* Nástroje pro vývojáře lze v prohlížeči vyvolat klávesou `F12` (Windows) nebo kl. zkratkou `Cmd+Alt+I` (MacOS)
