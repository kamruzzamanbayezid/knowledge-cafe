import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookMark, handleReadingTime }) => {

      const { author, author_img, cover, posted_date, reading_time, title, hashtags } = blog;

      return (
            <div className='border-b-2 pb-9 mb-9'>
                  {/* Cover Photo */}
                  <img className='w-full mb-8 rounded-lg' src={cover} alt="Blog Cover" />

                  <div className='flex justify-between items-center mb-4'>
                        {/* Author Information */}
                        <div className='flex items-center gap-6'>
                              <img className='w-16' src={author_img} alt="Author Image" />
                              <div>
                                    <h3 className='text-2xl font-bold'>{author}</h3>
                                    <p className='text-[gray] font-semibold'>{posted_date}</p>
                              </div>
                        </div>
                        {/* read time && Bookmark icon */}
                        <div className='flex items-center gap-2'>
                              <h1 className='text-[gray] text-xl font-medium'>0{reading_time} min read</h1>

                              {/* Bookmark Icon */}
                              <button onClick={() => { handleBookMark(blog) }} className='text-2xl'><FaRegBookmark></FaRegBookmark></button>
                        </div>
                  </div>


                  {/* Title */}
                  <h2 className='text-4xl font-bold text-[#111] mb-4'>{title}</h2>

                  {/* HashTag */}
                  <div className='mb-5'>
                        {
                              hashtags.map((hashtag, index) => <a className='text-[gray] text-xl font-medium mr-4' key={hashtag + index}>#<span>{hashtag}</span></a>)
                        }
                  </div>
                  {/* Mark as read */}
                  <a onClick={() => { handleReadingTime(blog) }} href="#" className='underline text-xl font-semibold text-[#6047EC] mb-7'>Mark as read</a>

            </div>
      );
};

Blog.propTypes = {
      blog: PropTypes.object.isRequired
};

export default Blog;