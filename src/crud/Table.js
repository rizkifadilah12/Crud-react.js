import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = (user) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Ussername</th>
                    <th>Password</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {user.user.length > 0 ? user.user.map((users, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{users.ussername}</td>
                            <td>{users.password}</td>
                            <td>{users.alamat}</td>
                            <td>
                                <button className="btn btn-warning mr-2" onClick={() => user.edit(users.ussername.id)}>Edit</button>
                                <button className="btn btn-danger " onClick={() => user.delet(users.ussername.id)}>Delete</button>
                            </td>
                        </tr>

                    )
                }) : <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>}
            </tbody>
        </Table>
    );
};

export default Tabel
