import { useEffect } from "react";
import { useState } from "react";
import Blog from "../BLog/Blog";
import PropTypes from 'prop-types';

const Blogs = () => {

      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            fetch('blog.json')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
      }, []);

      return (
            <div className="border md:w-8/12">
                  {
                        blogs.map(blog => <Blog
                              key={blog.id}
                              blog={blog}>
                        </Blog>)
                  }
            </div>
      );
};

Blogs.propTypes = {
      blogs: PropTypes.array.isRequired,
};

export default Blogs;