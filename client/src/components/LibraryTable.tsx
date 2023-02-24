import React from "react";
import {Table} from "react-bootstrap"
export default function LibraryTable(){
    return (
    <>
        <Table striped >
            <thead>
                <th>ISBN</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>123</td>
                    <td>My book</td>
                    <td>Me</td>
                    <td>keloo</td>
                </tr>
            </tbody>
            </Table>    
    </>)
}