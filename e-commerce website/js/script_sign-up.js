sign.addEventListener('mousedown', function () {
    document.getElementById('sign').style.backgroundColor = "seagreen";
    email = document.getElementById('b_email').value;
    tele = document.getElementById('b_tele').value;
    pwsd = document.getElementById('b_pwsd').value;
    console.log(email)
    if ((email != "") & (tele != "") & (pwsd != "")) {
        e = localStorage.setItem('email',email);
        t = localStorage.setItem('tele',tele);
        p = localStorage.setItem('pwsd',pwsd);
    }
    else{
        alert("All the requirments are not fulfilled.\nTry Again.");
        window.location.reload();
    }
    document.getElementById('b_email').value = null;
    document.getElementById('b_tele').value = null;
    document.getElementById('b_pwsd').value = null;
})
sign.addEventListener('mouseup', function () {
    document.getElementById('sign').style.backgroundColor = "skyblue";
})

gole.onclick = function onSignin(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  };