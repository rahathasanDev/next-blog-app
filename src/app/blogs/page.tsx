import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import React from "react";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs",
    {
      cache:"no-store",
    },
  );
  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-gray-400 text-center w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 m-5">
        {
          blogs.map((blog:Blog)=><BlogCard key={blog.id} blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default BlogsPage;
