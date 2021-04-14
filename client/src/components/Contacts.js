import React from 'react'
import {useContacts} from '../contexts/ContactContext'
import {ListGroup} from 'react-bootstrap'

export default function Contacts() {

    const { contacts } = useContacts()

    const contactsItems = 
        contacts.map(contact => (
            <ListGroup.Item key={contact.id}>
                {contact.name}
            </ListGroup.Item>
        )
    )

    const empty = (
        <div className='ml-5 mt-3' style={{color:'black'}}>
            add some friends!
        </div>
    )

    return (
        <ListGroup variant='flush'>
            {
            (contacts.length > 0) ? contactsItems : empty
            }
        </ListGroup>
    )
}
