function users() {
    let enterUser = document.getElementById("username").value;
    let enterPassword = document.getElementById("password").value;
    let url = "page2.html";
    let buttonError = document.getElementById('cancelEnter');
    if ((enterUser == "Lida" && enterPassword == "Lida")
        || (enterUser == "Ilya" && enterPassword == "Ilya")
        || (enterUser == "Alina" && enterPassword == "Alina")
        || (enterUser == "Maxim" && enterPassword == "Maxim")
        || (enterUser == "Victoria" && enterPassword == "Victoria")) {
        document.location.href = url;
    } else do {
        document.getElementById("errorEnterForm").style.display = "block";
    } while (buttonError.onclick == false);
}
