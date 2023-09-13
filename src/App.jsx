import './App.css'
import Headers from './Components/Headers/Headers'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const [bookMarkData, setBookMarkData] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // sent item to Bookmark.jsx
  const handleBookMark = (blog) => {
    const newBookMarkdata = [...bookMarkData, blog]
    setBookMarkData(newBookMarkdata);
  };

  
  const handleReadingTime = (blog, id) => {
    const newReadingTime = blog.reading_time;
    setReadingTime(readingTime + newReadingTime);
  
    // remove item from bookmark
    const removeData = bookMarkData.filter(data => data.id !== id)
    setBookMarkData(removeData);
  }

  return (
    <>
      <Headers></Headers>
      <div className='lg:flex gap-6 mt-8'>

        <Blogs
          handleBookMark={handleBookMark}
          handleReadingTime={handleReadingTime}>
        </Blogs>

        <Bookmarks bookMarkData={bookMarkData} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}


export default App
