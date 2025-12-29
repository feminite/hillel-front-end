const contactBook = {
  contacts: [
    { name: "John", phone: "+380501234567", email: "john@mail.com" },
    { name: "Peter", phone: "+380671234567", email: "peter@mail.com" },
    { name: "Mary", phone: "+380931234567", email: "mary@mail.com" }
  ],

  addContact(name, phone, email) {
    const newContact = { name, phone, email };
    contactBook.contacts.push(newContact);
    console.log(`Contact "${name}" added.`);
  },

  findContact(name) {
    const contact = contactBook.contacts.find(function(c) {
        return c.name === name;
    }); 
    
    if (contact) {
        console.log(`Contact found - ${contact.name}`);
        return contact;
    } else {
        console.log("Contact not found.");
        return null;
    }
  }
};

const userName = prompt("Enter name:");
