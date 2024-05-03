import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getBookInfo } from '../../utility/localStorage';
import ListedBooksCard from '../ListedBooksCard/ListedBooksCard';
import { getBookInfo2 } from '../../utility/local';

export default function ListedBooks() {
  const allData = useLoaderData();
  const [listedBooks, setListedBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  const handleFilter = (filter, dropDown) => {
    if (filter === 'read') {
      if (dropDown === 'all') {
        setDisplayBooks(listedBooks);
      } else if (dropDown === 'rating') {
        const sortedBooks = [...listedBooks].sort((a, b) => b.rating - a.rating);
        setDisplayBooks(sortedBooks);
      } else if (dropDown === 'pages') {
        const sortedBooks = [...listedBooks].sort((a, b) => b.totalPages - a.totalPages);
        setDisplayBooks(sortedBooks);
      } else if (dropDown === 'year') {
        const sortedBooks = [...listedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setDisplayBooks(sortedBooks);
      }
    } else if (filter === 'wish') {
      if (dropDown === 'all') {
        setDisplayBooks(wishBook);
      } else if (dropDown === 'rating') {
        const sortedBooks = [...wishBook].sort((a, b) => b.rating - a.rating);
        setDisplayBooks(sortedBooks);
      } else if (dropDown === 'pages') {
        const sortedBooks = [...wishBook].sort((a, b) => b.totalPages - a.totalPages);
        setDisplayBooks(sortedBooks);
      } else if (dropDown === 'year') {
        const sortedBooks = [...wishBook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setDisplayBooks(sortedBooks);
      }
    }
  }

  useEffect(() => {
    const storedIds = getBookInfo();
    if (allData.length > 0) {
      const bookApplied = allData.filter(data => storedIds.includes(data.bookId));
      setListedBooks(bookApplied);
      setDisplayBooks(bookApplied);

      const storedIds2 = getBookInfo2();
      const bookApplied2 = allData.filter(data => storedIds2.includes(data.bookId));
      setWishBook(bookApplied2);
    }
  }, []);

  return (
    <div className='mt-5'>
      <div className="dropdown dropdown-bottom ml-24">
        <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <button onClick={() => handleFilter('read', 'all')}><li><a>All</a></li></button>
          <button onClick={() => handleFilter('read', 'rating')}><li ><a>Rating</a></li></button>
          <button onClick={() => handleFilter('read', 'pages')}><li><a>Number of Pages</a></li></button>
          <button onClick={() => handleFilter('read', 'year')}><li><a>Published Year</a></li></button>
        </ul>
      </div>

      <div className='flex w-10/12 mx-auto mb-5'>
        <button onClick={() => handleFilter('read', null)} className="'pl-1 border-b border-slate-500 mr-3">Read Books</button>
        <button onClick={() => handleFilter('wish', null)} className="'pl-1 border-b border-slate-500">Wishlist Books</button>
      </div>

      <div className='mb-5'>
        {displayBooks.map(listedBook => <ListedBooksCard key={listedBook.bookId} listedBook={listedBook}></ListedBooksCard>)}
      </div>
    </div>
  );
}
