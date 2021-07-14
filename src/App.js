// Модули
import React, { Component } from 'react';

// Компоненты
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
    // this.setState.contacts(contacts.push(data))
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
