import React, { useEffect, useState } from 'react'
import BooksCard from '../BooksCard/BooksCard';

export default function Books() {

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])

  return (
    <div>
    <h2 className='text-center text-3xl font-bold mt-5 mb-5'>Books</h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
        {
            books.map(book=> <BooksCard key={book.id} book={book}></BooksCard>)
        }
      </div>

    </div>

  )
}
