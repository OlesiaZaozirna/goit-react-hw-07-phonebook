export const selectContacts = store => store.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
