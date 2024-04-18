'use client';
import React from "react";
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from "next/navigation";

export const ContactsList = ({ contacts }) => {

  const router = useRouter()

  let contactsNames = contacts.map((contact) => {
    return (
      <tr onClick={() => router.push(`contacts/${contact.id}`)} key={contact.id}>
        <td>
        <img
        src={contact.profile_picture}
        alt={contact.name}
      />
        </td>
        <td>
          <Link href={`contacts/${contact.id}`}>{`${contact.first_name} ${contact.last_name}`} </Link>
        </td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>
          <Link href={`/edit`}>edit</Link>
          <span> </span>
          <Link href={`/delete`}>delete</Link>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contactsNames}
        </tbody>
      </table>
    </div>
  )
}

ContactsList.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object)
}