# Git-Testing Protokoll: Remote - Codespace - Lokal

## Infrastruktur Setup

* **Remote:** zwei Branches (`main`, `jy4education`)
* **Lokal:** eine Branch (`jy4education`)

---

## Test-Szenarien & Ergebnisse

### Szenario 01: Remote zu Lokal

* **Aktion:** Push/Pull von Remote auf den lokalen Rechner.
* **Status:** [OK]

### Szenario 02: Codespace zu Remote

* **Aktion:** Push/Pull vom GitHub Codespace zum Remote Repository.
* **Status:** [OK]

### Szenario 03: Lokal (Codespace Interaktion)

* **Push:** Lokal (Codespace) zu lokal -> [OK]
* **Pull:** Lokal (Codespace) zu lokal -> **Verzögerung festgestellt.**
* **Lösung:** Restart des Codespace oder `Ctrl + R` (Reload Window) erforderlich, um Änderungen im UI zu forcieren.

### Szenario 04: Lokal zu Remote (Standard-Workflow)

* **Aktion:** Push/Pull zwischen lokalem Rechner und Remote.
* **Status:** [OK]

### Szenario 05: Erzwingen der Branch-Synchronität

* **Ziel:** Lokalen Stand im Codespace hart mit dem Remote abgleichen.
* **Befehl:**

```bash
git fetch origin && git reset --hard origin/jy4education
