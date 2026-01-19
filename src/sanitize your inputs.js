const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;'
};

function sanitize(str) {
  return str.replace(/[&<>"'/]/g, match => escapeMap[match]);
}

sanitize('<script>alert(1)</script>'); // '&lt;script&gt;alert(1)&lt;/script&gt;' [web:25]
// sanitize('Hello & welcome!'); // 'Hello &amp; welcome!' [web:26]

// // module: input number | Test:
// // output(getNumber("erste"));
// // output(getNumber("zweite"));
// function getNumber(figure) {        

// Kopfgesteuerte Schleife (Array-Listen)
// Für Arrays von Eingaben: Iteriere mit for und saniere jedes Element.

function sanitizeArray(inputs) {
  const clean = [];
  for (let i = 0; i < inputs.length; i++) {
    clean[i] = inputs[i].trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }
  return clean;
}
sanitizeArray(['<b>Hi</b>', '<script>bad</script>']); // ['<b>Hi</b>', ''][web:22]

// While-Schleife (Streaming/Lange Strings)
// Für sehr große Strings, um Speicher zu schonen:

function sanitizeWhile(str) {
  let result = '', i = 0;
  while (i < str.length) {
    const char = str[i];
    result += char === '<' ? '&lt;' : char;
    i++;
  }
  return result;
}
// Effizient für Streams, aber langsamer als Regex+Lookup [web:22]

// Rekursive Struktur (Objekte/Arrays)
// Für verschachtelte Daten sanitieren:

function sanitizeRecursive(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return typeof obj === 'string' ? sanitize(obj) : obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sanitizeRecursive);
  }
  const clean = {};
  for (const key in obj) {
    clean[key] = sanitizeRecursive(obj[key]);
  }
  return clean;
}
// sanitizeRecursive({ name: '<h1>Hi</h1>', tags: ['<script>'] }); [web:22]

// Praktische Tipps
// Kombiniere mit Bibliotheken: DOMPurify für HTML, validator.js für E-Mails.
// Validiere zuerst (z. B. Länge, Typ), dann saniere.
// Server-seitig priorisieren, nie nur Client vertrauen.
