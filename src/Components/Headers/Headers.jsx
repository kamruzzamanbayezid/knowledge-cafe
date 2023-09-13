import profile from '../../assets/images/profile.png'

const Headers = () => {
      return (
            <header className='md:flex  justify-between items-center py-7 border-b-2'>
                  <h1 className="text-[#111] text-center font-bold text-4xl sm:text-center">Knowledge Cafe</h1>
                  <div className='flex justify-center mt-4'>
                        <img src={profile} alt="Profile photo" />
                  </div>
            </header>
      );
};

export default Headers;