# Dokumentation: Taschenrechner App (JS)

Diese Referenz dokumentiert ein Rechenprogramm, das auf funktionalen Prinzipien und einem Lookup-Mapping basiert.

## 1. Setup & Bibliotheken

| Zeile | Code | Beschreibung |
| :--- | :--- | :--- |
| 2 | `const prompt = require(...)` | Importiert `prompt-sync`. Das Objekt `{sigint: true}` stellt sicher, dass der Nutzer das Programm mit `Strg+C` sauber beenden kann. |

## 2. Rechenlogik (Core Functions)

Die mathematischen Operationen werden als isolierte, reine Funktionen (Pure Functions) definiert.

| Zeile | Code | Beschreibung |
| :--- | :--- | :--- |
| 5 | `const add = (a, b) => a + b;` | Addition. |
| 6 | `const sub = (a, b) => a - b;` | Subtraktion. |
| 7 | `const mul = (a, b) => a * b;` | Multiplikation. |
| 8 | `const div = (a, b) => ...` | Division mit integrierter Fehlerprüfung (Division durch Null) via Ternary Operator. |

## 3. Das Operations-Mapping (Lookup Table)

Anstatt eines `switch`-Blocks nutzen ich ein Objekt, um Operatoren direkt mit Funktionen zu verknüpfen.

| Zeile | Code | Beschreibung |
| :--- | :--- | :--- |
| 11-18 | `const operations = { ... };` | Ein Key-Value-Speicher. Die Keys sind die Symbole als Strings, die Values sind die Funktionsnamen. |
| 16-17 | `'/'` und `':'` | Beide Symbole verweisen auf die `div`-Logik (Alias-Prinzip). |

## 4. Die Steuerungs-Logik

| Zeile | Code | Beschreibung |
| :--- | :--- | :--- |
| 20 | `const taschenRechner = ...` | Die Funktion prüft: Existiert der Key `op` im Objekt? Wenn ja, wird die zugehörige Funktion mit `(a, b)` aufgerufen. |

## 5. User-Interface (Input/Output)

| Zeile | Code | Beschreibung |
| :--- | :--- | :--- |
| 23-24 | `parseFloat(prompt(...))` | Erfasst die Eingabe als Text und wandelt sie sofort in eine Dezimalzahl um. |
| 25 | `prompt("Operator...")` | Erfasst das Rechenzeichen. |
| 30 | `console.log(...)` | Ausgabe mittels Template Literals (ermöglicht Variablen direkt im String). |
