import React from 'react';

const Blogcart = ({ date, url, title }) => {
  return (
    <div className='w-[400px] max-[425px]:w-full flex-shrink-0 rounded-lg overflow-hidden shadow hover:scale-95 transition-all bg-white'>
      
      {/* Blog Image */}
      <div className='h-[250px] w-full'>
        <img
          src={url}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Blog Content */}
      <div className='p-4'>
        <p className='text-sm text-gray-500 mb-1'>{date}</p>
        <h2 className='text-xl font-semibold text-gray-800 leading-snug'>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Blogcart;
