function validasi() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "" && password == "") {
        alert('Gagal Login');
        return true;
    } else {
        alert('Login Berhasil');
        window.open("dashboard.html");
    }
}

