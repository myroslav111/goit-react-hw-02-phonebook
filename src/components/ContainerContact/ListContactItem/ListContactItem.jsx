import React from 'react';
import { ButtonDelete, Item } from './ListContactItem.styled';
import PropTypes from 'prop-types';

const ListContactItem = ({ arrContacts, onDeleteContact }) => {
  return (
    <Item>
      <div>
        <span>{arrContacts.name}: </span>
        <span>{arrContacts.number} </span>
      </div>

      <ButtonDelete
        type="button"
        onClick={() => onDeleteContact(arrContacts.id)}
      >
        delete
      </ButtonDelete>
    </Item>
  );
};

ListContactItem.propTypes = {
  arrContacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ListContactItem;
