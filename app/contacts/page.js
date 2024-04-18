'use client'
import styles from '../page.module.css'
import { ContactsList } from '../components/contactsList'
import { contactsApi } from '../components/ContactsApi'
import { SearchBar } from '../components/SearchBar'
import { useState } from 'react'
import { NewContactButton } from '../components/NewContactButton'


export default function Contacts() {
  const [contacts, _] = useState(contactsApi.all())
  const [filteredContacts, setFilteredContacts] = useState(contactsApi.all())

  const contactsSearch = (term) => {
    // setFilteredCOntacts to what's returned from the filter

    if (!term.length) {
      setFilteredContacts(contacts)
    }

    console.log({ term: term })


    const lowerCaseSearchTerm = term.toLowerCase()

    const foundContacts = contacts.filter((contact) => {
      const fullName = `${contact.first_name} ${contact.last_name}`

      return fullName.toLowerCase().includes(lowerCaseSearchTerm)
    })
    console.log({ before_set_contacts: foundContacts })

    setFilteredContacts(foundContacts)
  }

  return (
    <main className={styles.main}>
      <h1>All Contacts</h1>

      <NewContactButton />

      <SearchBar onSearchTermChange={contactsSearch} />

      <ContactsList contacts={filteredContacts} />

    </main >
  )
}