import React from 'react'
import { Row, Col, Form, Button, } from 'react-bootstrap'

const Formulir = (dataItem) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    <h4>Tambah data</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={dataItem.handleSubmit}>
                        <Form.Group className="mb-3" controlId="ussername">
                            <Form.Label>Ussername</Form.Label>
                            <Form.Control type="text" name="ussername" value={dataItem.ussername} onChange={(event) => dataItem.handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={dataItem.password} onChange={(event) => dataItem.handleChange(event)} />
                        </Form.Group>
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control as="textarea" rows={3} name="alamat" value={dataItem.alamat} onChange={(event) => dataItem.handleChange(event)} />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir