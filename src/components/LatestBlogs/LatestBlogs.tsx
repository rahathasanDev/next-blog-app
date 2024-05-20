import { Blog } from '@/types';
import React from 'react';

const LatestBlogs = ({blogs}:{blogs:Blog[]}) => {
  return (
    <div>
      <h1 className='text-4xl text-center my-5'>Latest Blogs From <span className='text-accent'>Blogiz</span></h1>
      <p className='text-xl text-gray-400 text-center w-2/4 mx-auto'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
    </div>
  );
};

export default LatestBlogs;