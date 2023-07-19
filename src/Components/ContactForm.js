import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        name,
        phoneNumber,
      }
    })
  }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" 
        placeholder="이름" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control 
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="text" 
        placeholder="전화번호를 입력해주세요" 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm;