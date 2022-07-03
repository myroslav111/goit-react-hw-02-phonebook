import React from 'react';
import { ListWraper } from './ContainerContact.styled';
import ListContactItem from './ListContactItem';
import PropTypes from 'prop-types';

const ContainerContact = ({ arrContacts, onDeleteContact }) => {
  return (
    <div>
      <ListWraper>
        {arrContacts.map(contact => (
          <ListContactItem
            key={contact.id}
            arrContacts={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ListWraper>
    </div>
  );
};

ContainerContact.propTypes = {
  arrContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default ContainerContact;
