import { useEffect } from "react";
import { useState } from "react";
import Blog from "../BLog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMark,handleReadingTime}) => {

      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            fetch('blog.json')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
      }, []);

      return (
            <div className="border md:w-8/12">
                  {
                        blogs.map((blog,index) => <Blog
                              key={blog.id+index}
                              blog={blog}
                              handleBookMark={handleBookMark}
                              handleReadingTime={handleReadingTime}>
                        </Blog>)
                  }
            </div>
      );
};

Blogs.propTypes = {
      blogs: PropTypes.array,
};

export default Blogs;