'use client';
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { contactsApi } from '@/app/components/ContactsApi';

export default function Contact() {
  const { id } = useParams();
  const contact = contactsApi.get(id);
  const imageSize = 300;

  if (!contact) {
    return (
      <div>
        <span>
          <h3>Sorry, but the contact was not found <Link href={"/contacts"}>click here</Link> to go back to contact list 😅</h3>
        </span>
      </div>
    )
  }

  return (
    <main className={styles.main} style={{ textAlign: 'center' }}>
      <div>
        <h1>Contact Info</h1>
        <Link href='/contacts'>Back</Link>
        <h1>{`${contact.first_name} ${contact.last_name}`}</h1>
        <img src={contact.profile_picture} alt={contact.first_name} width={imageSize} height={imageSize} />
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
    </main>
  );
}