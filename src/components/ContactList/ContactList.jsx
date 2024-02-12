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
      {contacts.map(({ id, name, phone }) => (
        <li className={css.ContactListItem} key={id}>
          <p className={css.Description}>
            {name}: {phone}
          </p>
          <button className={css.Delete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    
    </ul>
  );
};
export default ContactList;