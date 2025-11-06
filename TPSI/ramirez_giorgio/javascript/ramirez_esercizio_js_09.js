let username = prompt("Inserisci username:");

(username == null) && alert("Canceled") ||
(username != "Admin") && alert("I don't know you") ||
(username == "Admin") && (password = prompt("Password:")) && (password == null) && alert("Canceled") ||
(username == "Admin") && (password != null) && (password != "Agnell1no") && alert("Wrong password") ||
(username == "Admin") && (password == "Agnell1no") && alert("Welcome!");