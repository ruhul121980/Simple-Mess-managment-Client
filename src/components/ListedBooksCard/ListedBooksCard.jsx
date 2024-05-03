import React from 'react'
import { Link } from 'react-router-dom';

export default function ListedBooksCard({ listedBook }) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = listedBook;
    return (
        <div className="hero w-10/12 mx-auto min-h-32 border border-solid border-red mb-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='h-48 w-48 bg-slate-300 ml-0 flex justify-center items-center mr-24'>
                <img src={image} className=" rounded-lg  shadow-2xl" />
                </div>
                <div className='mr-32'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-2">By: {author}</p>

                    <div className='flex gap-x-5'>
                    <div>
                    {Array.from({ length: Math.ceil(tags.length / 2) }).map((_, index) => (
                        <div className="flex" key={index}>
                            <span className='py-3 mr-4'>Tag: </span>
                            <span className="py-3  text-[#23BE0A] ">#{tags[index * 2]}</span>
                            {tags[index * 2 + 1] && <span className="py-3  ml-6 text-[#23BE0A]">#{tags[index * 2 + 1]}</span>}
                        </div>
                    ))}
                    </div>

                    <div className="py-3">Year Of Publishing: {yearOfPublishing}</div>

                    </div>

                    <div className='flex gap-5'>
                    <div className=" font-light">Publisher: {publisher}</div>
                    <div>Pages: {totalPages}</div>
                    </div>

                    <p className="py-3"></p>
                    <button className="btn btn-primary rounded-2xl bg-blue-300 text-blue-500 border-0 mr-3">Category: {category}</button> 
                    <button className="btn btn-primary mr-3 bg-orange-100 text-orange-400 rounded-2xl bg-blue-300 text-blue-500 border-0">Rating: {rating}</button> 

                    

                    <Link to={`/booksCard/${bookId}`}><button  className="btn btn-primary rounded-2xl bg-green-500 text-white border-0 hover:none">View Details</button> </Link>
                </div>
            </div>
        </div>
    )
}
