import React, { useEffect, useState } from "react";
import {Button, Form, InputGroup, Table} from "react-bootstrap"
import "./LibraryTable.css"
export default function LibraryTable(){
    const [booksData,setBooksData]:any=useState([])
    const [searchText,setSearchText]=useState('')
    function fetchTableData(){
        fetch("/books")
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setBooksData(data)
            })
            .catch((err)=>console.log(err))
    }
    const handleSearchText=(event:any)=>{
        setSearchText(event.currentTarget.value)
        console.log(searchText)
    }
    const handleSearch=()=>{
        if(searchText=="") fetchTableData()
       else 
       {
        fetch("/books/"+searchText)
            .then((res)=>res.json())
            .then((data)=>{
                let book=[]
                book.push(data)
                setBooksData(book)
            })
            .catch((err)=>console.log(err))
        }
    }
    useEffect(()=>{
        fetchTableData()
    },[])
    return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by ISBN"
          aria-label="Search by ISBN"
          aria-describedby="search"
          onChange={(e)=>handleSearchText(e)}
        />
        <Button variant="outline-primary" id="search" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <br></br>
    
        <Table striped >
            <thead>
                <th className="th-sm">ISBN</th>
                <th className="th-lg">Book Title</th>
                <th className="th-sm">Author</th>
                <th className="th-lg">Description</th>
            </thead>
            <tbody>
                {(booksData)
                ?
                 (
                    booksData.map((book:any,i:number)=>(
                        <tr key={i}>
                        <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.authors}</td>
                        <td>{book.description}</td>
                        </tr>
                        
                    ))
                )
                :(<tr>Loading</tr>)
               
                }
            </tbody>
            </Table>    
    </>)
}