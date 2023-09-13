import PropTypes from 'prop-types';
import './App.css'
import Headers from './Components/Headers/Headers'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
  return (
    <>
      <Headers></Headers>
      <div className='md:flex gap-6'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

App.propTypes = {

};

export default App
