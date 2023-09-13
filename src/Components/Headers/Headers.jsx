import profile from '../../assets/images/profile.png'

const Headers = () => {
      return (
            <header className='md:flex justify-between items-center py-7 border-b-2'>
                  <h1 className="text-[#111] font-bold text-4xl">Knowledge Cafe</h1>
                  <img src={profile} alt="Profile photo" />

            </header>
      );
};

export default Headers;