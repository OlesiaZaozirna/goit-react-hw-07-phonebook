import { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';

import css from "./ContactForm.module.css"

import { fetchContacts, addContact} from '../../redux/contacts/contacts-operation';

const ContactForm = () => {
 const [formData, setFormData] = useState ({
    name: '',
    number: '',
 });
  const {items} = useSelector(getAllContacts);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())

  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    //перевірка на дублювання номера
    const isUnique = !items.some(contact => contact.name === formData.name);
    if (!isUnique) {
      alert('This contact already exists');
      return;
    }
  
    if (!validateName(formData.name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!validateNumber(formData.number)) {
      alert('Please enter a valid phone number');
      return;
    }
      
    dispatch(addContact(formData));

    setFormData({ name: '', number: '' });
  };
  

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
     };
  
  const validateName = name => /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

  const validateNumber = number =>
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(number);

      return (
      <div >
        <form className={css.FormContainer} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input className={css.Input}
            type="text"
            placeholder="Contact name"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="number">Number</label>
          <input className={css.Input}
            type="tel"
            placeholder="Phone number"
            name="number"
            id="number"
            required
            value={formData.number}
            onChange={handleChange}
          />

          <button className={css.SubmitButton} type="submit">Add contact</button>
        </form>
      </div>
    );
  }



export default ContactForm;