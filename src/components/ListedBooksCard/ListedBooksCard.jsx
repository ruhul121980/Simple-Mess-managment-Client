import React from 'react';
import { Link } from 'react-router-dom';

export default function ListedBooksCard({ listedBook }) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = listedBook;

    return (
        <div className="hero w-full sm:w-10/12 mx-auto min-h-32 border border-solid border-red mb-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='h-48 w-full lg:w-48 bg-slate-300 ml-0 lg:mr-24 flex justify-center items-center'>
                    <img src={image} className="rounded-lg shadow-2xl" alt={bookName} />
                </div>
                <div className='lg:mr-32'>
                    <h1 className="text-xl lg:text-5xl font-bold">{bookName}</h1>
                    <p className="py-2">By: {author}</p>

                    <div className='flex flex-wrap gap-x-5'>
                        {tags.map((tag, index) => (
                            <span className="py-3 mr-4" key={index}>Tag: #{tag}</span>
                        ))}
                    </div>

                    <div className="py-3">Year Of Publishing: {yearOfPublishing}</div>

                    <div className='flex flex-wrap gap-5'>
                        <div className=" font-light">Publisher: {publisher}</div>
                        <div>Pages: {totalPages}</div>
                    </div>

                    <p className="py-3"></p>
                    <button className="btn btn-primary rounded-2xl bg-blue-300 text-blue-500 border-0 mr-3">Category: {category}</button>
                    <button className="btn btn-primary mr-3 bg-orange-100 text-orange-400 rounded-2xl bg-blue-300 text-blue-500 border-0">Rating: {rating}</button>

                    <Link to={`/booksCard/${bookId}`}>
                        <button className="btn btn-primary rounded-2xl bg-green-500 text-white border-0 hover:none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
