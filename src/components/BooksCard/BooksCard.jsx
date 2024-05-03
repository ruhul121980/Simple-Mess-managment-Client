import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

export default function BooksCard({ book }) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    

    return (
        <Link to={`/booksCard/${bookId}`} className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Book" /></figure>
            <div className="card-body">
                
            {Array.from({ length: Math.ceil(tags.length / 2) }).map((_, index) => (
                        <div className="flex" key={index}>
                            <span className="py-3  text-[#23BE0A] ">#{tags[index * 2]}</span>
                            {tags[index * 2 + 1] && <span className="py-3  ml-4 text-[#23BE0A]">#{tags[index * 2 + 1]}</span>}
                        </div>
                    ))}

                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <div className='flex justify-between'>
                    <div>{category}</div>
                    <div className='flex'>
                        <span className='mb-5 mr-1'>{rating}</span>
                        <span className='ml mt-1'><FaRegStar /></span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
