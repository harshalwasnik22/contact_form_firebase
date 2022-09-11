const firebaseConfig = {
    apiKey: "AIzaSyBDcgVmhsvGDCC2fojzInVaogC-h0H_6f4",
    authDomain: "contactform-harshal.firebaseapp.com",
    databaseURL: "https://contactform-harshal-default-rtdb.firebaseio.com",
    projectId: "contactform-harshal",
    storageBucket: "contactform-harshal.appspot.com",
    messagingSenderId: "283640292512",
    appId: "1:283640292512:web:a27dca3b2d37826b4f55c5"
  };

  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref('contactForm');
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = contactFormDB.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }