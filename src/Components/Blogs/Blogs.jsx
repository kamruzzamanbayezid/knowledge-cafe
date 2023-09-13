import { useEffect } from "react";
import { useState } from "react";
import Blog from "../BLog/Blog";

const Blogs = ({handleBookMark,handleReadingTime}) => {

      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            fetch('blog.json')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
      }, []);

      return (
            <div className="removeLastBorder lg:w-8/12">
                  {
                        blogs.map((blog,index) => <Blog
                              key={blog.id+index}
                              blog={blog}
                              blogIndex={index}
                              blogLength={blogs.length}
                              handleBookMark={handleBookMark}
                              handleReadingTime={handleReadingTime}>
                        </Blog>)
                  }
            </div>
      );
};


export default Blogs;