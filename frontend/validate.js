function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(str);
}
/*
    matches a string of six or more characters;
    that contains at least one digit (\d is shorthand for [0-9]);
    at least one lowercase character; and
    at least one uppercase character:
  */

function checkForm(e) {
  //e.preventDefault();  //to prevent form from submitting and refreshing the page

  if (form.username.value == "") {
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }
  re = /^\w+$/; //\w is shorthand for 'any letter, number or the underscore character'.
  if (!re.test(form.username.value)) {
    alert(
      "Error: Username must contain only letters, numbers and underscores!"
    );
    form.username.focus();
    return false;
  }

  if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if (!checkPassword(form.pwd1.value)) {
      alert("The password you have entered is not valid!");
      form.pwd1.focus();
      return false;
    }
  } else {
    alert(
      "Error: Please check that you've entered and confirmed your password!"
    );
    form.pwd1.focus();
    return false;
  }
  return true;
}

form.addEventListener("submit", checkForm);
