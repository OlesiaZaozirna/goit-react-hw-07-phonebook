import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-slice";
import css from "./ContactList.module.css"

const ContactList = () => {
   const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

 
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