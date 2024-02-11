import { useSelector, useDispatch} from "react-redux";
import { selectFilteredContacts} from "../../redux/contacts/contacts-selectors";
import { useEffect } from 'react';

import {deleteContact, fetchContacts} from '../../redux/contacts/contacts-operation';
import css from "./ContactList.module.css"

function ContactList(){
   const contacts = useSelector(selectFilteredContacts);
  
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
   if (!contacts) {
    return <div>Loading...</div>;
  }

    return (
    <ul className={css.ContactListContainer}>
      {contacts.map(({ id, name, number }) => (
          <li className={css.ContactListItem} key={id}>
          {name}: {number}
           <button className={css.Delete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;