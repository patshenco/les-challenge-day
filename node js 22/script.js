// Define a collection to store contacts (an array of objects)
const contacts = [];

// Function to add a contact
function addContact() {
  const name = prompt("Enter the name of the contact:");
  const phoneNumber = prompt("Enter the phone number of the contact:");
  
  // Create a contact object
  const contact = {
    name: name,
    phoneNumber: phoneNumber,
  };
  
  // Add the contact to the collection
  contacts.push(contact);
  
  console.log("Contact added successfully!");
}

// Function to view all contacts
function viewContacts() {
  if (contacts.length === 0) {
    console.log("No contacts found.");
  } else {
    console.log("List of contacts:");
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`);
    });
  }
}

// Function to search for a contact
function searchContact() {
  const searchName = prompt("Enter the name to search for:");
  const foundContact = contacts.find(contact => contact.name === searchName);
  
  if (foundContact) {
    console.log(`Contact found - Name: ${foundContact.name}, Phone Number: ${foundContact.phoneNumber}`);
  } else {
    console.log("Contact not found.");
  }
}

// Main menu loop
while (true) {
  const choice = prompt("Choose an option:\n1. Add Contact\n2. View Contacts\n3. Search Contact\n4. Exit");
  
  switch (choice) {
    case "1":
      addContact();
      break;
    case "2":
      viewContacts();
      break;
    case "3":
      searchContact();
      break;
    case "4":
      console.log("Exiting the application.");
      // Exit the application
      process.exit(0);
    default:
      console.log("Invalid choice. Please try again.");
  }
}
