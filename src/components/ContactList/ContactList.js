// Модули
import React from 'react';

// Компоненты
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        // key={contact.id}
        // avatar={friend.avatar}
        name={contact.name}
        // isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default ContactList;
