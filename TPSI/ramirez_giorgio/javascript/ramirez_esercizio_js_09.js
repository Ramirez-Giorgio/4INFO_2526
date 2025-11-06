let username = prompt("Inserisci username:");

(username == null) && alert("Canceled") ||
(username != "Admin") && alert("I don’t know you") ||
(username == "Admin") && (
  (password = prompt("Password:")),
  (password == null && alert("Canceled")) ||
  (password != "Agnell1no" && alert("Wrong password")) ||
  (password == "Agnell1no" && alert("Welcome!"))
);