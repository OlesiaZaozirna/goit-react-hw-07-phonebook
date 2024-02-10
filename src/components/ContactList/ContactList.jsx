import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

import {deleteContact} from '../../redux/contacts/contacts-operation';
import css from "./ContactList.module.css"

const ContactList = () => {
   const {items, isLoading, error} = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

   if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (items.length === 0) {
    return <p>No contacts found. Try again.</p>;
  }

 
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