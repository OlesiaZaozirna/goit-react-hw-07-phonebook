import { useSelector, useDispatch} from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import { useEffect } from 'react';

import {deleteContact, fetchContacts} from '../../redux/contacts/contacts-operation';
import css from "./ContactList.module.css"

function ContactList(){
   const {items} = useSelector(getFilteredContacts);
  
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <ul className={css.ContactListContainer}>
      {items.map(({ id, name, number }) => (
          <li className={css.ContactListItem} key={id}>
          {name}: {number}
           <button className={css.Delete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;