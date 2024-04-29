'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal, Button, Form } from "react-bootstrap";
import { contactsApi } from "@/app/components/ContactsApi";
import Contacts from "../page";


export default function newContactModal() {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const router = useRouter();

  const handleSubmitNewContactClick = () => {

    let uniqueId = Math.round(Math.random() * 100000000).toString()

    let newContactData = {
      "id": uniqueId,
      "profile_picture": imageUrl,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber,
      "email": email
    }

    console.log(newContactData)

    contactsApi.addContact(newContactData)

    console.log(contactsApi.all())

    router.back()
  }

  const handleClose = () => {
    // router.push('/contacts')
    router.back()
  }

  const formAttributes = {
    formGroups: [
      {
        label: "First Name",
        className: "mb-3",
        controlId: function () { return `form${this.label.replace(/\s/g, '')}` },
        type: "text",
        placeholder: function () { return this.label },
        stateFunction: setFirstName
      },
      {
        label: "Last Name",
        className: "mb-3",
        controlId: function () { return `form${this.label.replace(/\s/g, '')}` },
        type: "text",
        placeholder: function () { return this.label },
        stateFunction: setLastName
      },
      {
        label: "Phone",
        className: "mb-3",
        controlId: function () { return `form${this.label.replace(/\s/g, '')}` },
        type: "text",
        placeholder: function () { return this.label },
        stateFunction: setPhoneNumber
      },
      {
        label: "Email",
        className: "mb-3",
        controlId: function () { return `form${this.label.replace(/\s/g, '')}` },
        type: "email",
        placeholder: function () { return this.label },
        stateFunction: setEmail
      },
      {
        label: "Image URL",
        className: "mb-3",
        controlId: function () { return `form${this.label.replace(/\s/g, '')}` },
        type: "url",
        placeholder: function () { return this.label },
        stateFunction: setImageUrl
      },
    ],
    generate_form_groups: function () {
      let formGroups = [];

      this.formGroups.forEach((formGroup) => {
        formGroups.push(
          <Form.Group
            key={formGroup.controlId()}
            className={formGroup.className}
            controlId={formGroup.controlId()}
            onChange={(e) => formGroup.stateFunction(e.target.value)}
          >
            <Form.Label htmlFor={0}>{formGroup.label}</Form.Label>
            <Form.Control type={formGroup.type} />
          </Form.Group>
        )
      })

      return formGroups
    }
  }


return (
  <>

  <Contacts/>

    <Modal
      show={true}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form>
          {formAttributes.generate_form_groups()}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          variant="success"
          onClick={handleSubmitNewContactClick}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}