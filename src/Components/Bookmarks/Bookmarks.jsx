
const Bookmarks = ({ bookMarkData, readingTime }) => {
      // console.log(readingTime);
      return (
            <div className="w-1/3 border">
                  <h3 className="text-[#6047EC] text-2xl font-bold py-5 px-10 bg-[#6047ec1a] rounded-lg">Spent time on read : <span>{readingTime}</span> min</h3>

                  <div className="bg-[#6047ec1a] mt-6 rounded-lg p-7">
                        <h2 className="text-[#111] text-2xl font-bold mb-4">Bookmarked Blogs : {bookMarkData.length}</h2>
                        {
                              bookMarkData.map(bookMark => <h3 key={bookMark.id} className="text-[#111] text-lg font-semibold p-4 rounded-lg mb-4 bg-white">{bookMark.title}</h3>)
                        }
                  </div>
            </div>

      );
};

export default Bookmarks;