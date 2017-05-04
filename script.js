
function videoplay() {
    var playimg = document.getElementById("playimg");
    playimg.style.display = "none";
    var video = document.getElementById("video");
    video.style.display = "block";
    var h2 = document.getElementById("work-h2");
    h2.style.marginBottom = "0px";
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (name != '' && email != '') {
        if (name.match("[0-9]+")) {
            alert("Invalid Name contain numbers...!!!");
            return false;
        } else {
            if (!email.match(emailReg)) {
                alert("Invalid Email Address...!!!");
                return false;
            }
            if (phone == "") {
                alert("Enter Your Phone...!!!");
                return false;
            }
            if (message == "") {
                alert("Enter Your Message...!!!");
                return false;
            }
        }

        return alert("Your message sent successfully");
    } else {
        alert("All fields are required.....!");
        return false;
    }
}
