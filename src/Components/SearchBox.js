import React, {useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  let [keyword, setKeyWord] = useState('');
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_BY_USERNAME",
      payload: { keyword }
    })
  }
  
  return (
    <Form onSubmit={searchByName}>
    <Row>
      <Col lg={10}>
        <Form.Control 
        value={keyword}
        onChange={(e) => setKeyWord(e.target.value)}
        type='text' 
        placeholder="이름"
        />
      </Col>
      <Col lg={2}>
        <Button>
          찾기
        </Button>
      </Col>
    </Row>
    </Form>
  )
}

export default SearchBox