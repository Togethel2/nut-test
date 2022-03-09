import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal, Table, Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import { TableStyle } from './styled';
import swal from 'sweetalert';

const TableList = () => {
  const updated = useRef(true)
  const [mode_create, setPopMode] = useState(true)

  const [active_id, setActiveId] = useState()
  const [active_name, setActiveName] = useState('')
  const [active_price, setActivePrice] = useState(0)
  const [active_postcode, setActivePost] = useState(0)
  const [active_desc, setActiveDesc] = useState('');

  const [show, setShow] = useState(false);

  const [list, setList] = useState([]);

  useEffect(() => {
    if (updated.current) {
      updated.current = false;
    } else {
      fetchList();
    }

  }, [list]);

  const handleShow = (index) => {
    if (index === 'create') {
      setPopMode(true)

      setActiveId('')
      setActiveName('')
      setActivePrice(0)
      setActivePost(0)
      setActiveDesc('')
    } else {
      setPopMode(false)

      setActiveId(list[index].id)
      setActiveName(list[index].name)
      setActivePrice(list[index].price)
      setActivePost(list[index].post_code)
      setActiveDesc(list[index].desc)
    }
    setShow(true);
  }

  const fetchList = async () => {
    try {
      await axios.get('https://test-backend.baania.dev/home?skip=1&take=100')
        .then((response) => {
          console.log('nut', response?.data.payload)
          setList(response?.data.payload)
        })
    } catch (err) {
      throw err;
    }
  }

  const updateData = async () => {
    let data = {
      id: active_id,
      name: active_name,
      price: active_price,
      desc: active_desc
    }
    try {
      let resp = await axios.patch(`https://test-backend.baania.dev/home/${active_id}`, data)
      if (resp.status === 200) {
        swal("Success!", "Updated", "success");
      }
    } catch (error) {
      swal("Error!", 'Something wrong', "error");
      console.error(error)
    }
  }

  const createData = async () => {
    let data = {
      name: active_name,
      price: active_price,
      desc: active_desc
    }
    setShow(!show);
    try {
      let resp = await axios.post(`https://test-backend.baania.dev/home`, data)
      if (resp.status === 200) {
        swal("Success!", "Creates", "success");
      }
    } catch (error) {
      swal("Error!", 'Something wrong', "error");
      console.error(error)
    }
  }

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        try {
          let resp = axios.delete(`https://test-backend.baania.dev/home/${id}`)
          if (resp.status === 200) {
            swal("Success!", "Deleted", "success");
          }
        } catch (error) {
          swal("Error!", 'Something wrong', "error");
          console.error(error)
        }
      }
    });
  }

  return (
    <>
      <TableStyle>
        <Button className="create" variant="success" onClick={() => handleShow('create')}>Create</Button>{' '}

        <Table striped hover borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Post Code</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((data, i) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.post_code}</td>
                    <td>{data.price}</td>
                    <td>
                      <Button variant="outline-warning" onClick={() => handleShow(i)}>View Detail</Button>{' '}
                      <Button variant="outline-danger" onClick={() => handleDelete(data.id)}>DELETE</Button>{' '}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </Table>

        {/* create and update model */}
        <Modal show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered onHide={() => { setShow(!show) }}>
          <Modal.Header closeButton>
            <Modal.Title>{mode_create ? 'create' : active_name} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-4">
                <Form.Group as={Col} lg={6} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Name"
                    className="name"
                    value={active_name}
                    onChange={e => setActiveName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control placeholder="Post Code"
                    value={active_postcode}
                    onChange={e => setActivePost(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control placeholder="Price"
                    value={active_price}
                    onChange={e => setActivePrice(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    value={active_desc}
                    onChange={e => setActiveDesc(e.target.value)}
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </Row>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => { setShow(!show) }}>
              Cancel
            </Button>

            {mode_create ?
              <Button variant="success" onClick={() => { createData(); }}>
                Create
              </Button>
              :
              <Button variant="primary" onClick={() => { updateData(); }}>
                UPDATE
              </Button>
            }
          </Modal.Footer>
        </Modal>

      </TableStyle>
    </>
  )
};

export default TableList
