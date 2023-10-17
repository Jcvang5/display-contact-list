$(document).ready(function () {
    if (localStorage.phonebook) {
      var phonebook = JSON.parse(localStorage.phonebook);
    } else {
      var phonebook = [];
    }
  
  
    $('#add').click(function () {
      addContact();
    });
  
  
    $('#retrieve').click(function () {
      var first = prompt("First Name:");
      var last = prompt("Last Name:");
      if (contactExists(first, last)) {
        retrieveContact(first, last);
      } else {
        var yesNo = prompt("That name is not in your contact list, would you like to add them?");
        if (yesNo.toLowerCase() == "yes") {
          addContact(first, last);
        }
      }
    });
  
  
    $('#print').click(function () {
      printContacts();
    });
  
  
    function addContact() {
      var first = prompt("First name: ");
      var last = prompt("Last Name");
      var num = prompt("Number: ");
  
  
      var contact = {
        firstName: first,
        lastName: last,
        number: num
      };
  
  
      phonebook.push(contact);
      localStorage.phonebook = JSON.stringify(phonebook);
    }
  
  
    function contactExists(first, last) {
      for (var i = 0; i < phonebook.length; i++) {
        if (phonebook[i].firstName == first && phonebook[i].lastName == last) {
          return true;
        }
      }
      return false;
    }
  
  
    function retrieveContact(first, last) {
      for (var i = 0; i < phonebook.length; i++) {
        if (phonebook[i].firstName == first && phonebook[i].lastName == last) {
          $("#contact-reveal").append(phonebook[i].firstName + " " + phonebook[i].lastName + ": " + phonebook[i].number + "<br>");
        }
      }
    }
  
  
    function printContacts() {
      $("#contact-reveal").empty(); // Clear existing content
      for (var i = 0; i < phonebook.length; i++) {
        $("#contact-reveal").append(phonebook[i].firstName + " " + phonebook[i].lastName + ": " + phonebook[i].number + "<br>");
      }
    }
  });
  