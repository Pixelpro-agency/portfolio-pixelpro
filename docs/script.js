function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        number : document.getElementById("number").value,
        richiamare: document.getElementById("richiamare").value,
        msg: document.getElementById("msg").value
    }
    emailjs.send("service_9f61txk", "template_sx8rlqg", params).then(function (res) {
        alert("Email inviata correttamente");
    })
}