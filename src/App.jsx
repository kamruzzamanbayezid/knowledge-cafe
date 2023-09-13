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

  const handleReadingTime = (blog) => {
    const newReadingTime = blog.reading_time;
    console.log(newReadingTime);
    setReadingTime(readingTime + newReadingTime);
  }


  return (
    <>
      <Headers></Headers>
      <div className='md:flex gap-6'>

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
