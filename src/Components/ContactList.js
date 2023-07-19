import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const {contact, keyword} = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((it) => it.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBox />
      {filteredList.map((it) => (
        <ContactItem item={it} />
      ))}
    </div>
  )
}

export default ContactList