function onSubmit(e) {
  var mailReg = /\S+@\S+\.\S+/;
  var pasReg = /^[A-Za-z\d]{8,}/;
  var nameValidation = /\d/;
  var fname = document.myform.fName.value;
  var lname = document.myform.lName.value;
  var pass = document.myform.password.value;
  var email = document.myform.eMail.value;
  var formStatus = false;

  if (fname && lname && email && password) {
    if (nameValidation.test(fname) || nameValidation.test(lname)) {
      console.log("Name cannont have Numbers");
      formStatus = false;
    }
  
    if (!mailReg.test(email)) {
      console.log("Enter a valid email address");
      formStatus = false;
    }
  
    if (!pasReg.test(pass)) {
      console.log(
        "Password should be atleast 8 digits and no special characters"
      );
      formStatus = false;
    }
  } else {
    console.log('Input all the fields');
  }
  return formStatus;
}
