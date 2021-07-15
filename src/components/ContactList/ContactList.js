// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        number={contact.number}
        name={contact.name}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
