function registration() {
    
    console.log("in registration");

    var name = document.getElementById('username');
    var pw = document.getElementById('password');

    localStorage.setItem('username', name.value);
    localStorage.setItem('password', pw.value);
    window.location.href = "index.html"

}

function login() {
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
        window.location.href = "index.html"
    } else {
        alert('Error on login');
    }
}