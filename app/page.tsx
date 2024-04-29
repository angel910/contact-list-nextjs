'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { ContactsList } from './components/contactsList'
import { contactsApi } from './components/ContactsApi'
import { SearchBar } from './components/SearchBar'
import { useState } from 'react'
import { NewContactButton } from './components/NewContactButton'
import Link from 'next/link'
import Contacts from './contacts/page'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      {router.push('/contacts')}
    </main >
  )
}