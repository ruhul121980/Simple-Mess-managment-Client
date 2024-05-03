import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookInfo } from '../../utility/localStorage';
import { saveBookInfo2 } from '../../utility/local';

export default function BookDetails() {
    const Booksdata = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = Booksdata.find(book => book.bookId == idInt);
  
    
    const notify = () => {
        toast("Book Added to Read List");
        saveBookInfo(idInt)
    };
    const wish = () => {
        toast("Book Added to Wish List");
        saveBookInfo2(idInt)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.bookName}</h1>
                    <p className="py-3 border-b pb-4 border-dotted border-red-500 mb-4">By: {data.author}</p>
                    <p className="py-3 border-b pb-4 border-dotted border-red-500 mb-4">{data.category}</p>
                    <p className=" "><span className='font-bold'>Review: </span>{data.review}</p>
                    {Array.from({ length: Math.ceil(data.tags.length / 2) }).map((_, index) => (
                        <div className="flex" key={index}>
                            <span className="py-3  text-[#23BE0A] ">#{data.tags[index * 2]}</span>
                            {data.tags[index * 2 + 1] && <span className="py-3  ml-4 text-[#23BE0A]">#{data.tags[index * 2 + 1]}</span>}
                        </div>
                    ))}
                    <p className=" mb-4"><span className='mr-10'>Number of Pages:</span>{data.totalPages}</p>
                    <p className=" mb-4">Publisher: {data.publisher}</p>
                    <p className=" mb-4">Year of Publishing: {data.yearOfPublishing}</p>
                    <p className=" mb-4">Rating: {data.rating}</p>
                    <div className="flex gap-4">
                        <div>
                            <button onClick={notify} className="btn btn-outline mr-4">Read</button>
                            <ToastContainer />
                        </div>
                        <div>
                            <button onClick={wish} className="btn btn-info">Wishlist</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
