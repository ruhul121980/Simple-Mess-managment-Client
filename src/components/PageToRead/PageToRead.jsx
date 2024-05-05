import React from "react";
import Chart from "../Chart/Chart";
import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
  const readList = useLoaderData().map(book => ({ bookName: book.bookName, totalPages: book.totalPages }));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Pages to Read</h1>
      <Chart data={readList} />
    </div>
  );
};

export default PageToRead;
